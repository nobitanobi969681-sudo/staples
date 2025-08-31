"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SparklesCore } from "@/components/magicui/sparkles";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail } from "lucide-react";
export default function AboutPage() {
  return (
    <AuroraBackground className="relative min-h-[320px] sm:min-h-[400px] flex flex-col items-center justify-center px-6 ">
      {/* Hero Section */}
      <div className="relative w-full max-w-4xl text-center mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4 sm:px-0 text-4xl md:text-6xl font-medium tracking-tight relative z-10"
        >
          Crafting Digital Excellence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="px-8 sm:px-0 mt-6 text-lg md:text-xl text-muted-foreground relative z-10 max-w-xl mx-auto"
        >
          We build next-gen digital experiences with performance, aesthetics,
          and cutting-edge technology.
        </motion.p>
      </div>
    </AuroraBackground>
  );
}
