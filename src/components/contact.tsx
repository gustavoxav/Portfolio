"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-secondary/10"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl gradient-heading">{t("contact.title")}</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("contact.subtitle")}</p>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          <div className="space-y-6">
            <Card className="border border-border/50 card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{t("contact.email")}</h3>
                    <p className="text-muted-foreground">your.email@example.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-border/50 card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{t("contact.phone")}</h3>
                    <p className="text-muted-foreground">+1 (123) 456-7890</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-border/50 card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{t("contact.location")}</h3>
                    <p className="text-muted-foreground">City, Country</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="border border-border/50 shadow-lg">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Input
                      placeholder={t("contact.form.name")}
                      className="border-border/50 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder={t("contact.form.email")}
                      className="border-border/50 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder={t("contact.form.subject")}
                    className="border-border/50 focus:border-primary focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder={t("contact.form.message")}
                    className="min-h-[120px] border-border/50 focus:border-primary focus:ring-primary/20"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20 dark:shadow-primary/10"
                >
                  {t("contact.form.send")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

