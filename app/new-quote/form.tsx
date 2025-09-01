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
import { Label } from "@/components/ui/label";
import { ShineBorder } from "@/components/magicui/shine-border";

export default function ShineBorderDemo() {
  return (
    <div className="mx-4">
      <Card className="relative overflow-hidden max-w-[480px] w-full mx-auto mb-16 py-8">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="max-w-min mx-auto">REQUEST A QUOTE</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
