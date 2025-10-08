import React from "react";
import Features from "@/app/contact-us/features";
import Herobanner from "./herobanner";
import ContactForm from "@/components/custom/Forms/ContactForm";
import Map from "./map";
import Image from "next/image";

const page = () => {
  return (
    <div className="dark:bg-black">
      <div className="block md:hidden">
        <Image src="/map.png" width="1653" height="978" alt="Map" />
      </div>
      <Herobanner />
      <div className="mt-16 max-w-5xl mx-auto">
        <Features />
      </div>
      <div className="p-1 px-4">
        <ContactForm />
      </div>
      <div className="hidden md:block max-w-4xl mx-auto">
        <Image src="/map.png" width="1653" height="978" alt="Map" />
      </div>
    </div>
  );
};

export default page;
