"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

export function ExperienceSection() {
  const t = useTranslations("experience")

  const experiences = [
    {
      position: t("job1.position"),
      company: t("job1.company"),
      period: t("job1.period"),
      description: t("job1.description"),
      responsibilities: [t("job1.responsibilities.0"), t("job1.responsibilities.1"), t("job1.responsibilities.2")],
    },
    {
      position: t("job2.position"),
      company: t("job2.company"),
      period: t("job2.period"),
      description: t("job2.description"),
      responsibilities: [t("job2.responsibilities.0"), t("job2.responsibilities.1"), t("job2.responsibilities.2")],
    },
    {
      position: t("job3.position"),
      company: t("job3.company"),
      period: t("job3.period"),
      description: t("job3.description"),
      responsibilities: [t("job3.responsibilities.0"), t("job3.responsibilities.1"), t("job3.responsibilities.2")],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/30">
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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:translate-x-0 translate-x-6"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary transform md:translate-x-[-6px] translate-x-[-6px]"></div>

                {/* Content */}
                <div className="md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right">
                  <div className="bg-card p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center mb-2 md:justify-end">
                      <Briefcase className="h-5 w-5 text-primary mr-2 md:order-2 md:ml-2 md:mr-0" />
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                    </div>
                    <div className="flex items-center mb-4 md:justify-end">
                      <Calendar className="h-4 w-4 text-muted-foreground mr-2 md:order-2 md:ml-2 md:mr-0" />
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <h4 className="font-medium mb-2">{exp.company}</h4>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-sm flex items-start md:justify-end">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 md:order-2 md:ml-2 md:mr-0"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

