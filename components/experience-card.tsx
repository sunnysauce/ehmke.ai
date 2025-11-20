"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, ChevronRight, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface ExperienceProps {
  title: string;
  company: string;
  companyUrl?: string;
  caseStudyUrl?: string;
  period: string;
  location: string;
  description: string[];
  index: number;
  imageUrl?: string;
}

export function ExperienceCard({ title, company, companyUrl, caseStudyUrl, period, location, description, index, imageUrl }: ExperienceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
        {imageUrl && (
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={imageUrl}
              alt={`${company} image`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold leading-tight">{title}</CardTitle>
              <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                <Building2 className="h-4 w-4" />
                {company}
              </div>
            </div>
            <div className="flex flex-col items-start sm:items-end text-sm text-muted-foreground gap-1.5 min-w-fit">
              <div className="flex items-center gap-1.5 bg-muted/50 px-2 py-1 rounded-md">
                <Calendar className="h-3.5 w-3.5" />
                {period}
              </div>
              <div className="flex items-center gap-1.5 bg-muted/50 px-2 py-1 rounded-md">
                <MapPin className="h-3.5 w-3.5" />
                {location}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-2.5">
            {description.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-muted-foreground/90 text-sm leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-4 gap-3 flex-wrap sm:flex-nowrap">
          {caseStudyUrl && (
            <Button variant="default" className="w-full sm:w-auto group" asChild>
              <Link href={caseStudyUrl}>
                View Case Study
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          )}
          {companyUrl && (
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <a href={companyUrl} target="_blank" rel="noopener noreferrer">
                Visit Website
                <ExternalLink className="ml-2 h-3.5 w-3.5" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
