"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Shabdankur Prakashan",
    link: "https://shabdankurprakashan.com",
    thumbnail: "/portfolio/shabdankurprakashan.png",
  },
  {
    title: "Keonos",
    link: "https://keonos.com/",
    thumbnail: "/portfolio/keonos.png",
  },
  {
    title: "AT&Co.",
    link: "https://ankushtripathiandcompany.com",
    thumbnail: "/portfolio/ankushtripathiandcompany.png",
  },
  {
    title: "AT&M",
    link: "https://ankushtripathi.com",
    thumbnail: "/portfolio/atm.png",
  },
];
