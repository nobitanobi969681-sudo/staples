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
    link: "https://ankushtripathiandcompany.com/",
    thumbnail: "/portfolio/ankushtripathiandcompany.png",
  },
  {
    title: "AT&M",
    link: "https://ankushtripathi.com/",
    thumbnail: "/portfolio/atm.png",
  },
  {
    title: "Cocotier",
    link: "https://cis-ind.com/",
    thumbnail: "/portfolio/cocotier.png",
  },
  {
    title: "Fate Music",
    link: "https://sites.google.com/view/fate-music/",
    thumbnail: "/portfolio/fate-music.png",
  },
  {
    title: "Vizion Craft",
    link: "https://sites.google.com/view/vizion-craft/",
    thumbnail: "/portfolio/vizion-craft.png",
  },
  {
    title: "Frozen Snap",
    link: "https://frozensnap.com/",
    thumbnail: "/portfolio/frozen-snap.png",
  },

  {
    title: "Neuromotion",
    link: "https://nmspl.co/",
    thumbnail: "/portfolio/neuromotion.png",
  },
  {
    title: "EMS Health Solution",
    link: "https://emshealthsolution.com",
    thumbnail: "/portfolio/ems-health-solution.png",
  },
  {
    title: "Banga Knitwear",
    link: "https://bangakntiwear.com/",
    thumbnail: "/portfolio/bangaknitwear.png",
  },
];
