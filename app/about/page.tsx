"use client";

import React from "react";
import Herobanner from "./herobanner";
import HerobannerTwo from "./HerobannerTwo";
import Content from "./content";
import Banner from "./banner";

export default function AboutPage() {
  return (
    <>
      <Herobanner />

      <Content />
      <div className="max-w-4xl mx-auto mb-0 sm:mb-16">
        <Banner />
      </div>
    </>
  );
}
