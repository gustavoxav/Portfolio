"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const t = useTranslations("hero")

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="text-primary">{t("greeting")}</span> {t("name")}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t("title")}</p>
        <p className="text-lg mb-10 max-w-2xl mx-auto">{t("description")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={scrollToContact}>
            {t("contact")}
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#projects">{t("projects")}</a>
          </Button>
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

