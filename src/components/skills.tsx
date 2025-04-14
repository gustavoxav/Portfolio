"use client";

import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("skills");

  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "TypeScript", level: 65 },
  ];

  return (
    <section
      id="skills"
      className="section-padding bg-gradient-to-b from-muted/30 to-background dark:from-secondary/10 dark:to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl gradient-heading">
              {t("title")}
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t("subtitle")}
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="space-y-3 bg-card p-6 rounded-lg shadow-md border border-border/50 card-hover">
              <div className="flex justify-between items-center">
                <span className="font-medium text-lg">{skill.name}</span>
                <span className="text-primary font-semibold">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
