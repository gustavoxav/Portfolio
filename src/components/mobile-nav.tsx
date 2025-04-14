"use client";

import type React from "react";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface MobileNavProps {
  activeSection: string;
  onSectionClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => void;
}

export function MobileNav({ activeSection, onSectionClick }: MobileNavProps) {
  const t = useTranslations("navbar");
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "about", label: t("about") },
    { id: "projects", label: t("projects") },
    { id: "skills", label: t("skills") },
    { id: "contact", label: t("contact") },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden border-primary/20 bg-background/80 backdrop-blur-sm">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="border-l border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="flex justify-end mb-8">
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                onSectionClick(e, item.id);
                setOpen(false);
              }}
              className={`text-lg font-medium py-2 px-4 rounded-md transition-colors ${
                activeSection === item.id
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-primary/10 hover:text-primary"
              }`}>
              {item.label}
            </a>
          ))}
          <Link
            href="/theme"
            className="text-lg font-medium py-2 px-4 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={() => setOpen(false)}>
            {t("theme")}
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
