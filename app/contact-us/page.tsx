import React from "react";
import Features from "@/app/contact-us/features";
import Herobanner from "./herobanner";
import ContactForm from "@/components/custom/Forms/ContactForm";
import Map from "./map";
const page = () => {
  return (
    <div className="dark:bg-black">
      <Map />
      <Herobanner />

      <div className="mt-16 max-w-5xl mx-auto">
        <Features />
      </div>
      <div className="p-1 px-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
