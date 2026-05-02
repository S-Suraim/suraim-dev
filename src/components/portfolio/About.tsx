import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
        Computer Science undergraduate with a strong interest in frontend development and AI/ML.
        Experienced in building responsive web applications and working on real-world AI projects
        including image classification and hackathon-based solutions. Focused on continuous learning
        and practical implementation.
      </p>
    </Section>
  );
}
