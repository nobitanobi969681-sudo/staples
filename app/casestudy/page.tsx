"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // shadcn helper
import { ArrowRight } from "lucide-react";

// Sample Case Studies
const caseStudies = [
  {
    id: 1,
    title: "Digital Branding for FMCG",
    description:
      "We helped a leading FMCG brand increase online visibility by 150% with creative campaigns and automation tools.",
    tags: ["Branding", "Social Media", "FMCG"],
    image: "/images/fmcg.jpg",
  },
  {
    id: 2,
    title: "Smart Tools Marketing",
    description:
      "Launched a digital campaign for industrial tools, driving 40% more qualified B2B leads in 3 months.",
    tags: ["B2B", "Industrial", "Performance Marketing"],
    image: "/images/industrial.jpg",
  },
  {
    id: 3,
    title: "Creative Media Solutions",
    description:
      "Produced video and graphic content that boosted engagement by 200% across all digital platforms.",
    tags: ["Media Production", "Video", "Design"],
    image: "/images/media.jpg",
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="container mx-auto px-6 py-16">
      {/* Page Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          Case Studies
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Real-world success stories from{" "}
          <span className="font-semibold">Ankush Tripathi & Media</span> where
          creativity meets results.
        </p>
      </motion.div>

      {/* Grid of Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <Card className="overflow-hidden shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300">
              <img
                src={study.image}
                alt={study.title}
                className="h-48 w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-700">
                  {study.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  className={cn(
                    "bg-blue-600 text-white hover:bg-blue-700 transition flex items-center gap-2"
                  )}
                >
                  View More <ArrowRight size={16} />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
