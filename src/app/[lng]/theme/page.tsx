"use client"

import { ThemeControlPanel } from "@/components/theme-control-panel"
import {useTranslations} from 'next-intl';

export default function ThemePage() {
  const t = useTranslations('themePage');

  return (
    <main className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold gradient-heading">{t("theme.title")}</h1>
          <p className="text-muted-foreground">{t("theme.subtitle")}</p>
        </div>

        <ThemeControlPanel />
      </div>
    </main>
  )
}

