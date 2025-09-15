"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function TracingBeamDemo() {
  return (
    <div className="my-16 mx-auto max-w-2xl px-0 md:px-8 bg:red">
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
                    className="mb-10 object-cover"
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
    title: "Accelerating Innovation",
    description: (
      <>
        <p>
          We rapidly design and develop MVPs and prototypes to validate ideas
          before full-scale development. This helps businesses in India save
          time, minimize risks, and test concepts in real markets. Our approach
          speeds up your path to innovation while keeping costs practical.
        </p>
      </>
    ),
    image: "",
  },
  {
    title: "From Concept to Reality",
    description: (
      <>
        <p>
          By blending strategy, design, and technology, we build functional
          prototypes that demonstrate your product’s core value. This allows
          stakeholders, investors, and users to experience your idea early. Our
          process supports Indian entrepreneurs and established companies alike
          to stay agile and future-focused.
        </p>
      </>
    ),
  },
];
