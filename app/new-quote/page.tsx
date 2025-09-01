import React from "react";
import Herobanner from "./herobanner";
import Features from "./features";
import Form from "./form";

const page = () => {
  return (
    <div className="min-h-screen">
      <Herobanner />
      <Features />
      <Form />
    </div>
  );
};

export default page;
