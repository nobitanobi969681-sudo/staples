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
import { useRouter } from "next/router";

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
          title: "Portfolio",
          url: "/portfolio",
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
  const router = useRouter();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="w-10 h-10" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="">Jai Maa Kaali Trading Co.</SheetTitle>
          <SheetDescription>
            We craft bold, refined brands through cutting-edge design, digital
            strategy, and flawless execution.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <NavMain setOpen={setOpen} items={data.navMain} />
        </div>
        <SheetFooter>
          <Link href="/new-quote">
            <Button onClick={() => router.reload()} className="mb-0 w-full">
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
