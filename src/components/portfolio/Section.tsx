import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 px-6 scroll-mt-20">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--primary) 35%, transparent), transparent)",
        }}
      />
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              {title}
            </h2>
          </div>
          <div aria-hidden className="hidden sm:block flex-1 h-px bg-border ml-6 mb-2" />
        </div>
        {children}
      </div>
    </section>
  );
}
