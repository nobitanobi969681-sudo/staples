"use client";

import React from "react";
import { motion } from "framer-motion";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <>
      <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden bg-background">
        <div className="flex flex-col align-center justify-center relative w-full max-w-4xl text-center mx-auto min-h-[320px] sm:min-h-[400px]">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4 sm:px-0   text-black dark:text-white text-[34px] sm:text-5xl 2xl:text-6xl font-bold relative z-10"
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
      </div>
    </>
  );
}
