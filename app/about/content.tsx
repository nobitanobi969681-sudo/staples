"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function TracingBeamDemo() {
  return (
    <div className="my-16 mx-auto max-w-2xl px-0 md:px-8">
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative pl-5 sm:pl-0">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <p className="mb-4 font-bold">{item.title}</p>

              <div className="text-base  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "Building Experiences That Last",
    description: (
      <>
        <p>
          We are a creative and technology-driven agency dedicated to building
          meaningful digital experiences. From websites and apps to branding and
          campaigns, we combine design, strategy, and innovation to help
          businesses grow and stand out. Every project we take on is built to
          deliver measurable impact and lasting value.
        </p>
      </>
    ),
    image: "/og-tag-image.png",
  },
  {
    title: "Transforming Ideas Into Impact",
    description: (
      <>
        <p>
          Our team thrives on collaboration and clarity. We believe in
          transparency, premium quality, and solutions tailored to each client’s
          unique vision. With a focus on usability, aesthetics, and performance,
          we transform ideas into results—creating digital products and
          campaigns that not only look exceptional but perform at the highest
          level.
        </p>
      </>
    ),
  },
];
