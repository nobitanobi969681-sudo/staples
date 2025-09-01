import React from "react";
import Features from "@/app/contact-us/features";
import Herobanner from "./herobanner";

const page = () => {
  return (
    <div className="dark:bg-black">
      <Herobanner />
      <div className="mt-16 max-w-5xl mx-auto">
        <Features />
      </div>
    </div>
  );
};

export default page;
