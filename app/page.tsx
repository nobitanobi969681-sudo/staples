import React from "react";
import Herobanner from "@/components/custom/herobanner/herobanner";
import Testimonials from "@/components/custom/Testinomials/Testimonials";
import Servicecards from "@/components/custom/cards/acard";
import Cardsgrid from "@/components/custom/Cardsgrid/Cardsgrid";
import Marqueetext from "@/components/custom/Marqueetext/Marqueetext";
import Prefooter from "@/components/custom/Prefooter/Prefooter";
import Servicegrid from "@/components/custom/Servicegrid/Servicegrid";
import Appleslider from "@/components/custom/Appleslider/Appleslider";
import Movingcards from "@/components/custom/Movingcards/Movingcards";
import Typewritereffect from "@/components/custom/Typewritereffect/Typewritereffect";
import Newquote from "@/components/custom/Newquote/Newquote";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="hidden p-4">
        <div className="bg-[url('/images/uiux.jpg')] bg-cover h-64 w-full rounded-3xl"></div>
      </div>
      <Herobanner />
      <Appleslider />
      <div className="mt-7 max-w-[360px] sm:max-w-full mx-auto">
        <Servicegrid />
      </div>
      <div className="block sm:hidden px-4">
        <div className="bg-[url('/images/herobg.jpg')] bg-cover h-76 w-full rounded-3xl"></div>
      </div>
      <Typewritereffect />
      <Newquote />
      <Movingcards />
    </>
  );
}
