import Prefooter from "@/components/custom/Prefooter/Prefooter";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function UniqueHeroWithSidebar() {
  return (
    <div className=" dark:bg-black mx-auto relative flex justify-center flex-col md:flex-row bg-[url('/images/herobg.jpg')] bg-top bg-cover border-b">
      <div className="bg-[rgba(255,255,255,0.92)] dark:bg-[rgba(0,0,0,1)] w-full flex pt-0 sm:py-16">
        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-0 sm:px-6 border-none">
          <div className=" grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            {/* Text Content */}

            <div className="flex justify-center xl:justify-end pl-0 xl:pl-20 order-2 sm:order-1">
              <div className="max-w-[800px] space-y-6 text-center xl:text-left">
                <Prefooter />
                <p className="mx-auto xl:mx-0 max-w-[560px] text-xl text-muted-foreground mb-16 sm:mb-0 px-2">
                  We craft scalable, responsive, and user-friendly platforms to
                  grow your digital presence.
                </p>
              </div>
            </div>

            {/* Visual / Image Block */}
            <Card className="shadow-lg overflow-hidden  2xl:ml-20 max-w-[580px] rounded-none sm:mx-auto order-1 sm:order-2">
              <CardContent className="p-0 rounded-none">
                <img
                  src="/services/photography-and-video-editing.jpg"
                  alt="Hero visual"
                  className="object-cover h-full w-full rounded-none"
                />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
