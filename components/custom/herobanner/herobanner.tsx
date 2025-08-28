import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Prefooter from "@/components/custom/Prefooter/Prefooter";

export default function UniqueHeroWithSidebar() {
  return (
    <div className="dark:bg-black mx-auto relative flex flex-col md:flex-row bg-[url('/images/herobg.jpg')] bg-top bg-cover border-b">
      <div className="bg-[rgba(255,255,255,0.92)] dark:bg-[rgba(0,0,0,0.8)]  pb-12">
        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-1 sm:px-6 py-8 pb-2 sm:py-16">
          <div className=" grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
            {/* Text Content */}

            <div className="flex justify-center xl:justify-end">
              <div className="max-w-[800px] space-y-6 text-center xl:text-left">
                <Prefooter />
                <p className="mx-auto xl:mx-0 max-w-[560px] text-xl text-muted-foreground mb-8 px-2">
                  We craft scalable, responsive, and user-friendly platforms to
                  grow your digital presence.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 justify-center xl:justify-start">
                  <ShimmerButton className="text-white dark:text-white">
                    Get A Quote
                  </ShimmerButton>
                </div>
              </div>
            </div>

            {/* Visual / Image Block */}
            <Card className="shadow-lg overflow-hidden rounded-4xl 2xl:ml-20 mx-4 sm:mx-0">
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
    </div>
  );
}
