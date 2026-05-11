import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Hack2Care — AI Emergency Response Platform",
    description:
      "AI-powered web app providing real-time first-aid guidance during road accidents via Gemini API. Multilingual UI, geolocation with OpenStreetMap for nearby hospitals, decision-based patient assessment, and animated CPR guidance.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Gemini API"],
    href: "#",
  },
  {
    title: "Fruit & Vegetable Image Classification",
    description:
      "CNN-based classifier built with TensorFlow and Keras, covering dataset preprocessing, model training, and a Streamlit interface for real-time predictions.",
    tech: ["TensorFlow", "Keras", "Streamlit", "OpenCV"],
    href: "#",
  },
  {
    title: "Spotify Web Player Clone",
    description:
      "Responsive Spotify-inspired web interface built with HTML5 and CSS3, applying modern UI design principles and clean layout structure.",
    tech: ["HTML5", "CSS3"],
    href: "#",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative flex flex-col rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:scale-[1.01]"
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
            <ul className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border"
                >
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={p.href}
              className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-80 hover:opacity-100 transition-opacity"
            >
              View Details
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
