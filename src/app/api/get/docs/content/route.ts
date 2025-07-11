import { z } from "zod";
import { getLocalDocFile } from "@/lib/local-docs";
import { NextRequest } from "next/server";

// Simple in-memory rate limiting
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 60; // 60 requests per minute
const requestCounts = new Map<string, { count: number; timestamp: number }>();

function getRateLimitInfo(ip: string): { isLimited: boolean; remaining: number } {
  const now = Date.now();
  const requestInfo = requestCounts.get(ip);

  if (!requestInfo || (now - requestInfo.timestamp) > RATE_LIMIT_WINDOW) {
    // Reset or initialize rate limit info
    requestCounts.set(ip, { count: 1, timestamp: now });
    return { isLimited: false, remaining: MAX_REQUESTS - 1 };
  }

  if (requestInfo.count >= MAX_REQUESTS) {
    return { isLimited: true, remaining: 0 };
  }

  // Increment count
  requestInfo.count++;
  requestCounts.set(ip, requestInfo);
  return { isLimited: false, remaining: MAX_REQUESTS - requestInfo.count };
}

// Clean up old rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, info] of requestCounts.entries()) {
    if (now - info.timestamp > RATE_LIMIT_WINDOW) {
      requestCounts.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW);

const fileParamSchema = z.object({
  file: z.string().min(1, "File parameter is required"),
});

export async function GET(req: NextRequest) {
  // Get client IP - NextRequest doesn't have direct ip property
  const forwardedFor = req.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(',')[0] : "unknown";
  
  // Check rate limit
  const { isLimited, remaining } = getRateLimitInfo(ip);
  if (isLimited) {
    return new Response("Rate limit exceeded", {
      status: 429,
      headers: {
        "Retry-After": `${RATE_LIMIT_WINDOW / 1000}`,
        "X-RateLimit-Limit": `${MAX_REQUESTS}`,
        "X-RateLimit-Remaining": "0",
      },
    });
  }

  const { searchParams } = new URL(req.url);
  const file = searchParams.get("file");
  // Validate query param
  const parsed = fileParamSchema.safeParse({ file });
  if (!parsed.success) {
    console.error(`[GET /api/get/docs/content] Invalid query:`, parsed.error);
    return new Response(parsed.error.message, { 
      status: 400,
      headers: {
        "X-RateLimit-Limit": `${MAX_REQUESTS}`,
        "X-RateLimit-Remaining": `${remaining}`,
      },
    });
  }
  try {
    const content = await getLocalDocFile(parsed.data.file);
    return new Response(content, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown",
        "X-RateLimit-Limit": `${MAX_REQUESTS}`,
        "X-RateLimit-Remaining": `${remaining}`,
      },
    });
  } catch (e: any) {
    console.error(`[GET /api/get/docs/content] Error:`, e);
    return new Response(e.message, { 
      status: 404,
      headers: {
        "X-RateLimit-Limit": `${MAX_REQUESTS}`,
        "X-RateLimit-Remaining": `${remaining}`,
      },
    });
  }
}
