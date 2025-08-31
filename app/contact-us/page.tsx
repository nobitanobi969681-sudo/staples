import React from "react";
import Map from "@/app/contact-us/map";
import Herobanner from "./herobanner";

const page = () => {
  return (
    <div className="dark:bg-black">
      <Herobanner />
      <div className="max-w-4xl mx-auto">
        <Map />
      </div>
    </div>
  );
};

export default page;
