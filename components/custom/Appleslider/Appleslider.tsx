"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-12 sm:pt-16 pb-0 mb:pb-4">
      <h2 className="text-center max-w-7xl pl-4 mx-auto text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        "Ideas Meet Acceleration"
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContentOne = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content-one" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans  mb-8">
              We design and develop{" "}
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                high-performance websites and apps
              </span>{" "}
              tailored to your business goals. Our approach blends clean code,
              intuitive UI/UX, and scalable architecture, ensuring seamless
              functionality across devices. From concept to launch, we deliver
              reliable digital solutions that engage users and drive measurable
              growth.
            </p>
            <Link href="/new-quote">
              <Button variant="outline" className="text-xl cursor-pointer">
                Get A Quote
              </Button>
            </Link>

            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain hidden"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContentTwo = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content-two" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans  mb-8">
              We craft{" "}
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                intuitive interfaces and stunning visuals
              </span>{" "}
              that blend creativity with usability. Our UI/UX process
              prioritizes seamless user journeys, while our graphic design
              elevates brand identity with precision. From wireframes to
              polished assets, we deliver cohesive, high-impact designs that
              engage audiences and strengthen your brand presence.
            </p>
            <Link href="/new-quote">
              <Button variant="outline" className="text-xl cursor-pointer">
                Get A Quote
              </Button>
            </Link>

            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain hidden"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Digitize your business",
    title: "Website & App Development",
    src: "/services/website-development.jpg",
    content: <DummyContentOne />,
  },
  {
    category: "Product",
    title: "Digital Marketing & SEO",
    src: "/services/digital-marketing.jpg",
    content: <DummyContentTwo />,
  },
  {
    category: "Product",
    title: "Photograpy & Video Editing",
    src: "/services/graphic-designing.jpg",
    content: <DummyContentOne />,
  },
  {
    category: "R&D",
    title: "Building MPVs & Prototypes",
    src: "/services/mvp.jpg",
    content: <DummyContentOne />,
  },
  {
    category: "Productivity",
    title: "UI/UX & Graphic Designing",
    src: "/services/uiux.jpg",
    content: <DummyContentOne />,
  },

  {
    category: "Hiring",
    title: "Branding & PR Management",
    src: "/services/pr.jpg",
    content: <DummyContentOne />,
  },
];
