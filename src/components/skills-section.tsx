"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Code, Database, Layout, Smartphone, Terminal, GitBranch } from "lucide-react"

export function SkillsSection() {
  const t = useTranslations("skills")

  const skills = [
    {
      category: t("frontend"),
      icon: <Layout className="h-8 w-8 text-primary" />,
      items: ["React.js", "Next.js", "TypeScript", "HTML5/CSS3", "Tailwind CSS", "Redux"],
    },
    {
      category: t("mobile"),
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      items: ["React Native", "Expo", "Android", "iOS"],
    },
    {
      category: t("backend"),
      icon: <Database className="h-8 w-8 text-primary" />,
      items: ["Node.js", "Express", "REST API", "GraphQL"],
    },
    {
      category: t("languages"),
      icon: <Code className="h-8 w-8 text-primary" />,
      items: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
    },
    {
      category: t("tools"),
      icon: <Terminal className="h-8 w-8 text-primary" />,
      items: ["VS Code", "Figma", "Webpack", "npm/yarn", "Jest"],
    },
    {
      category: t("versionControl"),
      icon: <GitBranch className="h-8 w-8 text-primary" />,
      items: ["Git", "GitHub", "GitLab", "CI/CD"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">{t("description")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-sm border"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-bold ml-3">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

