"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "pt"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const defaultLanguage: Language = "en"

const translations = {
  en: {
    // Navbar
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.theme": "Theme",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.role": "I'm a full-stack developer specializing in building exceptional digital experiences.",
    "hero.cta.work": "View My Work",
    "hero.cta.contact": "Contact Me",

    // About
    "about.title": "About Me",
    "about.p1":
      "I'm a passionate developer with experience in building web applications using modern technologies. I specialize in creating responsive, accessible, and performant web experiences.",
    "about.p2":
      "With a background in both frontend and backend development, I enjoy working on all aspects of web development, from designing user interfaces to implementing server-side logic and database structures.",
    "about.cv": "Download CV",
    "about.skills": "My Skills",

    // Projects
    "projects.title": "My Projects",
    "projects.subtitle": "Check out some of my recent work",
    "projects.code": "Code",
    "projects.demo": "Demo",
    "projects.1.title": "Project One",
    "projects.1.description": "A web application built with Next.js and Tailwind CSS.",
    "projects.2.title": "Project Two",
    "projects.2.description": "An e-commerce platform with payment integration.",
    "projects.3.title": "Project Three",
    "projects.3.description": "A mobile-first responsive dashboard.",

    // Skills
    "skills.title": "My Skills",
    "skills.subtitle": "Technologies I've been working with",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Feel free to contact me for any work or suggestions",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",

    // Theme
    "theme.title": "Theme Settings",
    "theme.subtitle": "Customize the appearance of the application",
    "theme.color": "Color Theme",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",
    "theme.follow": "Follow system theme",
    "theme.follow.description": "Automatically switch between light and dark themes based on your system preferences",
    "theme.current": "Current theme",

    // Language
    language: "Language",
    "language.en": "English",
    "language.pt": "Portuguese",
  },
  pt: {
    // Navbar
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contato",
    "nav.theme": "Tema",

    // Hero
    "hero.greeting": "Olá, eu sou",
    "hero.role": "Sou um desenvolvedor full-stack especializado em criar experiências digitais excepcionais.",
    "hero.cta.work": "Ver Meu Trabalho",
    "hero.cta.contact": "Contate-me",

    // About
    "about.title": "Sobre Mim",
    "about.p1":
      "Sou um desenvolvedor apaixonado com experiência na construção de aplicações web usando tecnologias modernas. Especializo-me em criar experiências web responsivas, acessíveis e de alto desempenho.",
    "about.p2":
      "Com experiência tanto em desenvolvimento frontend quanto backend, gosto de trabalhar em todos os aspectos do desenvolvimento web, desde o design de interfaces de usuário até a implementação de lógica do lado do servidor e estruturas de banco de dados.",
    "about.cv": "Baixar CV",
    "about.skills": "Minhas Habilidades",

    // Projects
    "projects.title": "Meus Projetos",
    "projects.subtitle": "Confira alguns dos meus trabalhos recentes",
    "projects.code": "Código",
    "projects.demo": "Demo",
    "projects.1.title": "Projeto Um",
    "projects.1.description": "Uma aplicação web construída com Next.js e Tailwind CSS.",
    "projects.2.title": "Projeto Dois",
    "projects.2.description": "Uma plataforma de e-commerce com integração de pagamento.",
    "projects.3.title": "Projeto Três",
    "projects.3.description": "Um painel responsivo com prioridade para dispositivos móveis.",

    // Skills
    "skills.title": "Minhas Habilidades",
    "skills.subtitle": "Tecnologias com as quais tenho trabalhado",

    // Contact
    "contact.title": "Entre em Contato",
    "contact.subtitle": "Sinta-se à vontade para me contatar para qualquer trabalho ou sugestão",
    "contact.email": "Email",
    "contact.phone": "Telefone",
    "contact.location": "Localização",
    "contact.form.name": "Nome",
    "contact.form.email": "Email",
    "contact.form.subject": "Assunto",
    "contact.form.message": "Mensagem",
    "contact.form.send": "Enviar Mensagem",

    // Theme
    "theme.title": "Configurações de Tema",
    "theme.subtitle": "Personalize a aparência da aplicação",
    "theme.color": "Tema de Cores",
    "theme.light": "Claro",
    "theme.dark": "Escuro",
    "theme.system": "Sistema",
    "theme.follow": "Seguir tema do sistema",
    "theme.follow.description":
      "Alternar automaticamente entre temas claro e escuro com base nas preferências do seu sistema",
    "theme.current": "Tema atual",

    // Language
    language: "Idioma",
    "language.en": "Inglês",
    "language.pt": "Português",
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const [mounted, setMounted] = useState(false)

  // Load saved language preference from localStorage
  useEffect(() => {
    setMounted(true)
    try {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "pt")) {
        setLanguageState(savedLanguage)
      } else {
        // Default to browser language if available and supported
        const browserLanguage = navigator.language.split("-")[0]
        if (browserLanguage === "pt") {
          setLanguageState("pt")
        }
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
    }
  }, [])

  const setLanguage = (language: Language) => {
    setLanguageState(language)
    try {
      localStorage.setItem("language", language)
    } catch (error) {
      console.error("Error writing to localStorage:", error)
    }
  }

  // Translation function
  const t = (key: string): string => {
    if (!mounted) return key

    const currentTranslations = translations[language] || translations[defaultLanguage]
    return currentTranslations[key as keyof typeof currentTranslations] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}

