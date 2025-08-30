"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-12 sm:pt-16 pb-0 mb:pb-4">
      <h2 className="text-center xl:text-left max-w-7xl pl-4 mx-auto text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Ideas Meet Acceleration
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Get a stunning website",
    title: "Website & App Development",
    src: "/services/website-development.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Digital Marketing & SEO",
    src: "/services/digital-marketing.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Photograpy & Video Editing",
    src: "/services/graphic-designing.jpg",
    content: <DummyContent />,
  },
  {
    category: "R&D",
    title: "Building MPVs & Prototypes",
    src: "/services/mvp.jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "UI/UX & Graphic Designing",
    src: "/services/uiux.jpg",
    content: <DummyContent />,
  },

  {
    category: "Hiring",
    title: "Branding & PR Management",
    src: "/services/pr.jpg",
    content: <DummyContent />,
  },
];
