"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function About() {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-secondary/10"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/20 shadow-xl shadow-primary/10 dark:border-primary/30">
              <Image src="/placeholder.svg?height=320&width=320" alt="Profile" fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl gradient-heading">{t("about.title")}</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <p className="text-muted-foreground text-lg">{t("about.p1")}</p>
            <p className="text-muted-foreground text-lg">{t("about.p2")}</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20 dark:shadow-primary/10">
                {t("about.cv")}
              </Button>
              <Button
                variant="outline"
                className="border-primary/20 text-primary hover:bg-primary/10 hover:text-primary dark:border-primary/30"
              >
                {t("about.skills")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

