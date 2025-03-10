"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import * as Form from "@radix-ui/react-form"
import * as Label from "@radix-ui/react-label"
import { useTranslations } from "next-intl"

export function ContactSection() {
  const t = useTranslations("contact")

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    alert(t("successMessage"))
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">{t("description")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">{t("getInTouch")}</h3>
            <p className="text-muted-foreground mb-8">{t("contactText")}</p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t("location")}</h4>
                  <p className="text-muted-foreground">Sua Cidade, País</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t("email")}</h4>
                  <p className="text-muted-foreground">your.email@example.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t("phone")}</h4>
                  <p className="text-muted-foreground">+XX XX XXXXX-XXXX</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Form.Root onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label.Root htmlFor="name" className="text-sm font-medium">
                    {t("form.name")}
                  </Label.Root>
                  <Form.Field name="name">
                    <Form.Control asChild>
                      <input
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder={t("form.namePlaceholder")}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </Form.Control>
                  </Form.Field>
                </div>
                <div className="space-y-2">
                  <Label.Root htmlFor="email" className="text-sm font-medium">
                    {t("form.email")}
                  </Label.Root>
                  <Form.Field name="email">
                    <Form.Control asChild>
                      <input
                        id="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder={t("form.emailPlaceholder")}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </Form.Control>
                  </Form.Field>
                </div>
              </div>
              <div className="space-y-2">
                <Label.Root htmlFor="subject" className="text-sm font-medium">
                  {t("form.subject")}
                </Label.Root>
                <Form.Field name="subject">
                  <Form.Control asChild>
                    <input
                      id="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      placeholder={t("form.subjectPlaceholder")}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </Form.Control>
                </Form.Field>
              </div>
              <div className="space-y-2">
                <Label.Root htmlFor="message" className="text-sm font-medium">
                  {t("form.message")}
                </Label.Root>
                <Form.Field name="message">
                  <Form.Control asChild>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      placeholder={t("form.messagePlaceholder")}
                      rows={5}
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </Form.Control>
                </Form.Field>
              </div>
              <Form.Submit asChild>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {t("form.submit")}
                </button>
              </Form.Submit>
            </Form.Root>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

