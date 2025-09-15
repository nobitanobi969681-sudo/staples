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
    title: "Building Powerful Identities",
    description: (
      <>
        <p>
          We create branding and PR strategies that resonate with Indian markets
          while maintaining global appeal. From logos to messaging, we shape
          your identity to stand out, foster loyalty, and adapt across
          industries. Our campaigns amplify visibility through trusted and
          relevant media.
        </p>
      </>
    ),
    image: "",
  },
  {
    title: "Shaping Perception",
    description: (
      <>
        <p>
          Our team manages your reputation, strengthens your narrative, and
          promotes your brand across digital and traditional platforms. We
          specialize in helping Indian businesses and creators develop a
          premium, trustworthy image that inspires confidence and long-term
          relationships with their audiences.
        </p>
      </>
    ),
  },
];
