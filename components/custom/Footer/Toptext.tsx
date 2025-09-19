import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";

const Toptext = () => {
  return (
    <div className="mb-12 sm:mb-12 md:mb-28 text-5xl max-w-[880px]">
      <p className="font-bold tracking-tighter text-3xl lg:text-4xl text-black dark:text-white text-center md:text-left">
        © MXI — Let's go <span className="text-red-600">Red</span>.
      </p>
    </div>
  );
};

export default Toptext;
