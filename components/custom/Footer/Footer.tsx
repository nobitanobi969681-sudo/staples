import * as React from "react";

import { Separator } from "@/components/ui/separator";

import Toptext from "./Toptext";
import Midlinks from "./Midlinks";
import Bottomlinks from "./Bottomlinks";

export default function SiteFooter() {
  return (
    <footer className="bg-[url('/images/herobg.jpg')] bg-top bg-cover bt-1 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/99">
      <div className="bg-[rgba(255,255,255,0.86)] dark:bg-[rgba(0,0,0,0.8)]">
        <div className=" mx-auto px-8 py-20">
          <Toptext />
          <Midlinks />
          <Bottomlinks />
        </div>
      </div>
    </footer>
  );
}
