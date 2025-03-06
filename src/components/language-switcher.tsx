"use client"

import { usePathname, useRouter } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations("language")

  const switchLocale = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, "")

    // Navigate to the new locale
    router.push(`/${newLocale}${pathnameWithoutLocale}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("switch")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLocale("pt")}>{t("portuguese")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLocale("en")}>{t("english")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

