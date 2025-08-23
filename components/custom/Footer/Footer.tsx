import * as React from "react";

import { Separator } from "@/components/ui/separator";

import Toptext from "./Toptext";
import Midlinks from "./Midlinks";
import Bottomlinks from "./Bottomlinks";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-32">
        <Toptext />
        <Midlinks />
        <Bottomlinks />
      </div>
    </footer>
  );
}
