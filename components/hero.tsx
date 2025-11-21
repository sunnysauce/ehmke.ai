"use client"

import { Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
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
            May I build for you?
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
  );
}

