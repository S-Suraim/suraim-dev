import { Section } from "./Section";

const projects = [
  {
    title: "HACK2CARE — AI First Responder Assistant",
    description:
      "AI-guided emergency assistant for road accidents with first-aid instructions and location sharing. Designed for panic-friendly usability and real-world impact.",
    tech: ["AI", "UX Design", "Concept System"],
  },
  {
    title: "Image Classification Model",
    description:
      "CNN-based classifier for 35+ fruit and vegetable categories. Built with TensorFlow and deployed using Streamlit.",
    tech: ["TensorFlow", "Keras", "CNN", "Streamlit"],
  },
  {
    title: "Spotify Clone",
    description:
      "Responsive web UI inspired by Spotify with clean layout and media controls.",
    tech: ["HTML", "CSS", "Bootstrap"],
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:scale-[1.01]"
            style={{ boxShadow: "var(--shadow-card)" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
          >
            <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {p.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
