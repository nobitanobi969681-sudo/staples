import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand + Newsletter */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
                ✨
              </div>
              YourBrand
            </Link>
            <p className="text-sm text-muted-foreground">
              Building amazing experiences with Shadcn + Tailwind.
            </p>
            <form className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Subscribe via email" className="h-9" />
              <Button type="submit" className="h-9">Join</Button>
            </form>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/80">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
              <li><Link href="#docs">Documentation</Link></li>
              <li><Link href="#integrations">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/80">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#careers">Careers</Link></li>
              <li><Link href="#blog">Blog</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/80">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#help">Help Center</Link></li>
              <li><Link href="#terms">Terms of Service</Link></li>
              <li><Link href="#privacy">Privacy Policy</Link></li>
              <li><Link href="#status">System Status</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
          <div className="flex gap-4">
            <SocialLink href="#" icon={<Facebook className="h-4 w-4" />} label="Facebook" />
            <SocialLink href="#" icon={<Twitter className="h-4 w-4" />} label="Twitter" />
            <SocialLink href="#" icon={<Instagram className="h-4 w-4" />} label="Instagram" />
            <SocialLink href="#" icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
            <SocialLink href="mailto:hello@yourbrand.com" icon={<Mail className="h-4 w-4" />} label="Email" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label, className }: { href: string; icon: React.ReactNode; label: string; className?: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn("rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-colors", className)}
    >
      {icon}
    </Link>
  );
}

