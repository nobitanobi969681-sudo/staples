import React from "react";
import Herobanner from "./herobanner";
import Content from "./content";
import CtaBanner from "@/components/custom/CtaBanner/CtaBanner";

const page = () => {
  return (
    <div>
      <Herobanner />
      <Content />
      <div className="max-w-4xl mx-auto mb-0 sm:mb-16">
        <CtaBanner />
      </div>
    </div>
  );
};

export default page;
