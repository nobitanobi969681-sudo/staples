import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Midlinks = () => {
  return (
    <div className="flex justify-between mb-20">
      {/* Brand + Newsletter */}
      <div className="space-y-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
            ✨
          </div>
          YourBrand
        </Link>
        <p className="text-lg text-muted-foreground">
          Building amazing experiences with Shadcn + Tailwind.
        </p>
        <form className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="email"
            placeholder="Subscribe via email"
            className="h-9"
          />
          <Button type="submit" className="h-9">
            Join
          </Button>
        </form>
      </div>

      {/* Navigation */}
      <div>
        <ul className="space-y-4 text-lg text-muted-foreground">
          <li>
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#pricing">Pricing</Link>
          </li>
          <li>
            <Link href="#docs">Documentation</Link>
          </li>
          <li>
            <Link href="#integrations">Integrations</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="space-y-4 text-lg text-muted-foreground">
          <li>
            <Link href="#about">About Us</Link>
          </li>
          <li>
            <Link href="#careers">Careers</Link>
          </li>
          <li>
            <Link href="#blog">Blog</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="max-w-min inline">
        <ul className="space-y-4 text-lg text-muted-foreground">
          <li>
            <Link href="#help" className="whitespace-nowrap">
              Help Center
            </Link>
          </li>
          <li>
            <Link href="#terms" className="whitespace-nowrap">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="#privacy" className="whitespace-nowrap">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="#status" className="whitespace-nowrap">
              System Status
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Midlinks;
