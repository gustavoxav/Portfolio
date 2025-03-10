"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useTranslations } from "next-intl"

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-3xl mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="text-primary">{t("greeting")}</span> {t("name")}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t("title")}</p>
        <p className="text-lg mb-10 max-w-2xl mx-auto">{t("description")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {t("contact")}
          </a>
          <a
            href="#projects"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {t("projects")}
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">{t("scrollDown")}</span>
          <ArrowDown className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}

