import React from "react";
import Herobanner from "@/components/custom/herobanner/herobanner";
import Servicegrid from "@/components/custom/Servicegrid/Servicegrid";
import Appleslider from "@/components/custom/Appleslider/Appleslider";
import Movingcards from "@/components/custom/Movingcards/Movingcards";
import Newquote from "@/components/custom/Newquote/Newquote";
import { Cover } from "@/components/ui/cover";
import { SparklesText } from "@/components/magicui/sparkles-text";
export default function HomePage() {
  return (
    <>
      <div className="hidden p-4">
        <div className="bg-[url('/images/uiux.jpg')] bg-cover h-64 w-full rounded-3xl "></div>
      </div>
      <Herobanner />
      <Appleslider />
      <div className="mt-7 max-w-[360px]  md:max-w-full mx-auto ">
        <div className="mr-[-20px] sm:mr-0">
          <Servicegrid />
        </div>
      </div>
      <div className="block sm:hidden px-4">
        <div className="bg-[url('/images/uiux.jpg')] bg-cover h-60 w-full rounded-3xl"></div>
      </div>

      <h1 className="mt-16 sm:mt-4 max-w-7xl mx-auto relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <SparklesText
          sparklesCount={0}
          className="text-center font-medium text-black dark:text-white text-[34px] text-2xl md:text-4xl px-2 sm:px-0"
        >
          <span className="leading-relaxed">Let's discuss</span>{" "}
          <Cover>your brand</Cover>
        </SparklesText>
      </h1>
      <Newquote />
      <Movingcards />
    </>
  );
}
