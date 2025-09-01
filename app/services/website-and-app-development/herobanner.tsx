import Prefooter from "@/components/custom/Prefooter/Prefooter";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function UniqueHeroWithSidebar() {
  return (
    <div className=" dark:bg-black mx-auto relative flex justify-center flex-col md:flex-row bg-[url('/images/herobg.jpg')] bg-top bg-cover border-b">
      <div className="bg-[rgba(255,255,255,0.92)] dark:bg-[rgba(0,0,0,0.8)] w-full min-h-[74vh] flex">
        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-1 sm:px-6 py-8 pb-2 sm:py-16">
          <div className=" grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
            {/* Text Content */}

            <div className="flex justify-center xl:justify-end pl-0 xl:pl-20">
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
            <Card className="shadow-lg overflow-hidden rounded-4xl 2xl:ml-20 max-w-[680px] mx-4 sm:mx-auto ">
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
