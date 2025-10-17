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
    <div className="w-full h-full pt-12 sm:pt-16 pb-12 mb:pb-4">
      <h2 className="text-center max-w-7xl pl-4 mx-auto text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Our Range of Grains
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
          <div key={"dummy-content-one" + index} className="">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans  mb-8">
              We supply premium Massoor Dal across India, catering to retailers,
              wholesalers, and distributors. With consistent quality,
              competitive pricing, and reliable delivery, our pulses help
              businesses boost sales, satisfy customers, and strengthen their
              product range. Partner with us for a trusted and profitable
              Massoor Dal supply.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-xl md:text-3xl font-sans mb-8">
              Availble in 5Kg and 10Kg packs.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-xl md:text-3xl font-sans mb-8">
              Place bulk order.
            </p>

            <div className="flex gap-6">
              <Button
                onClick={() => window.location.replace("/new-quote")}
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Order Now
              </Button>
            </div>
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
          <div key={"dummy-content-two" + index} className="">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans  mb-8">
              We supply premium rice across India, delivering orders from 5 Kg
              to bulk quantities for retailers, wholesalers, and distributors.
              With consistent quality, competitive pricing, and timely delivery,
              our rice helps businesses boost sales, satisfy customers, and
              expand their product range. Trust us for a reliable and profitable
              rice supply.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-xl md:text-3xl font-sans mb-8">
              Availble in 5Kg and 10Kg packs.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-xl md:text-3xl font-sans mb-8">
              Place bulk order.
            </p>

            <div className="flex gap-6">
              <Button
                onClick={() => window.location.replace("/new-quote")}
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Order Now
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

const DummyContentThree = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div key={"dummy-content-three" + index} className="">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans  mb-8">
              We supply high-quality Arhar Dal across India, delivering orders
              from 5 Kg to bulk quantities for retailers, wholesalers, and
              distributors. With consistent quality, competitive pricing, and
              timely delivery, our Arhar Dal helps businesses boost sales,
              satisfy customers, and expand their product range. Rely on us for
              a trusted supply.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-xl md:text-3xl font-sans mb-8">
              Availble in 5Kg and 10Kg packs.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-xl md:text-3xl font-sans mb-8">
              Place bulk order.
            </p>

            <div className="flex gap-6">
              <Button
                onClick={() => window.location.replace("/new-quote")}
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Order Now
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

const DummyContentFour = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div key={"dummy-content-four" + index} className="">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans  mb-8">
              Our high-quality Moong Dal is delivered across India, from 5 Kg to
              bulk orders, serving retailers, wholesalers, and distributors.
              With guaranteed freshness, competitive pricing, and timely
              delivery, our Moong Dal helps businesses increase sales, delight
              customers, and enhance their product lineup. Depend on us for
              consistent supply.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-xl md:text-3xl font-sans mb-8">
              Availble in 5Kg and 10Kg packs.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-xl md:text-3xl font-sans mb-8">
              Place bulk order.
            </p>

            <div className="flex gap-6">
              <Button
                onClick={() => window.location.replace("/new-quote")}
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Order Now
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

const DummyContentFive = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div key={"dummy-content-five" + index} className="">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans  mb-8">
              We supply premium Chana Dal across India, fulfilling orders from
              5 Kg to bulk quantities for retailers, wholesalers, and
              distributors. With consistent quality, competitive pricing, and
              timely delivery, our Chana Dal helps businesses boost sales,
              satisfy customers, and expand their product offerings reliably.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-xl md:text-3xl font-sans mb-8">
              Availble in 5Kg and 10Kg packs.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-xl md:text-3xl font-sans mb-8">
              Place bulk order.
            </p>

            <div className="flex gap-6">
              <Button
                onClick={() => window.location.replace("/new-quote")}
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Order Now
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

const DummyContentSix = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div key={"dummy-content-six" + index} className="">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans  mb-8">
              We provide high-quality Rajma across India, delivering orders from
              5 Kg to bulk quantities for retailers, wholesalers, and
              distributors. With consistent quality, competitive pricing, and
              timely delivery, our Rajma helps businesses increase sales,
              delight customers, and expand their product range with a trusted
              supply.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-xl md:text-3xl font-sans mb-8">
              Availble in 5Kg and 10Kg packs.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-xl md:text-3xl font-sans mb-8">
              Place bulk order.
            </p>

            <div className="flex gap-6">
              <Button
                onClick={() => window.location.replace("/new-quote")}
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Order Now
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Red Lentils",
    title: "Masoor Dal",
    src: "/products/2.png",
    content: <DummyContentOne />,
  },
  {
    category: "Best quality",
    title: "Rice",
    src: "/products/1.png",
    content: <DummyContentTwo />,
  },

  {
    category: "Pigeon Pea",
    title: "Arahar Dal",
    src: "/products/3.png",
    content: <DummyContentThree />,
  },
  {
    category: "Split Green Gram",
    title: "Moong Dal",
    src: "/products/4.png",
    content: <DummyContentFour />,
  },
  {
    category: "Split Bengal Gram",
    title: "Chana Dal",
    src: "/products/5.png",
    content: <DummyContentFive />,
  },
  {
    category: "Kidney Beans",
    title: "Rajma",
    src: "/products/6.png",
    content: <DummyContentSix />,
  },
];
