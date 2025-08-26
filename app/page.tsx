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

export default function HomePage() {
  return (
    <>
      <Herobanner />
      <Appleslider />
      <div className="mt-7 max-w-[420px] sm:max-w-full mx-auto">
        <Servicegrid />
      </div>
      <Typewritereffect />
      <Movingcards />
    </>
  );
}
