"use client"

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Certifications() {
  return (
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
                {cert}
             </Badge>
           </motion.div>
         ))}
      </div>
    </section>
  );
}

