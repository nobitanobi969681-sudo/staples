import React from "react";
import Herobanner from "@/components/custom/herobanner/herobanner";
import Testimonials from "@/components/custom/Testinomials/Testimonials";
import Servicecards from "@/components/custom/cards/acard";

export default function HomePage() {
  return (
    <>
      <Herobanner />
      <main className="flex flex-col items-center justify-start bg-gray-50 p-6">
        <Servicecards />
        <Testimonials />
      </main>
    </>
  );
}
