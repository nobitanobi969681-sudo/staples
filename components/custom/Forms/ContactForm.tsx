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
    purpose: "",
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
          to: "mediaxinfinity010@gmail.com",
          subject: `Quote Request from ${formData.name}`,
          message: `
            <strong>Name:</strong> ${formData.name}<br/>
            <strong>Email:</strong> ${formData.email}<br/>
            <strong>Phone:</strong> ${formData.phone}<br/>
            <strong>Service:</strong> ${formData.purpose}<br/>
            <strong>Message:</strong> ${formData.message}
          `,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus(
          "Your message is received. Our team will contact you within 24 hours."
        );
        // reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          purpose: "",
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
        <ShineBorder shineColor={["#FF0000"]} borderWidth={1} />
        <CardHeader>
          <CardTitle>Start Here</CardTitle>
          <CardDescription>
            Get in touch with us — we’ll respond quickly to your inquiry.
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
                className="tracing-wider"
              >
                {loading ? "Sending..." : "CONTACT US"}
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
