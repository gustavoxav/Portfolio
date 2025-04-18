"use client";

import dynamic from "next/dynamic";

// Import static components or components that don't use language context
// Use dynamic imports with SSR disabled for components that use language context
const Hero = dynamic(() => import("@/components/hero"), { ssr: false });
const About = dynamic(() => import("@/components/about"), { ssr: false });
const Projects = dynamic(() => import("@/components/projects"), { ssr: false });
const Skills = dynamic(() => import("@/components/skills"), { ssr: false });
const Contact = dynamic(() => import("@/components/contact"), { ssr: false });
const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false });

export default function Home() {

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
