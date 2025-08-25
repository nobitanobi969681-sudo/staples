import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function UniqueHeroWithSidebar() {
  return (
    <div className="relative flex flex-col md:flex-row">
      {/* Mobile Sidebar Trigger */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80vw] sm:w-72 p-0">
            <div className="p-6 flex items-center gap-2 border-b">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                UniqueBrand
              </span>
            </div>
            <nav className="flex-1 p-6 space-y-3 text-sm">
              <Link
                href="#solutions"
                className="block rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground"
              >
                Solutions
              </Link>
              <Link
                href="#services"
                className="block rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground"
              >
                Services
              </Link>
              <Link
                href="#case-studies"
                className="block rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground"
              >
                Case Studies
              </Link>
              <Link
                href="#contact"
                className="block rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground"
              >
                Contact
              </Link>
            </nav>
            <div className="p-6 border-t">
              <Button className="w-full">Get Started</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 mt-8 pb-12 bg-gradient-to-br from-background to-muted/40">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="max-w-[600px] space-y-6 text-center md:text-left ml-20">
            <h1 className="text-5xl sm:text-5xl font-medium tracking-tight leading-tight">
              From Vision to Reality,{" "}
              <span className="text-primary">Seamlessly...</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We craft scalable, responsive, and user-friendly platforms to grow
              your digital presence.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Seamless
                integration
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Scalable
                architecture
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> 24/7 support
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <ShimmerButton>Shimmer Button</ShimmerButton>
            </div>
          </div>

          {/* Visual / Image Block */}
          <Card className="shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="Hero visual"
                className="object-cover h-full w-full"
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
