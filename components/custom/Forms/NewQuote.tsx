"use client";

import { useState } from "react";
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
import { RainbowButton } from "@/components/magicui/rainbow-button";

export default function QuoteForm() {
  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "test1",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // handle radio change
  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  // send email
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "ankushtripathiandcompany@gmail.com",
          subject: `Quote Request from ${formData.name}`,
          message: `
            <strong>Name:</strong> ${formData.name}<br/>
            <strong>Email:</strong> ${formData.email}<br/>
            <strong>Phone:</strong> ${formData.phone}<br/>
            <strong>Service:</strong> ${formData.service}<br/>
            <strong>Message:</strong> ${formData.message}
          `,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus(
          "Thanks for your quote request! We’ll get back to you via email and follow up with a call soon."
        );
        // reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "test1",
          message: "",
        });
      } else {
        setStatus(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Network error sending email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-4">
      <Card className="relative overflow-hidden max-w-[480px] w-full mx-auto mb-16 py-8">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        <CardHeader>
          <CardTitle>Start Here</CardTitle>
          <CardDescription>
            Tell us your plan and know the cost to build it.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder=""
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-2">
              <Label>Service</Label>
              <RadioGroup
                value={formData.service}
                onValueChange={handleServiceChange}
              >
                {[
                  "Website & App Development",
                  "Digital Marketing & SEO",
                  "Photograpy & Video Editing",
                  "Building MVPs & Prototypes",
                  "UI/UX & Graphic Designing",
                  "Branding & PR Management",
                ].map((val, i) => (
                  <div key={val} className="flex items-center gap-3">
                    <RadioGroupItem value={val} id={`r${i}`} />
                    <Label htmlFor={`r${i}`}>{val}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <CardFooter className="p-0 mt-4">
              <RainbowButton
                type="submit"
                disabled={loading}
                className="tracking-wider"
              >
                {loading ? "Sending..." : "REQUEST A QUOTE"}
              </RainbowButton>
            </CardFooter>

            {status && (
              <p className="p-4 mt-4 bg-slate-100 dark:bg-black rounded-md text-center text-sm text-black dark:text-white">
                {status}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
