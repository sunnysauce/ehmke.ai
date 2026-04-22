"use client"

import { ExperienceCard } from "@/components/experience-card";

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">My Career</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/*<ExperienceCard 
          title="Founder"
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
        />*/}
        
        {/*<ExperienceCard 
          title="Chief Technology Officer & Co-founder"
          company="Dark Weather"
          companyUrl="https://darkweather.ai"
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
        />*/}

        <ExperienceCard 
          title="Head of Product"
          company="FX Analytics"
          companyUrl="https://fxanalytics.com"
          //caseStudyUrl="/fxanalytics"
          imageUrl="/fxanalytics.png"
          period="August 2024 - Present"
          location="Dallas, TX"
          index={2}
          description={[
            "Led product strategy and execution across a custom CRM and client-facing portfolio application serving 650+ users.",
            "Built and managed a cross-functional team of 2 engineers, 2 designers, and 1 project manager from the ground up.",
            "Architected the internal CRM to support client specialists and developers, replacing manual workflows for a 6-person ops team.",
            "Owned the full product lifecycle from requirements and design (Figma) through development, QA, and deployment on Vercel and AWS.",
            "Founding team member; selected the initial tech stack (Next.js, TypeScript, MongoDB, AWS) and recruited the first development team.",
            "Established agile development processes and delivery workflows from scratch."
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
  );
}

