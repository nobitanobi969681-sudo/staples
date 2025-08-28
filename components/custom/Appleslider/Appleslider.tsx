"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-2 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Get a stunning website",
    title: "Website Development",
    src: "/services/website-development.jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "UI/UX & Graphics",
    src: "/services/pr.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Graphic Designing",
    src: "/images/herobg.jpg",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Digital Marketing",
    src: "/images/herobg.jpg",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Building MPVs",
    src: "/images/herobg.jpg",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "PR Management",
    src: "/images/herobg.jpg",
    content: <DummyContent />,
  },
];
