"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("theme");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9 rounded-full border-primary/20 bg-background">
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const getThemeIcon = () => {
    if (theme === "light") return Sun;
    if (theme === "dark") return Moon;
    return resolvedTheme === "dark" ? Moon : Sun;
  };

  const ThemeIcon = getThemeIcon();

  const themeIconColor =
    theme === "light" || (theme === "system" && resolvedTheme === "light")
      ? "text-amber-500"
      : "text-blue-400";

  return (
    <div className="flex items-center gap-4">
      <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
        <span className="font-medium text-foreground capitalize">
          {theme === "system"
            ? `${t("system")} (${resolvedTheme})`
            : theme === "light"
            ? t("light")
            : t("dark")}
        </span>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-full border-primary/20 bg-background dark:bg-secondary/20">
            <ThemeIcon className={`h-4 w-4 ${themeIconColor}`} />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="border-border/50 bg-background/95 backdrop-blur-sm">
          <DropdownMenuItem
            onClick={() => setTheme("light")}
            className={`flex items-center gap-2 ${
              theme === "light"
                ? "bg-primary/10 text-primary"
                : "hover:bg-primary/10 hover:text-primary"
            }`}>
            <Sun className="h-4 w-4 text-amber-500" />
            <span>{t("light")}</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("dark")}
            className={`flex items-center gap-2 ${
              theme === "dark"
                ? "bg-primary/10 text-primary"
                : "hover:bg-primary/10 hover:text-primary"
            }`}>
            <Moon className="h-4 w-4 text-blue-400" />
            <span>{t("dark")}</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("system")}
            className={`flex items-center gap-2 ${
              theme === "system"
                ? "bg-primary/10 text-primary"
                : "hover:bg-primary/10 hover:text-primary"
            }`}>
            <Monitor className="h-4 w-4 text-primary" />
            <span>{t("system")}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
