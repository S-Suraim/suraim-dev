import { Section } from "./Section";

const groups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "Bootstrap"] },
  { title: "AI / ML", items: ["TensorFlow", "Keras", "CNNs", "NumPy"] },
  { title: "Tools", items: ["GitHub", "Streamlit"] },
  { title: "Concepts", items: ["ML Fundamentals", "Model Training", "Deployment"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools & technologies">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="text-sm font-medium text-foreground mb-4">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
