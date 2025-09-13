import React from "react";
import Herobanner from "./herobanner";
import Features from "./features";
import NewQuote from "@/components/custom/Forms/NewQuote";

const page = () => {
  return (
    <div className="min-h-screen">
      <Herobanner />
      <Features />
      <NewQuote />
    </div>
  );
};

export default page;
