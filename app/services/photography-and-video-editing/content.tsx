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
    title: "Capturing Timeless Moments",
    description: (
      <>
        <p>
          We produce photography and video content that speaks to the heart of
          Indian and global audiences. Every frame is designed to tell a story,
          highlight your brand’s authenticity, and create a premium feel that
          resonates in campaigns, social media, and advertising.
        </p>
      </>
    ),
    image: "",
  },
  {
    title: "Crafted to Perfection",
    description: (
      <>
        <p>
          Our post-production and editing expertise transforms raw content into
          stunning visuals. We pay attention to color, tone, and messaging to
          ensure each project feels polished and on-brand. From corporate shoots
          to creative campaigns, we deliver visuals that make a powerful impact.
        </p>
      </>
    ),
  },
];
