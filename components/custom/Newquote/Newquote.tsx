import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ShineBorder } from "@/components/magicui/shine-border";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function ShineBorderDemo() {
  return (
    <div className="mx-4">
      <Card className="relative overflow-hidden max-w-[480px] w-full mx-auto mb-16 mt-16 py-8">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        <CardHeader>
          <CardTitle>Start Here</CardTitle>
          <CardDescription>
            Tell us your plan and know the cost to build it.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="number" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Service</Label>
                <RadioGroup defaultValue="test1">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="test1" id="r1" />
                    <Label htmlFor="r1">Default</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="test2" id="r2" />
                    <Label htmlFor="r2">Comfortable</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="test3" id="r3" />
                    <Label htmlFor="r3">Compact</Label>
                  </div>

                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="test4" id="r4" />
                    <Label htmlFor="r4">Default</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="test5" id="r5" />
                    <Label htmlFor="r5">Comfortable</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="test6" id="r6" />
                    <Label htmlFor="r6">Compact</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Message</Label>
                <Textarea id="phone" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-relaxed text-white dark:from-white dark:to-slate-900/10 lg:text-md">
              Request Quote
            </span>
          </ShimmerButton>
        </CardFooter>
      </Card>
    </div>
  );
}
