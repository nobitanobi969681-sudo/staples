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
    title: "Designing User Delight",
    description: (
      <>
        <p>
          We create intuitive, visually stunning digital experiences that
          enhance usability and reinforce brand identity. By applying
          research-driven insights tailored for Indian and global markets, our
          designs address real user needs, enabling smoother journeys across
          mobile, web, and hybrid platforms.
        </p>
      </>
    ),
    image: "",
  },
  {
    title: "Beyond Aesthetics",
    description: (
      <>
        <p>
          Our work goes beyond visuals to integrate strategy and usability. We
          focus on culturally aware, impactful designs that connect with your
          audience on an emotional level. This combination elevates your digital
          presence and drives consistent engagement across all touchpoints.
        </p>
      </>
    ),
  },
];
