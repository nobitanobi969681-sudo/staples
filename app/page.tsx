import React from "react";
import Herobanner from "@/components/custom/herobanner/herobanner";
import Servicegrid from "@/components/custom/Servicegrid/Servicegrid";
import Appleslider from "@/components/custom/Appleslider/Appleslider";
import Movingcards from "@/components/custom/Movingcards/Movingcards";
import NewQuote from "@/components/custom/Forms/NewQuote";
import { Cover } from "@/components/ui/cover";
import { SparklesText } from "@/components/magicui/sparkles-text";

export default function HomePage() {
  return (
    <>
      <div className="hidden p-4">
        <div className="bg-[url('/images/uiux.jpg')] bg-cover h-[64] w-full rounded-3xl "></div>
      </div>
      <Herobanner />
      <div className="mt-7 max-w-[360px]  md:max-w-full mx-auto ">
        <div className="mr-[-20px] sm:mr-0">
          <Servicegrid />
        </div>
      </div>
      <Appleslider />

      <div className="block sm:hidden px-4">
        <div className="bg-[url('/images/uiux.jpg')] bg-cover h-60 w-full "></div>
      </div>

      <div className="mt-12">
        <NewQuote />
      </div>
      <Movingcards />
    </>
  );
}
