import { Section } from "./Section";

type Skill = { name: string; level: number };

const groups: { title: string; items: Skill[] }[] = [
  {
    title: "Programming",
    items: [
      { name: "Java", level: 88 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 82 },
      { name: "C", level: 75 },
      { name: "HTML5 / CSS3", level: 92 },
    ],
  },
  {
    title: "Frameworks & AI/ML",
    items: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "TensorFlow / Keras", level: 78 },
      { name: "PyTorch", level: 70 },
      { name: "Flask", level: 75 },
      { name: "OpenCV", level: 72 },
    ],
  },
  {
    title: "Tools & Cloud",
    items: [
      { name: "Git / GitHub", level: 90 },
      { name: "REST APIs", level: 85 },
      { name: "Gemini API", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "AWS", level: 65 },
      { name: "Netlify", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Tech Stack" title="Tools & technologies">
      <p className="-mt-6 mb-12 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
        My toolkit is built on precision and reliability. I focus on crafting clean
        front-end experiences and shipping practical AI/ML projects end to end.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
        {groups.map((g) => (
          <div key={g.title} className="flex flex-col">
            <div className="flex items-center gap-3 mb-7">
              <span
                aria-hidden
                className="block h-px w-8 rounded-full"
                style={{ background: "var(--gradient-skill)" }}
              />
              <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-foreground/90">
                {g.title}
              </h3>
            </div>

            <ul className="flex flex-col gap-5">
              {g.items.map((s) => (
                <li key={s.name}>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{s.name}</span>
                    <span className="text-[11px] tabular-nums text-muted-foreground">
                      {s.level}%
                    </span>
                  </div>
                  <div className="relative h-1.5 w-full rounded-full bg-secondary/70 overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-700"
                      style={{
                        width: `${s.level}%`,
                        background: "var(--gradient-skill)",
                        boxShadow: "var(--shadow-skill)",
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
