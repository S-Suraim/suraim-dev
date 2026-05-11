import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
        AI/ML & Frontend Developer experienced in building AI-powered web
        applications using React.js, TensorFlow, and Generative AI APIs.
        Skilled in responsive UI development, API integration, and intelligent
        healthcare-focused solutions. Currently pursuing a B.Tech in Computer
        Science at Mohan Babu University (CGPA 8.8/10).
      </p>
    </Section>
  );
}
