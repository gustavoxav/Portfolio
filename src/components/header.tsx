"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { Globe, Menu, Moon, Sun, X } from "lucide-react"
import * as Dropdown from "@radix-ui/react-dropdown-menu"

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
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>

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
          <Dropdown.Root>
            <Dropdown.Trigger asChild>
              <button className="inline-flex items-center justify-center rounded-full w-10 h-10 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">{t.theme("toggle")}</span>
              </button>
            </Dropdown.Trigger>
            <Dropdown.Portal>
              <Dropdown.Content
                className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                align="end"
              >
                <Dropdown.Item
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                  onSelect={() => setTheme("light")}
                >
                  {t.theme("light")}
                </Dropdown.Item>
                <Dropdown.Item
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                  onSelect={() => setTheme("dark")}
                >
                  {t.theme("dark")}
                </Dropdown.Item>
                <Dropdown.Item
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                  onSelect={() => setTheme("system")}
                >
                  {t.theme("system")}
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Portal>
          </Dropdown.Root>

          {/* Language Switcher */}
          <Dropdown.Root>
            <Dropdown.Trigger asChild>
              <button className="inline-flex items-center justify-center rounded-full w-10 h-10 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">{t.language("switch")}</span>
              </button>
            </Dropdown.Trigger>
            <Dropdown.Portal>
              <Dropdown.Content
                className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                align="end"
              >
                <Dropdown.Item
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                  onSelect={() => switchLocale("pt")}
                >
                  {t.language("portuguese")}
                </Dropdown.Item>
                <Dropdown.Item
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                  onSelect={() => switchLocale("en")}
                >
                  {t.language("english")}
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Portal>
          </Dropdown.Root>
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
                <Dropdown.Root>
                  <Dropdown.Trigger asChild>
                    <button className="inline-flex items-center justify-center rounded-full w-10 h-10 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">{t.theme("toggle")}</span>
                    </button>
                  </Dropdown.Trigger>
                  <Dropdown.Portal>
                    <Dropdown.Content
                      className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                      align="end"
                    >
                      <Dropdown.Item
                        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                        onSelect={() => setTheme("light")}
                      >
                        {t.theme("light")}
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                        onSelect={() => setTheme("dark")}
                      >
                        {t.theme("dark")}
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                        onSelect={() => setTheme("system")}
                      >
                        {t.theme("system")}
                      </Dropdown.Item>
                    </Dropdown.Content>
                  </Dropdown.Portal>
                </Dropdown.Root>

                {/* Language Switcher (Mobile) */}
                <Dropdown.Root>
                  <Dropdown.Trigger asChild>
                    <button className="inline-flex items-center justify-center rounded-full w-10 h-10 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                      <Globe className="h-[1.2rem] w-[1.2rem]" />
                      <span className="sr-only">{t.language("switch")}</span>
                    </button>
                  </Dropdown.Trigger>
                  <Dropdown.Portal>
                    <Dropdown.Content
                      className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                      align="end"
                    >
                      <Dropdown.Item
                        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                        onSelect={() => switchLocale("pt")}
                      >
                        {t.language("portuguese")}
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                        onSelect={() => switchLocale("en")}
                      >
                        {t.language("english")}
                      </Dropdown.Item>
                    </Dropdown.Content>
                  </Dropdown.Portal>
                </Dropdown.Root>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

