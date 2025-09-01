"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function AboutPage() {
  return (
    <div className=" dark:bg-black mx-auto relative  md:flex-row bg-[url('/images/herobg.jpg')] bg-bottom bg-cover border-y">
      <div className="bg-[rgba(255,255,255,0.96)] dark:bg-[rgba(0,0,0,0.92)] min-h-[280px] sm:min-h-[280px]  w-full flex justify-center flex-col py-8">
        <div className="relative w-full max-w-4xl text-center mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4 sm:px-0  text-black dark:text-white text-[28px]  2xl:text-3xl font-medium tracking-tight relative z-10"
          >
            Crafting Digital Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-black dark:text-white px-8 sm:px-0 mt-6 text-base md:text-xl  relative z-10 max-w-xl mx-auto"
          >
            We build next-gen digital experiences with performance, aesthetics,
            and cutting-edge technology.
            <ShimmerButton className="mt-8 shadow-2xl mx-auto">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Shimmer Button
              </span>
            </ShimmerButton>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
