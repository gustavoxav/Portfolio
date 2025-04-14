"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

export default function Hero() {
  const t = useTranslations("hero");
  const aboutSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    aboutSectionRef.current = document.getElementById("about");
  }, []);

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      const navbarHeight = 64; // Height of the navbar in pixels
      const sectionTop = aboutSectionRef.current.offsetTop - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/0 dark:from-background dark:via-background/95 dark:to-background/90 z-10"></div>

      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 dark:opacity-20"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 animate-gradient-x"></div>

      <div className="container px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {t("greeting")}{" "}
              <span className="gradient-heading">Your Name</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl">
              {t("role")}
            </p>
          </div>
          <div className="space-x-4">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 dark:shadow-primary/10"
              onClick={scrollToAbout}>
              {t("cta.work")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-primary/20 text-primary hover:bg-primary/10 hover:text-primary dark:border-primary/30"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  const navbarHeight = 64;
                  const sectionTop = contactSection.offsetTop - navbarHeight;

                  window.scrollTo({
                    top: sectionTop,
                    behavior: "smooth",
                  });
                }
              }}>
              {t("cta.contact")}
            </Button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 cursor-pointer"
        onClick={scrollToAbout}>
        <ArrowRight className="h-6 w-6 rotate-90 text-primary" />
      </div>
    </section>
  );
}
