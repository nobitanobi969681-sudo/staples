"use client";

import { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "test1",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // compose email body from form fields
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "nobitanobi969681@gmail.com", // change to your email or array
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
        setStatus("✅ Sent successfully!");
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
      setStatus("❌ Error sending email.");
    } finally {
      setLoading(false);
    }
  };

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
                {["test1", "test2", "test3", "test4", "test5", "test6"].map(
                  (val, i) => (
                    <div key={val} className="flex items-center gap-3">
                      <RadioGroupItem value={val} id={`r${i}`} />
                      <Label htmlFor={`r${i}`}>{val}</Label>
                    </div>
                  )
                )}
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
              <ShimmerButton
                type="submit"
                disabled={loading}
                className="shadow-2xl w-full justify-center"
              >
                {loading ? "Sending..." : "Request Quote"}
              </ShimmerButton>
            </CardFooter>

            {status && <p className="text-center mt-2 text-sm">{status}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
