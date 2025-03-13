"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Monitor, Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/language-context"

export function ThemeControlPanel() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Card className="w-full max-w-md mx-auto border border-border/50 shadow-lg animate-pulse">
        <CardHeader className="border-b border-border/50 bg-muted/30">
          <div className="h-7 w-48 bg-muted rounded-md"></div>
          <div className="h-5 w-64 bg-muted/50 rounded-md mt-2"></div>
        </CardHeader>
        <CardContent className="space-y-8 p-6">
          <div className="space-y-4">
            <div className="h-5 w-32 bg-muted rounded-md"></div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 bg-muted rounded-md"></div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto border border-border/50 shadow-lg">
      <CardHeader className="border-b border-border/50 bg-muted/30 dark:bg-secondary/10">
        <CardTitle className="gradient-heading">{t("theme.title")}</CardTitle>
        <CardDescription>{t("theme.subtitle")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8 p-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-foreground">{t("theme.color")}</h3>
          <div className="grid grid-cols-3 gap-4">
            <Button
              variant="outline"
              size="sm"
              className={`flex flex-col items-center justify-center h-24 gap-2 border-2 ${
                theme === "light" ? "border-primary bg-primary/5" : "border-border/50"
              }`}
              onClick={() => setTheme("light")}
            >
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <Sun className="h-5 w-5 text-amber-500" />
              </div>
              <span>{t("theme.light")}</span>
              {theme === "light" && <Check className="absolute top-2 right-2 h-4 w-4 text-primary" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={`flex flex-col items-center justify-center h-24 gap-2 border-2 ${
                theme === "dark" ? "border-primary bg-primary/5" : "border-border/50"
              }`}
              onClick={() => setTheme("dark")}
            >
              <div className="w-10 h-10 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center">
                <Moon className="h-5 w-5 text-blue-400" />
              </div>
              <span>{t("theme.dark")}</span>
              {theme === "dark" && <Check className="absolute top-2 right-2 h-4 w-4 text-primary" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={`flex flex-col items-center justify-center h-24 gap-2 border-2 ${
                theme === "system" ? "border-primary bg-primary/5" : "border-border/50"
              }`}
              onClick={() => setTheme("system")}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-gray-900 border border-gray-300 flex items-center justify-center">
                <Monitor className="h-5 w-5 text-primary" />
              </div>
              <span>{t("theme.system")}</span>
              {theme === "system" && <Check className="absolute top-2 right-2 h-4 w-4 text-primary" />}
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-muted/30 dark:bg-secondary/10 rounded-lg">
          <div className="space-y-0.5">
            <Label htmlFor="auto-theme" className="text-foreground">
              {t("theme.follow")}
            </Label>
            <p className="text-xs text-muted-foreground">{t("theme.follow.description")}</p>
          </div>
          <Switch
            id="auto-theme"
            checked={theme === "system"}
            onCheckedChange={(checked) => {
              if (checked) {
                setTheme("system")
              } else {
                setTheme(resolvedTheme === "dark" ? "dark" : "light")
              }
            }}
            className="data-[state=checked]:bg-primary"
          />
        </div>

        <div className="pt-4 border-t border-border/50">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-foreground">{t("theme.current")}</p>
            <p className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary capitalize">
              {theme === "system"
                ? `${t("theme.system")} (${resolvedTheme})`
                : theme === "light"
                  ? t("theme.light")
                  : t("theme.dark")}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

