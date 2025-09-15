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
    title: "Maximizing Online Reach",
    description: (
      <>
        <p>
          We craft data-driven marketing campaigns that resonate with India’s
          diverse audience while appealing to global markets. Our SEO strategies
          ensure sustainable rankings across search engines, boosting your
          visibility in both local and international searches. Every campaign is
          built to create measurable, lasting impact on your brand presence.
        </p>
      </>
    ),
    image: "",
  },
  {
    title: "Engage. Convert. Dominate.",
    description: (
      <>
        <p>
          From social media to search advertising, we help brands connect with
          the right audience segments. Our team prioritizes engagement,
          retention, and ROI by blending analytics with creativity. We
          understand the nuances of Indian consumer behavior and craft campaigns
          that scale effectively across platforms.
        </p>
      </>
    ),
  },
];
