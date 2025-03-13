"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Frame } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

import { ThemeSwitcher } from "@/components/theme-switcher"
import { LanguageSwitcher } from "@/components/language-switcher"
import { MobileNav } from "@/components/mobile-nav"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

export default function Navbar() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Use the scroll spy hook to track active section
  const activeSection = useScrollSpy(["about", "projects", "skills", "contact"], 100)

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()

    const section = document.getElementById(sectionId)
    if (!section) return

    const navbarHeight = 64 // Height of the navbar in pixels
    const sectionTop = section.offsetTop - navbarHeight

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    })
  }

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const navItems = [
    { id: "about", label: t("nav.about") },
    { id: "projects", label: t("nav.projects") },
    { id: "skills", label: t("nav.skills") },
    { id: "contact", label: t("nav.contact") },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="text-xl font-bold">
          <span className="flex items-center gap-2">
            <Frame className="h-6 w-6 text-primary" />
            <span className="gradient-heading">Portfolio</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeSection === item.id ? "bg-primary/10 text-primary" : "hover:bg-primary/10 hover:text-primary"
              }`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
          <Link href="/theme" className="px-4 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors">
            {t("nav.theme")}
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <MobileNav activeSection={activeSection} onSectionClick={scrollToSection} />
        </div>
      </div>
    </header>
  )
}

