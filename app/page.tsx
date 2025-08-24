import React from "react";
import Herobanner from "@/components/custom/herobanner/herobanner";
import Testimonials from "@/components/custom/Testinomials/Testimonials";
import Servicecards from "@/components/custom/cards/acard";
import Cardsgrid from "@/components/custom/Cardsgrid/Cardsgrid";

export default function HomePage() {
  return (
    <>
      <Herobanner />
      <main className="">
        <Cardsgrid />
        <Servicecards />
        <Testimonials />
      </main>
    </>
  );
}
