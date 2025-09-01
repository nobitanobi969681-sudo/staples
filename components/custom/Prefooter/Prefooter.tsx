import React from "react";
import { Cover } from "@/components/ui/cover";
import { SparklesText } from "@/components/magicui/sparkles-text";

export default function CoverDemo({ align }: any) {
  return (
    <div>
      <h1 className="max-w-7xl mx-auto relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <SparklesText
          sparklesCount={0}
          className="text-center xl:text-left font-medium text-black dark:text-white text-[34px] sm:text-5xl 2xl:text-6xl px-2 sm:px-0"
        >
          <span className="leading-relaxed">{align} Building Websites at</span>{" "}
          <Cover>warp speed </Cover>
        </SparklesText>
      </h1>
    </div>
  );
}
