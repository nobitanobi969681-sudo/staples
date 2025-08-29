"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion"; // Accertinity Accordion
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BlogPostPage() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-black via-zinc-950 to-zinc-900 text-zinc-100">
      {/* Hero / Cover */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/blog-cover.jpg"
            alt="Blog Cover"
            fill
            className="object-cover opacity-80"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-6 text-center text-5xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent"
          >
            The Future of Digital Media:<br></br>
             Creativity Meets Technology
            <p></p>
          </motion.h1>
        </div>
      </div>

      {/* Blog Content */}
      <main className="mx-auto max-w-3xl px-6 py-12 space-y-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg leading-8 text-zinc-300"
        >
         At Ankush Tripathi Media, we believe that storytelling is at the heart of every successful brand.
          In today’s fast-moving digital world, creativity alone is not enough — technology drives how stories are experienced. 
          s The future of digital media will be shaped by how seamlessly art and innovation blend together.
        </motion.p>

        {/* Hover Card Example */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Card className="border border-white/10 bg-zinc-900/70 shadow-lg backdrop-blur-lg transition hover:shadow-fuchsia-500/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-fuchsia-300">Highlighted Idea</h2>
              <p className="mt-4 text-zinc-400">
               True influence doesn’t come from a single post — 
               it comes from building a community. 
               Social platforms are powerful tools, but they work best when they foster authentic connections. 
               Our team works on crafting campaigns that do more than advertise; they spark conversations, inspire trust, and create lasting loyalty
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Accordion (Accertinity) */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="section-1" className="border-b border-white/10">
            <AccordionTrigger className="text-xl font-semibold text-cyan-300 hover:text-cyan-400">
              Expand More Details
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-zinc-400 leading-relaxed">
              This content is hidden by default and revealed with a smooth animated
              transition using Accertinity's Accordion.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Next/Prev Slider Buttons */}
        <div className="flex items-center justify-between pt-6">
          <Button variant="outline" className="transition hover:scale-105 hover:border-fuchsia-400">
            ← Previous Post
          </Button>
          <Button variant="outline" className="transition hover:scale-105 hover:border-cyan-400">
            Next Post →
          </Button>
        </div>
      </main>
    </div>
  );
}
