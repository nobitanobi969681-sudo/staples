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
      "Working with the company has been a great experience. Their focus on purity, packaging, and consistency reflects real professionalism. Even as a new supplier, they deliver across India with impressive efficiency and trustworthiness.",
    name: "Ananya Mehra",
    title: "Procurement Manager",
  },
  {
    quote:
      "The company might be new, but their commitment to quality is exceptional. Every consignment of pulses was clean, fresh, and delivered on time. Their dedication to building long-term business relationships is clearly visible.",
    name: "Raghav Bhandari",
    title: "Operations Head",
  },
  {
    quote:
      "We were impressed by their attention to quality and detail. The pulses were well-sorted, neatly packed, and delivered promptly. For a new company, their professionalism and service quality already match experienced suppliers.",
    name: "Kavya Iyer",
    title: "Home maker",
  },
  {
    quote:
      "From packaging to delivery, everything was handled with care. The company ensures premium-quality pulses and transparent communication. Their growing distribution network across India shows strong potential for future partnerships.",
    name: "Arjun Malhotra",
    title: "Distribution Partner",
  },
  {
    quote:
      "Even as a new entrant, the company stands out for its quality-first approach. Their service is reliable, delivery is smooth, and the pulses are consistently fresh. A promising name for businesses seeking dependable supply.",
    name: "Simran Khurana",
    title: "Wholesale Partner",
  },
];
