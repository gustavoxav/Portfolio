"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@radix-ui/themes"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations("navigation")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Dev</span>Portfolio
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            {t("about")}
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            {t("skills")}
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            {t("projects")}
          </Link>
          <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
            {t("experience")}
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            {t("contact")}
          </Link>
        </nav>

        {/* Theme and language controls */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="#about"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {t("about")}
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {t("skills")}
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {t("projects")}
              </Link>
              <Link
                href="#experience"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {t("experience")}
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {t("contact")}
              </Link>
              <div className="flex items-center gap-2 pt-2 border-t">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

