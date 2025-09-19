"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="border-t-[1px] border-gray-600 py-8 sm:py-12  flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The team delivered beyond expectations. Their understanding of branding and digital strategy is sharp and result-oriented. We’ve seen measurable growth, and their attention to detail makes them stand apart in a crowded market.",
    name: "Ananya Mehra",
    title: "Strategic Vision Architect",
  },
  {
    quote:
      "Working with them was seamless. They translated complex requirements into elegant solutions. Their web development and marketing strategies truly aligned with our goals, giving our brand a fresh identity and clear digital presence.",
    name: "Raghav Bhandari",
    title: "Innovation Growth Catalyst",
  },
  {
    quote:
      "A brilliant mix of design, technology, and insight. They made our campaigns more impactful than we imagined. Every step was transparent, professional, and driven by results. Highly reliable and innovative in every aspect.",
    name: "Kavya Iyer",
    title: "Creative Impact Strategist",
  },
  {
    quote:
      "Their ability to merge creativity with strategy is outstanding. From web design to digital campaigns, everything felt cohesive and purposeful. The team understood our vision clearly and executed it with precision, boosting our market presence.",
    name: "Arjun Malhotra",
    title: "Brand Transformation Lead",
  },
  {
    quote:
      "MXI delivered exactly what our brand needed. Every solution was tailored, modern, and impactful. Their approach to branding and PR gave us confidence, clarity, and visible results within weeks. Truly a dependable partner for ambitious projects.",
    name: "Simran Khurana",
    title: "Digital Experience Curator",
  },
];
