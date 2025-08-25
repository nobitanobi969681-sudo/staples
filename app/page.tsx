import React from "react";
import Herobanner from "@/components/custom/herobanner/herobanner";
import Testimonials from "@/components/custom/Testinomials/Testimonials";
import Servicecards from "@/components/custom/cards/acard";
import Cardsgrid from "@/components/custom/Cardsgrid/Cardsgrid";
import Marqueetext from "@/components/custom/Marqueetext/Marqueetext";
import Prefooter from "@/components/custom/Prefooter/Prefooter";
import Servicegrid from "@/components/custom/Servicegrid/Servicegrid";

export default function HomePage() {
  return (
    <>
      <Herobanner />
      <Servicegrid />
    </>
  );
}
