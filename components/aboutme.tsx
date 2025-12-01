"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <section id="about-me" className="py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center lg:justify-center order-2 lg:order-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden">
              <Image
                src="/me.png"
                alt="Michael Ehmke"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="space-y-4 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Who Am I
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am a passionate product leader who loves building. In my free time I trade stocks, listen to interviews, go rock climbing, and build side projects for fun. I&apos;m a proud husband and father of two. One thing people often say about me is that I never become complacent with my current limits.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

