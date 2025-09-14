import React from "react";
import { Cover } from "@/components/ui/cover";
import { SparklesText } from "@/components/magicui/sparkles-text";

export default function CoverDemo({ align }: any) {
  return (
    <div>
      <h1 className="max-w-2xl mx-auto relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <span className="text-center xl:text-left font-bold leading-tight text-white text-[34px] sm:text-6xl 2xl:text-7xl px-2 sm:px-0">
          Digital Experiences That Inspire
        </span>
      </h1>
    </div>
  );
}
