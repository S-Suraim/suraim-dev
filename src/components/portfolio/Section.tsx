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
    <section id={id} className="py-24 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
