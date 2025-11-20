"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-12 w-32">
            <Image 
              src="/signature-long.png" 
              alt="Michael Wilhelm Ehmke" 
              fill
              className="object-contain dark:hidden"
              priority
            />
            <Image 
              src="/signature-w-long.png" 
              alt="Michael Wilhelm Ehmke" 
              fill
              className="object-contain hidden dark:block"
              priority
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <a href="https://linkedin.com/in/michaelehmke" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
             <a href="https://github.com/sunnysauce" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

