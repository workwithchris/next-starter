"use client";

import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Menu, X, Terminal, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#ebebeb] bg-[#fafafa]/85 backdrop-blur-md dark:border-[#262626] dark:bg-black/85 transition-colors">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Vercel Geometric Triangle Mark */}
            <div className="flex h-6 w-6 items-center justify-center bg-[#171717] dark:bg-white text-white dark:text-black rounded-md transition-transform group-hover:scale-105">
              <svg
                width="14"
                height="12"
                viewBox="0 0 76 65"
                fill="currentColor"
                className="translate-y-[-0.5px]"
              >
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
            </div>
            <span className="font-semibold text-sm tracking-tight text-[#171717] dark:text-[#ededed]">
              next-starter
            </span>
          </Link>

          {/* Version / Eyebrow Pill */}
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#121212] px-2.5 py-0.5 text-[11px] font-mono text-[#4d4d4d] dark:text-[#a1a1a1]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse" />
            v16.3 Next.js
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-[13px] text-[#4d4d4d] dark:text-[#a1a1a1]">
          <a
            href="#features"
            className="rounded-full px-3 py-1.5 transition-colors hover:text-[#171717] dark:hover:text-white"
          >
            Features
          </a>
          <a
            href="#stack"
            className="rounded-full px-3 py-1.5 transition-colors hover:text-[#171717] dark:hover:text-white"
          >
            Tech Stack
          </a>
          <a
            href="#form-demo"
            className="rounded-full px-3 py-1.5 transition-colors hover:text-[#171717] dark:hover:text-white"
          >
            Form & Zod Demo
          </a>
          <a
            href="#architecture"
            className="rounded-full px-3 py-1.5 transition-colors hover:text-[#171717] dark:hover:text-white"
          >
            Architecture
          </a>
          <a
            href="#quickstart"
            className="rounded-full px-3 py-1.5 transition-colors hover:text-[#171717] dark:hover:text-white"
          >
            Quickstart
          </a>
        </nav>

        {/* Right CTA Actions adhering to DESIGN.md button-primary-sm (rounded-sm 6px square) */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://github.com/vercel/next.js"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[6px] border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#121212] px-2.5 py-1 text-xs font-medium text-[#171717] dark:text-[#ededed] hover:bg-[#f5f5f5] dark:hover:bg-[#1c1c1c] transition-colors"
          >
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
            <span className="text-[10px] text-[#8f8f8f] font-mono border-l border-[#ebebeb] dark:border-[#262626] pl-1.5 ml-0.5">
              ★ 124k
            </span>
          </a>

          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#171717] dark:bg-white text-white dark:text-[#171717] px-3 py-1 text-xs font-medium hover:bg-black dark:hover:bg-zinc-200 transition-colors shadow-xs"
          >
            <span>Deploy</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-[6px] border border-[#ebebeb] dark:border-[#262626] text-[#4d4d4d] dark:text-[#a1a1a1]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-black px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[#4d4d4d] dark:text-[#a1a1a1]">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#171717] dark:hover:text-white"
            >
              Features
            </a>
            <a
              href="#stack"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#171717] dark:hover:text-white"
            >
              Tech Stack
            </a>
            <a
              href="#form-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#171717] dark:hover:text-white"
            >
              Form & Zod Demo
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#171717] dark:hover:text-white"
            >
              Architecture
            </a>
            <a
              href="#quickstart"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#171717] dark:hover:text-white"
            >
              Quickstart
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center rounded-[6px] bg-[#171717] dark:bg-white text-white dark:text-[#171717] py-2 text-xs font-medium"
            >
              Deploy to Vercel
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
