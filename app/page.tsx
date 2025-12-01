"use client"

import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/aboutme";
import { SkillsGrid } from "@/components/skills-grid";
import { ExperienceSection } from "@/components/experience-section";
import { Certifications } from "@/components/certifications";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Hero />
      <AboutMe />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        <ExperienceSection />
        <SkillsGrid />
        <Certifications />
        <footer className="text-center text-sm text-muted-foreground border-t pt-8">
          <div className="flex justify-center gap-6 mb-4">
            <a href="mailto:michael@ehmke.ai" className="hover:text-foreground transition-colors">Email</a>
            <a href="https://linkedin.com/in/michaelehmke" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://github.com/sunnysauce" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="https://x.com/ehmkemichael" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">X (Twitter)</a>
          </div>
          <div className="mt-8 w-full">
             <Image
              src="/signature-big.png"
              alt="Michael Wilhelm Ehmke Signature"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto dark:hidden"
            />
            <Image
              src="/signature-w-big.png"
              alt="Michael Wilhelm Ehmke Signature"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto hidden dark:block"
            />
          </div>
        </footer>
      </div>
    </main>
  );
}
