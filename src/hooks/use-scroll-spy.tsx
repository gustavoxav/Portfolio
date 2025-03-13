"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      // Find all sections that are in the viewport
      const visibleSections = sectionIds
        .map((id) => {
          const element = document.getElementById(id)
          if (!element) return null

          const rect = element.getBoundingClientRect()
          const isVisible = rect.top <= offset && rect.bottom >= offset

          return { id, top: rect.top, isVisible }
        })
        .filter((section) => section && section.isVisible)
        .sort((a, b) => a!.top - b!.top)

      // Set the active section to the first visible section
      const currentSection = visibleSections[0]
      if (currentSection) {
        setActiveSection(currentSection.id)
      } else if (window.scrollY <= 10) {
        // If at the top of the page, clear active section
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sectionIds, offset])

  return activeSection
}

