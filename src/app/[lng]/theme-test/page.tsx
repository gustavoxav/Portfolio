"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Monitor } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ThemeTestPage() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen pt-24 px-4 flex items-center justify-center">Loading...</div>
  }

  return (
    <main className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold gradient-heading">Theme Test Page</h1>
          <p className="text-muted-foreground">This page helps debug theme switching functionality</p>
        </div>

        <Card className="w-full border border-border/50 shadow-lg">
          <CardHeader className="border-b border-border/50 bg-muted/30 dark:bg-secondary/10">
            <CardTitle>Theme Debug Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-sm font-medium">Current theme:</p>
                <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                  <code className="text-sm">{theme || "undefined"}</code>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Resolved theme:</p>
                <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                  <code className="text-sm">{resolvedTheme || "undefined"}</code>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">System theme:</p>
                <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                  <code className="text-sm">{systemTheme || "undefined"}</code>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">HTML class:</p>
                <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                  <code className="text-sm">
                    {document.documentElement.classList.contains("dark") ? "dark" : "light"}
                  </code>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium">Theme controls:</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  onClick={() => setTheme("light")}
                  className={theme === "light" ? "border-primary" : ""}
                >
                  <Sun className="mr-2 h-4 w-4 text-amber-500" />
                  Light
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setTheme("dark")}
                  className={theme === "dark" ? "border-primary" : ""}
                >
                  <Moon className="mr-2 h-4 w-4 text-blue-400" />
                  Dark
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setTheme("system")}
                  className={theme === "system" ? "border-primary" : ""}
                >
                  <Monitor className="mr-2 h-4 w-4" />
                  System
                </Button>
                <ThemeToggle />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium">Theme test elements:</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-background border border-border rounded-md">
                  <p className="font-medium">Background</p>
                  <p className="text-sm text-muted-foreground">bg-background</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-md">
                  <p className="font-medium">Card</p>
                  <p className="text-sm text-muted-foreground">bg-card</p>
                </div>
                <div className="p-4 bg-primary text-primary-foreground border border-border rounded-md">
                  <p className="font-medium">Primary</p>
                  <p className="text-sm opacity-80">bg-primary</p>
                </div>
                <div className="p-4 bg-secondary text-secondary-foreground border border-border rounded-md">
                  <p className="font-medium">Secondary</p>
                  <p className="text-sm opacity-80">bg-secondary</p>
                </div>
                <div className="p-4 bg-muted text-muted-foreground border border-border rounded-md">
                  <p className="font-medium">Muted</p>
                  <p className="text-sm">bg-muted</p>
                </div>
                <div className="p-4 bg-accent text-accent-foreground border border-border rounded-md">
                  <p className="font-medium">Accent</p>
                  <p className="text-sm">bg-accent</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

