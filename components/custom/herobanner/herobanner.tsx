"use client";

import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { useId } from "react";
export default function UniqueHeroWithSidebar() {
  return (
    <div className="bg-[url('/banner/home-hero-mob.png')] bg-top bg-cover xl:bg-[url('/banner/home-hero-dsktp.png')] xl:bg-center xl:bg-cover min-h-full relative overflow-hidden border-b-[1px] border-gray-600">
      <Grid size={0} />
      <div className="min-h-[84vh] max-h-[700px] mx-auto relative flex align-end justify-end flex-col md:flex-row bg-center bg-cover bg-[rgba(0,0,0,0)] pt-0">
        <div className="block sm:hidden sm:px-4 mb-4 sm:mb-0">
          <div className="bg-[url('/banner/home-hero.jpg')] bg-cover bg-center h-60 w-full rounded-0 hidden"></div>
        </div>
        <div className="pb-16 sm:pb-8 xl:pb-0 w-full flex">
          {/* Hero Section */}
          <main className="flex-1 flex items-center justify-center px-1 sm:px-6 py-0 pb-2 sm:py-8 2xl:py-20">
            <div className=" grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
              {/* Text Content */}

              <div className="flex order-2 sm:order-1 justify-center xl:justify-between pl-0 xl:pl-20">
                <div className="max-w-[800px] space-y-6 text-left">
                  <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="max-w-[500px] md:mx-0 relative z-20">
                      <span className="text-left font-bold leading-tight text-black text-[36px] sm:text-6xl 2xl:text-7xl px-2 sm:px-0">
                        Pure <span className="text-black">pulses</span>, pure
                        taste.
                      </span>
                    </div>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className=" justify-left xl:mx-0 max-w-[360px] sm:max-w-[560px] text-sm sm:text-xl  mb-8 px-2 text-black"
                  >
                    High-quality pulses for businesses across India. Available
                    in{" "}
                    <span className="font-black">
                      5Kg, 10Kg packages & bulk order
                    </span>
                    .
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <div className="flex flex-col sm:flex-row gap-3 justify-center xl:justify-start px-2">
                      <Link href="/new-quote">
                        <RainbowButton className="dark:bg-black dark:text-black capitalize tracking-wider">
                          PLACE ORDER
                        </RainbowButton>
                      </Link>
                    </div>
                  </motion.p>
                </div>
              </div>

              {/* Visual / Image Block */}
              <div className="mb-[-20px] sm:mb-0 order-1 sm:order-2 overflow-hidden  2xl:ml-20 max-w-[680px] mx-4 sm:mx-auto ">
                {/* 
                <Image
                  src="/hero-banner.jpg"
                  height="1080"
                  width="1080"
                  alt="Hero Image"
                  className="hidden sm:flex"
                />
                */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-800/30 to-zinc-800/30 dark:to-zinc-900/0 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
