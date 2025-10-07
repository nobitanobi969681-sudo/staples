"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavMain from "@/components/custom/Mobilemenuitems/Mobilemenuitems";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Navigation",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Home Page",
          url: "/",
        },
        {
          title: "About",
          url: "/about-us",
        },
        {
          title: "Contact",
          url: "/contact-us",
        },
        {
          title: "New Quote",
          url: "/new-quote",
        },
      ],
    },
  ],
};

export default function SheetDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="w-10 h-10" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="">Jai Maa Kaali Trading Co.</SheetTitle>
          <SheetDescription>
            Supplying high-quality pulses across India, ensuring purity,
            consistency, and reliable delivery for businesses.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <NavMain setOpen={setOpen} items={data.navMain} />
        </div>
        <SheetFooter>
          <Link href="/new-quote">
            <Button onClick={() => setOpen(false)} className="mb-0 w-full">
              Order Now
            </Button>
          </Link>
          <Link href="tel:+917984375115">
            <Button variant="outline" className="mb-4 w-full">
              Call Us
            </Button>
          </Link>
          <SheetClose asChild>
            <Button variant="outline" className="dark:text-gray-400">
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
