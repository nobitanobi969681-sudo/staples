"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SparklesCore } from "@/components/magicui/sparkles";
import { Shield, Cookie, Link, UserCheck, FileText, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-zinc-100">
      {/* Animated techno sparkles background */}
      <div className="absolute inset-0 -z-10">
        <SparklesCore
          background="transparent"
          particleDensity={90}
          particleColor="#f472b6"
          className="h-full w-full"
        />
      </div>

      {/* Headline */}
      <header className="mx-auto max-w-5xl px-6 pt-14 pb-8 sm:pt-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-300 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl"
        >
          Ankush Tripathi & Media — Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-sm text-zinc-300 sm:text-base"
        >
          We value your trust. Learn how we handle your data.
        </motion.p>
      </header>

      {/* Accordion Privacy Sections */}
      <main className="mx-auto max-w-4xl px-6 pb-20">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="collect">
            <AccordionTrigger className="text-lg font-semibold"><FileText className="mr-2 h-5 w-5" />Information We Collect</AccordionTrigger>
            <AccordionContent>
              <Card className="bg-white/5 border border-white/10 backdrop-blur-md">
                <CardContent className="p-4 text-sm text-zinc-300">
                  We collect information you provide directly (like name and email), automatically (such as IP, device info, and usage), and data from third-party integrations.
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="use">
            <AccordionTrigger className="text-lg font-semibold"><Shield className="mr-2 h-5 w-5" />How We Use Data</AccordionTrigger>
            <AccordionContent>
              <Card className="bg-white/5 border border-white/10 backdrop-blur-md">
                <CardContent className="p-4 text-sm text-zinc-300">
                  Data is used to improve services, personalize experiences, ensure security, communicate updates, and comply with legal obligations.
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cookies">
            <AccordionTrigger className="text-lg font-semibold"><Cookie className="mr-2 h-5 w-5" />Cookies & Tracking</AccordionTrigger>
            <AccordionContent>
              <Card className="bg-white/5 border border-white/10 backdrop-blur-md">
                <CardContent className="p-4 text-sm text-zinc-300">
                  We use cookies and similar technologies to remember preferences, analyze traffic, and enhance functionality. You can manage cookies in your browser settings.
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="third">
            <AccordionTrigger className="text-lg font-semibold"><Link className="mr-2 h-5 w-5" />Third‑Party Sharing</AccordionTrigger>
            <AccordionContent>
              <Card className="bg-white/5 border border-white/10 backdrop-blur-md">
                <CardContent className="p-4 text-sm text-zinc-300">
                  We may share data with trusted service providers under strict agreements. We do not sell your personal data. Sharing occurs only when necessary for operations or required by law.
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rights">
            <AccordionTrigger className="text-lg font-semibold"><UserCheck className="mr-2 h-5 w-5" />Your Rights</AccordionTrigger>
            <AccordionContent>
              <Card className="bg-white/5 border border-white/10 backdrop-blur-md">
                <CardContent className="p-4 text-sm text-zinc-300">
                  You have rights to access, correct, delete, or restrict your data depending on jurisdiction. To exercise these rights, contact us as below.
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="contact">
            <AccordionTrigger className="text-lg font-semibold"><Mail className="mr-2 h-5 w-5" />Contact Us</AccordionTrigger>
            <AccordionContent>
              <Card className="bg-white/5 border border-white/10 backdrop-blur-md">
                <CardContent className="p-4 text-sm text-zinc-300">
                  For privacy questions, reach out to us at <a href="mailto:contact@ankushtripathi.media" className="underline decoration-dotted hover:decoration-solid">contact@ankushtripathi.media</a>.
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>

      {/* Footer */}
      <footer className="pb-10 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Ankush Tripathi & Media. All rights reserved.
      </footer>
    </div>
  );
}
