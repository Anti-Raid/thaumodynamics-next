"use client";

import {
  type Easing,
  motion,
  type Transition,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import Link from "next/link";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  FiArrowRight,
  FiBook,
  FiCode,
  FiDatabase,
  FiExternalLink,
  FiGithub,
  FiLock,
  FiSettings,
  FiShield,
  FiUsers,
  FiZap,
} from "react-icons/fi";

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-fd-background">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-fd-foreground mb-4">
          Something went wrong
        </h2>
        <p className="text-fd-muted-foreground mb-4">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-fd-primary text-white rounded-lg"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

const HomeContent: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Throttle mouse move updates to prevent excessive state updates
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 60 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as Easing,
      },
    },
  };

  const staggerContainer: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const quickStartItems = [
    {
      icon: FiShield,
      title: "Getting Started",
      description: "Set up AntiRaid in your Discord server",
      href: "/getting-started",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FiCode,
      title: "Scripting Guide",
      description: "Learn Luau scripting for custom automation",
      href: "/scripting",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: FiSettings,
      title: "Configuration",
      description: "Configure AntiRaid for your server needs",
      href: "/configuration",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: FiDatabase,
      title: "API Reference",
      description: "Integrate with AntiRaid's powerful API",
      href: "/api",
      color: "from-orange-500 to-red-500",
    },
  ];

  const features = [
    {
      icon: FiShield,
      title: "Raid Prevention",
      description: "Advanced protection against server raids and spam attacks",
    },
    {
      icon: FiCode,
      title: "Custom Scripting",
      description: "Luau-based scripting system for unlimited customization",
    },
    {
      icon: FiDatabase,
      title: "Server Backups",
      description: "Comprehensive backup and restore functionality",
    },
    {
      icon: FiUsers,
      title: "User Management",
      description: "Advanced moderation tools and user tracking",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-fd-background via-fd-muted to-fd-background dark:from-fd-background dark:via-fd-muted dark:to-fd-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-fd-primary/10 to-purple-500/10 rounded-full blur-3xl"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-fd-primary/10 rounded-full blur-3xl"
          style={{ y: y2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-fd-primary/10 text-fd-primary rounded-full text-sm font-medium mb-6">
              <FiZap className="w-4 h-4 mr-2" />
              Most Trusted Discord Security
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-fd-foreground mb-6 leading-tight">
              AntiRaid
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fd-primary to-purple-600">
                Documentation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-fd-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to secure and customize your Discord server
              with advanced automation and protection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/docs/user">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-fd-primary to-purple-600 text-white rounded-xl font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiBook className="w-5 h-5" />
                <span>Get Started</span>
                <FiArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Grid */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-fd-foreground mb-4">
              Quick Start Guide
            </h2>
            <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto">
              Jump right into protecting your server with our comprehensive
              guides
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {quickStartItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-fd-card/50 backdrop-blur-sm border border-fd-border rounded-2xl p-6 h-full hover:bg-fd-card/80 transition-all duration-300">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-fd-card-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-fd-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center text-fd-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span
                      onClick={() =>
                        window.open("https://antiraid.xyz/about", "_blank")
                      }
                    >
                      Learn more
                    </span>
                    <FiArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20 bg-fd-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-fd-foreground mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto">
              Discover what makes AntiRaid the most trusted Discord security
              solution
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start space-x-4 p-6 bg-fd-card/30 backdrop-blur-sm rounded-2xl border border-fd-border hover:bg-fd-card/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-fd-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-fd-card-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-fd-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="bg-gradient-to-r from-fd-primary/10 to-purple-500/10 backdrop-blur-sm border border-fd-border rounded-3xl p-12"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-fd-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FiLock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-fd-foreground mb-4">
              Ready to Secure Your Server?
            </h2>
            <p className="text-lg text-fd-muted-foreground mb-8 max-w-2xl mx-auto">
              Join over 20,000+ servers that trust AntiRaid for their Discord
              security needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-fd-primary to-purple-600 text-white rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  window.open("https://antiraid.xyz/invite", "_blank")
                }
              >
                <span>Invite AntiRaid</span>
                <FiExternalLink className="w-5 h-5" />
              </motion.button>
              <Link href="/docs/user" className="flex-1">
                <motion.button
                  className="w-full px-8 py-4 bg-fd-card hover:bg-fd-accent text-fd-card-foreground rounded-xl font-semibold text-lg border border-fd-border transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Documentation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-fd-border/50">

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img
                  src="https://antiraid.xyz/logo.webp"
                  alt="AntiRaid Logo"
                  className="w-10 h-10 rounded-lg object-cover"
                />
              </div>
              <span className="text-fd-foreground font-semibold">
                AntiRaid Documentation
              </span>
            </div>

            <div className="flex items-center space-x-6 text-fd-muted-foreground">
              <a
                href="https://antiraid.xyz/legal/privacy"
                className="hover:text-fd-foreground transition-colors"
              >
                Privacy
              </a>
              <a
                href="https://antiraid.xyz/legal/terms"
                className="hover:text-fd-foreground transition-colors"
              >
                Terms
              </a>
              <a
                href="https://github.com/anti-raid"
                className="hover:text-fd-foreground transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-fd-border/30 text-center text-fd-muted-foreground">
            <p>© 2024 Purrquinox. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Layout: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HomeContent />
    </ErrorBoundary>
  );
};

export default Layout;
