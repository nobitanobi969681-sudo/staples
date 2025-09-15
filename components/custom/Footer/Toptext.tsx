import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";

const Toptext = () => {
  return (
    <div className="mb-12 sm:mb-28 text-5xl max-w-[880px]">
      <p className="font-bold tracking-tighter text-3xl lg:text-4xl text-black dark:text-white text-center sm:text-left">
        <AuroraText>© ATM — Infinite Vision</AuroraText>
      </p>
    </div>
  );
};

export default Toptext;
