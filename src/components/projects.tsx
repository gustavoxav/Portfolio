"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      titleKey: "projects.1.title",
      descriptionKey: "projects.1.description",
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      demo: "#",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      titleKey: "projects.2.title",
      descriptionKey: "projects.2.description",
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      demo: "#",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      titleKey: "projects.3.title",
      descriptionKey: "projects.3.description",
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      demo: "#",
      tags: ["React", "Chart.js", "Firebase"],
    },
  ]

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl gradient-heading">{t("projects.title")}</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("projects.subtitle")}</p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-border/50 card-hover">
              <div className="aspect-video relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={t(project.titleKey)}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex space-x-2">
                    <Button variant="secondary" size="sm" className="bg-background/80 backdrop-blur-sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" />
                        {t("projects.code")}
                      </a>
                    </Button>
                    <Button size="sm" className="bg-primary/80 backdrop-blur-sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        {t("projects.demo")}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{t(project.titleKey)}</CardTitle>
                <CardDescription className="text-muted-foreground">{t(project.descriptionKey)}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

