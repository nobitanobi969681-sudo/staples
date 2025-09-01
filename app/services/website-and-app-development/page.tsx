import React from "react";
import Herobanner from "./herobanner";
import Content from "./content";
import CtaButton from "./cta-banner";

const page = () => {
  return (
    <div>
      <Herobanner />
      <Content />
      <div className="max-w-4xl mx-auto mb-0 sm:mb-16">
        <CtaButton />
      </div>
    </div>
  );
};

export default page;
