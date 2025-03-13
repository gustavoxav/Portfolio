"use client"

import { type ReactNode, useEffect, useState } from "react"
import { LanguageProvider } from "@/contexts/language-context"

export function ClientProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  // Ensure hydration is complete
  useEffect(() => {
    setMounted(true)
  }, [])

  return <LanguageProvider>{children}</LanguageProvider>
}

