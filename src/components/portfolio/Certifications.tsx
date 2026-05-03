import { Section } from "./Section";
import { Award, ArrowUpRight } from "lucide-react";

const items = [
  {
    title: "AI Tools Workshop",
    subtitle: "United Latino Students Association",
    year: "2025",
  },
  {
    title: "QGIS Certification",
    subtitle: "Spatial Data Analysis",
    year: "",
  },
  {
    title: "Renewable Energy Technology Fundamentals",
    subtitle: "University of Colorado Boulder",
    year: "2025",
  },
  {
    title: "AWS Student Community Day",
    subtitle: "Participation · Tech Event",
    year: "",
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certifications & achievements"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((c) => (
          <article
            key={c.title}
            className="group relative flex flex-col rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:scale-[1.01]"
            style={{ boxShadow: "var(--shadow-card)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "var(--shadow-card-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "var(--shadow-card)")
            }
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 text-primary border border-primary/20 mb-5">
              <Award size={18} strokeWidth={2} />
            </span>
            <h3 className="text-base font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
              {c.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {c.subtitle}
            </p>
            {c.year && (
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70 mb-5">
                {c.year}
              </p>
            )}
            <a
              href="#"
              className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-80 hover:opacity-100 transition-opacity"
            >
              View Certificate
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
