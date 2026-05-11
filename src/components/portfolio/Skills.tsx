import { Section } from "./Section";
import { Code2, BrainCircuit, Wrench, Cloud } from "lucide-react";

const groups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Java", "Python", "JavaScript", "TypeScript", "C", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    icon: BrainCircuit,
    items: [
      "React.js",
      "TensorFlow",
      "PyTorch",
      "Flask",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "OpenCV",
      "Matplotlib",
      "Tailwind CSS",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    items: ["Git", "GitHub", "REST APIs", "VS Code", "Gemini API", "OpenStreetMap API"],
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    items: ["AWS", "Netlify"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools & technologies">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map((g) => {
          const Icon = g.icon;
          return (
            <div
              key={g.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 text-primary border border-primary/20">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <h3 className="text-sm font-medium text-foreground">{g.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2 mt-auto">
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
          );
        })}
      </div>
    </Section>
  );
}
