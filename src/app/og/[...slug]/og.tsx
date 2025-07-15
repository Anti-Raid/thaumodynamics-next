import type { ImageResponseOptions } from "next/dist/compiled/@vercel/og/types";
import { ImageResponse } from "next/og";
import type { ReactElement, ReactNode } from "react";
import { title } from "@/app/layout.config";

interface GenerateProps {
  title: ReactNode;
  tag: string;
  description?: ReactNode;
  primaryTextColor?: string;
}

export function generateOGImage(
  options: GenerateProps & ImageResponseOptions,
): ImageResponse {
  const { title, tag, description, primaryTextColor, ...rest } = options;

  return new ImageResponse(
    generate({
      title,
      tag,
      description,
      primaryTextColor,
    }),
    {
      width: 1200,
      height: 630,
      ...rest,
    },
  );
}

export function generate({
  primaryTextColor = "rgb(255,150,255)",
  ...props
}: GenerateProps): ReactElement {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        color: "white",
        backgroundImage:
          "radial-gradient(145% 145% at 110% 110%, rgba(31,102,244,1) 0%, rgba(19,72,180,1) 30%, rgba(10,38,96,1) 60%, #000 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "24px",
            marginBottom: "auto",
            color: primaryTextColor,
          }}
        >
          <p
            style={{
              fontSize: "46px",
              fontWeight: 600,
            }}
          >
            {title}
          </p>
        </div>
        <p
          style={{
            fontWeight: 600,
            fontSize: "26px",
            textTransform: "uppercase",
          }}
        >
          {props.tag.replace(/-/g, " ")}
        </p>
        <p
          style={{
            fontWeight: 600,
            fontSize: "56px",
          }}
        >
          {props.title}
        </p>
        <p
          style={{
            fontSize: "28px",
            color: "rgba(240,240,240,0.7)",
          }}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
}
