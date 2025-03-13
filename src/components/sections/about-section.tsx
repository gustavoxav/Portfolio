"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AboutSectionProps {
  t: (key: string) => string
}

export function AboutSection({ t }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-muted">
              <Image src="/placeholder.svg?height=400&width=400" alt={t("imageAlt")} fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">{t("subtitle")}</h3>
            <p className="mb-4 text-muted-foreground">{t("paragraph1")}</p>
            <p className="mb-6 text-muted-foreground">{t("paragraph2")}</p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">{t("personalInfo")}</h4>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">{t("name")}: </span>
                    <span className="text-muted-foreground">Seu Nome</span>
                  </li>
                  <li>
                    <span className="font-medium">{t("age")}: </span>
                    <span className="text-muted-foreground">XX {t("years")}</span>
                  </li>
                  <li>
                    <span className="font-medium">{t("location")}: </span>
                    <span className="text-muted-foreground">Sua Cidade, País</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">{t("interests")}</h4>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">{t("interest1")}</li>
                  <li className="text-muted-foreground">{t("interest2")}</li>
                  <li className="text-muted-foreground">{t("interest3")}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

