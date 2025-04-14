"use client";

import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

export function LanguageSwitcher() {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("language");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-4">
      <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
        <span className="font-medium text-foreground capitalize">
          {/* {language === "en" ? "EN" : "PT"} */}
        </span>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-full border-primary/20 bg-background dark:bg-secondary/20">
            <Globe className="h-4 w-4 text-primary" />
            <span className="sr-only">{t("language")}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="border-border/50 bg-background/95 backdrop-blur-sm">
          <DropdownMenuItem
            // onClick={() => setLanguage("en")}
            className={`flex items-center gap-2 `}
            //   ${
            //   language === "en" ? "bg-primary/10 text-primary" : "hover:bg-primary/10 hover:text-primary"
            // }
          >
            <span className="w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full bg-primary/10">
              EN
            </span>
            <span>{t("en")}</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            // onClick={() => setLanguage("pt")}
            className={`flex items-center gap-2`}>
            {/* // ${  language === "pt"
            //     ? "bg-primary/10 text-primary"
            //     : "hover:bg-primary/10 hover:text-primary"
            // } */}
            <span className="w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full bg-primary/10">
              PT
            </span>
            <span>{t("pt")}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
