"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white fixed w-full z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl">
              ehmke.ai
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {/* 
              <Link 
                href="#about" 
                className="hover:bg-slate-800 px-3 py-2 rounded-md"
              >
                About
              </Link>
              <Link 
                href="#experience" 
                className="hover:bg-slate-800 px-3 py-2 rounded-md"
              >
                Experience
              </Link>
              <Link 
                href="#projects" 
                className="hover:bg-slate-800 px-3 py-2 rounded-md"
              >
                Projects
              </Link>
              */}
              <Link 
                href="#contact" 
                className="hover:bg-slate-800 px-3 py-2 rounded-md"
              >
                Contact
              </Link>
              <Button variant="secondary" size="sm" asChild>
                <Link href="https://linkedin.com/in/michaelehmke" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* 
            <Link
              href="#about"
              className="block px-3 py-2 rounded-md hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="block px-3 py-2 rounded-md hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-2 rounded-md hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            */}
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button variant="secondary" size="sm" className="w-full" asChild>
                <Link href="https://linkedin.com/in/michaelemhke" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 