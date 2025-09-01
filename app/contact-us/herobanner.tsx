"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className=" dark:bg-black mx-auto relative  md:flex-row bg-[url('/images/herobg.jpg')] bg-top bg-cover border-b">
      <div className="bg-[rgba(255,255,255,0)] dark:bg-[rgba(0,0,0,0.8)] min-h-[320px] sm:min-h-[400px]   xl:pb-0 w-full flex justify-center flex-col">
        <div className="relative w-full max-w-4xl text-center mx-auto">
          <h1 className="px-4 sm:px-0  text-white dark:text-white text-[34px] sm:text-5xl 2xl:text-6xl font-bold tracking-tight relative z-10">
            Contact Us
          </h1>
          We build next-gen digital experiences with performance, aesthetics,
          and cutting-edge technology.
        </div>
      </div>
    </div>
  );
}
