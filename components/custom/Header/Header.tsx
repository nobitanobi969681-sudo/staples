'use client'
import * as React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Menu,
  Sparkles,
  ChevronRight,
  Search,
  Moon,
  Sun,
  ShoppingBag,
  Boxes,
  BookOpen,
  Headphones,
} from "lucide-react";

// Simple theme toggle without providers. Adds/removes the `dark` class on <html>.
function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    const root = document.documentElement;
    const dark = root.classList.contains("dark");
    setIsDark(dark);
  }, []);
  const toggle = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      setIsDark(false);
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      setIsDark(true);
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}

const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
  <NavigationMenuLink asChild>
    <Link href={href} className={cn("rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors", className)}>
      {children}
    </Link>
  </NavigationMenuLink>
);

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between gap-3 px-4">
        {/* Left: Logo + Mobile Menu */}
        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[85vw] sm:w-[380px] p-0">
              <SheetHeader className="p-4 pb-2">
                <SheetTitle className="flex items-center gap-2 text-left">
                  <Sparkles className="h-5 w-5" />
                  <span className="font-semibold">YourBrand</span>
                </SheetTitle>
              </SheetHeader>
              <div className="px-4 pb-6">
                <div className="mb-4">
                  <Input placeholder="Search…" className="h-10" />
                </div>
                <nav className="grid gap-1 text-sm">
                  <MobileItem href="#features" icon={<Boxes className="h-4 w-4" />}>Features</MobileItem>
                  <MobileItem href="#use-cases" icon={<BookOpen className="h-4 w-4" />}>Use Cases</MobileItem>
                  <MobileItem href="#resources" icon={<Headphones className="h-4 w-4" />}>Support</MobileItem>
                  <MobileItem href="#pricing" icon={<ShoppingBag className="h-4 w-4" />}>Pricing</MobileItem>
                </nav>
                <div className="mt-6 flex items-center gap-2">
                  <Button className="flex-1" onClick={() => setOpen(false)}>Get Started</Button>
                  <Button variant="outline" className="flex-1" onClick={() => setOpen(false)}>Sign In</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="group inline-flex items-center gap-2">
            <div className="relative grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-sm">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-base font-bold tracking-tight">YourBrand</span>
              <Badge variant="secondary" className="hidden text-[10px] md:inline-flex">New</Badge>
            </div>
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent className="p-4">
                  <div className="grid w-[500px] grid-cols-2 gap-3">
                    <ProductCard
                      title="Starter"
                      description="Everything you need to kick off."
                      href="#starter"
                    />
                    <ProductCard
                      title="Pro Suite"
                      description="Advanced tools for teams."
                      href="#pro"
                    />
                    <ProductCard
                      title="Automation"
                      description="Save time with workflows."
                      href="#automation"
                    />
                    <ProductCard
                      title="Integrations"
                      description="Connect your favorite apps."
                      href="#integrations"
                    />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink href="#features">Features</NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink href="#use-cases">Use Cases</NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink href="#pricing">Pricing</NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink href="#docs">Docs</NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <div className="relative w-48">
              <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" />
              <Input placeholder="Search…" className="pl-8 h-9" />
            </div>
            <ThemeToggle />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2">
                <Avatar className="h-7 w-7">
                  <AvatarImage src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=120&auto=format&fit=crop" alt="User" />
                  <AvatarFallback>YU</AvatarFallback>
                </Avatar>
                <ChevronRight className="h-4 w-4 md:hidden" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="text-xs text-muted-foreground">Signed in as</DropdownMenuLabel>
              <div className="px-2 pb-2 text-sm font-medium">you@brand.com</div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="#dashboard">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="hidden sm:inline-flex">Get Started</Button>
        </div>
      </div>
    </header>
  );
}

function ProductCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link
      href={href}
      className="group rounded-xl border p-4 transition-all hover:shadow-sm"
    >
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-sm font-semibold leading-none tracking-tight">{title}</h4>
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        </div>
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-muted/70">
          <Sparkles className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-3 inline-flex items-center text-xs font-medium text-primary">
        Learn more
        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

function MobileItem({ href, children, icon }: { href: string; children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-accent hover:text-accent-foreground"
    >
      <span className="flex items-center gap-2 text-sm">
        {icon}
        {children}
      </span>
      <ChevronRight className="h-4 w-4 opacity-60" />
    </Link>
  );
}
