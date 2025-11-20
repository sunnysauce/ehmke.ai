"use client"

import { Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExperienceCard } from "@/components/experience-card";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="absolute inset-0 bg-grid-slate-200/20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-800/20 dark:[mask-image:linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.5))]" />
        <div className="absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-foreground">
              Michael <span className="text-primary">Ehmke</span>
            </h1>
            
            <p className="text-xl sm:text-3xl text-muted-foreground font-medium max-w-2xl mx-auto">
              Senior Product Manager & Startup Founder
            </p>
            
            <p className="text-lg text-muted-foreground/80 max-w-xl mx-auto">
              Bridging the gap between technical feasibility and business strategy. 
              Expert in turning concepts into scalable SaaS products.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <Button size="lg" className="rounded-full px-8" asChild>
                <a href="mailto:michael@ceptly.com">
                  <Mail className="mr-2 h-5 w-5" />
                  michael@ceptly.com
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
                <ArrowDown className="mr-2 h-5 w-5" />
                View Experience
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        
        {/* Skills Grid */}
        <section id="skills">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Expertise & Tools</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive toolkit for building modern web applications and managing product lifecycles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <motion.div variants={fadeInUp}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      Business & Strategy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Product Strategy", "Team Leadership", "Talent Acquisition", "AI Strategy", "Agile", "Scrum"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      Programming
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Javascript", "Typescript", "Node.js", "Tailwind CSS", "React", "Next.js"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      Tools & Cloud
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["AWS", "MongoDB", "Vercel", "Figma", "Jira", "Linear", "GitHub", "Stripe", "Cursor", "LLMs"].map((skill) => (
                        <Badge key={skill} variant="outline" className="hover:border-primary hover:text-primary transition-colors cursor-default">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Professional Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A track record of leadership, innovation, and successful product deliveries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ExperienceCard 
              title="CEO & Founder"
              company="Ceptly"
              companyUrl="https://ceptly.com"
              //caseStudyUrl="/ceptly"
              imageUrl="/ceptly.png"
              period="August 2025 - Present"
              location="Prosper, TX"
              index={0}
              description={[
                "Building a SaaS visual ideation tool driving from 'concept' to reality.",
                "Focusing on true ideation help and requirement creation to reduce implementation time.",
                "Leading all aspects of product vision, strategy, and technical architecture."
              ]}
            />
            
            <ExperienceCard 
              title="Chief Technology Officer & Co-founder"
              company="Dark Weather"
              companyUrl="https://darkweather.com"
              //caseStudyUrl="/darkweather"
              imageUrl="/darkweather.png"
              period="October 2025 - Present"
              location="Plano, TX"
              index={1}
              description={[
                "Leading development of a sophisticated weather application with AI integration.",
                "Created branding guidelines and conceived business strategy with the founder.",
                "Overseeing technical implementation and product roadmap."
              ]}
            />

            <ExperienceCard 
              title="Chief Product Officer"
              company="FX Analytics"
              companyUrl="https://fxanalytics.com"
              //caseStudyUrl="/fxanalytics"
              imageUrl="/fxanalytics.png"
              period="August 2024 - October 2025"
              location="Dallas, TX"
              index={2}
              description={[
                "Facilitated a successful company sale.",
                "Owned the strategy of product/services, websites, & applications.",
                "Managed cross-functional teams to deliver high-impact features."
              ]}
            />

            <ExperienceCard 
              title="Web Product Manager"
              company="FX Analytics"
              companyUrl="https://fxanalytics.com"
              //caseStudyUrl="/fxanalytics"
              imageUrl="/fxanalytics.png"
              period="June 2024 - August 2024"
              location="Dallas, TX"
              index={3}
              description={[
                "Founding member who selected the tech stack and assembled the first development team.",
                "Oversaw software development for a customer-facing app and internal systems.",
                "Established agile development processes."
              ]}
            />

            <ExperienceCard 
              title="Software Development Project Manager II"
              company="All My Sons"
              //caseStudyUrl="/allmysons"
              imageUrl="/allmysons.png"
              period="April 2023 - June 2024"
              location="Carrollton, TX"
              index={4}
              description={[
                "Oversaw software development for the company's custom CMS and various applications.",
                "Coordinated between stakeholders and development teams to ensure timely delivery."
              ]}
            />

            <ExperienceCard 
              title="Software Development Project Manager I"
              company="All My Sons"
              //caseStudyUrl="/allmysons"
              imageUrl="/allmysons.png"
              period="October 2022 - April 2023"
              location="Carrollton, TX"
              index={5}
              description={[
                "Managed application testing, debugging, & team of UAT users.",
                "Transitioned from sales to support the development team; directed developers abroad."
              ]}
            />
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-8 pb-20">
          <h2 className="text-3xl font-bold tracking-tight text-center">Certifications</h2>
          <div className="flex flex-wrap justify-center gap-4">
             {["Google Agile Project Management", "Agile with Atlassian Jira", "Google Project Initiation", "Foundations of Project Management"].map((cert, i) => (
               <motion.div 
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
               >
                 <Badge variant="outline" className="px-4 py-2 text-base bg-background">
                    <span className="mr-2 text-green-500">✓</span>
                    {cert}
                 </Badge>
               </motion.div>
             ))}
          </div>
        </section>

        <footer className="text-center text-sm text-muted-foreground border-t pt-8">
          <div className="flex justify-center gap-6 mb-4">
            <a href="mailto:michael@ceptly.com" className="hover:text-foreground transition-colors">Email</a>
            <a href="https://linkedin.com/in/michaelehmke" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://github.com/sunnysauce" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
          <p>Michael Wilhelm Ehmke</p>
        </footer>
      </div>
    </main>
  );
}
