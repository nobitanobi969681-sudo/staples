import React from "react";
import Herobanner from "./herobanner";
import Content from "./content";
import CtaButton from "./cta-banner";

const page = () => {
  return (
    <div>
      <Herobanner />
      <Content />
      <CtaButton />
    </div>
  );
};

export default page;
