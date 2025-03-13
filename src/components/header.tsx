"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { Globe, Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface HeaderProps {
  t: {
    navigation: (key: string) => string
    theme: (key: string) => string
    language: (key: string) => string
  }
  locale: string
}

export function Header({ t, locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { setTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const switchLocale = (newLocale: string) => {
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, "")
    router.push(`/${newLocale}${pathnameWithoutLocale}`)
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
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            {t.navigation("about")}
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            {t.navigation("skills")}
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            {t.navigation("projects")}
          </Link>
          <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
            {t.navigation("experience")}
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            {t.navigation("contact")}
          </Link>
        </nav>

        {/* Theme and language controls */}
        <div className="hidden md:flex items-center gap-2">
          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">{t.theme("toggle")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>{t.theme("light")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>{t.theme("dark")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>{t.theme("system")}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">{t.language("switch")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => switchLocale("pt")}>{t.language("portuguese")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale("en")}>{t.language("english")}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
                {t.navigation("about")}
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {t.navigation("skills")}
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {t.navigation("projects")}
              </Link>
              <Link
                href="#experience"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {t.navigation("experience")}
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {t.navigation("contact")}
              </Link>
              <div className="flex items-center gap-2 pt-2 border-t">
                {/* Theme Toggle (Mobile) */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">{t.theme("toggle")}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>{t.theme("light")}</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>{t.theme("dark")}</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>{t.theme("system")}</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Language Switcher (Mobile) */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Globe className="h-[1.2rem] w-[1.2rem]" />
                      <span className="sr-only">{t.language("switch")}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => switchLocale("pt")}>{t.language("portuguese")}</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => switchLocale("en")}>{t.language("english")}</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

