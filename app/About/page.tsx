import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SparklesCore } from "@/components/magicui/sparkles";
import { Github, Linkedin, Mail } from "lucide-react";

export default function About() {
  return (
    <AuroraBackground className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Hero Section */}
      <div className="relative w-full max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          About <span className="text-primary">Us</span>
        </motion.h1>
     
        <div className="absolute inset-0 -z-10">
          <SparklesCore
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={120}
            className="w-full h-full"
          />
        </div>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground">
          We craft modern web experiences with cutting-edge tools, performance,
          and beautiful design.
        </p>
      </div>

      <Separator className="my-10 max-w-2xl" />

      {/* Content Section */}
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl w-full">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              To empower businesses and individuals by building scalable,
              accessible, and user-friendly digital products that inspire.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">What We Do</h2>
            <p className="text-muted-foreground">
              We specialize in web development, UI/UX design, and cloud
              solutions using modern frameworks like React, Next.js, and more.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Team / Contact Section */}
      <div className="mt-12 flex flex-col items-center gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Connect With Us</h2>
        <div className="flex gap-4">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:hello@example.com">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </AuroraBackground>
  );
}