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
          <Button variant="ghost" size="icon" asChild className="rounded-full">
             <a href="https://x.com/ehmkemichael" target="_blank" rel="noopener noreferrer">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
              <span className="sr-only">X (Twitter)</span>
            </a>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

