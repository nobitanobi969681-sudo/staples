"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

// This is sample data.
const data = {
  navMain: [
    {
      title: "Company",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Home Page",
          url: "/",
        },
        {
          title: "About Us",
          url: "/about",
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
    {
      title: "Services",
      url: "#",
      icon: Bot,
      isActive: true,
      items: [
        {
          title: "Website & App Development",
          url: "/services/website-and-app-development",
        },
        {
          title: "Digital Marketing & SEO",
          url: "/services/digital-marketing-and-seo",
        },
        {
          title: "Photograpy & Video Editing",
          url: "/services/photography-and-video-editing",
        },
        {
          title: "Building MPVs & Prototypes",
          url: "/services/mvps-and-prototypes",
        },
        {
          title: "UI/UX & Graphic Designing",
          url: "/services/ui-ux-and-graphics-designing",
        },
        {
          title: "Branding & PR Management",
          url: "/services/branding-and-pr-management",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Business Model",
          url: "#",
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
        <Button variant="outline" className="rounded-full">
          <Menu className="w-6 h-6" />
          MENU
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="tracking-widest">AT&M</SheetTitle>
          <SheetDescription>
            We craft bold, refined brands through cutting-edge design, digital
            strategy, and flawless execution.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <NavMain setOpen={setOpen} items={data.navMain} />
        </div>
        <SheetFooter>
          <Button
            variant="outline"
            className="mb-0 bg-[url('/images/bg.png')] bg-cover border-0 text-white dark:text-gray-200"
          >
            Mail Us
          </Button>
          <Button
            variant="outline"
            className="mb-4 bg-[url('/images/bg.png')] bg-cover border-0 text-white dark:text-gray-200"
          >
            Call Us
          </Button>
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
