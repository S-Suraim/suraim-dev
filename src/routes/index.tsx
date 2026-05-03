import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shaik Md Suraim — Frontend Developer & AI/ML Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Shaik Md Suraim — Frontend Developer and AI/ML enthusiast building clean web experiences and real-world AI projects.",
      },
      { property: "og:title", content: "Shaik Md Suraim — Developer Portfolio" },
      {
        property: "og:description",
        content: "Frontend Developer · AI/ML Enthusiast. Selected projects, skills, and contact.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
