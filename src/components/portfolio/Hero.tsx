import profile from "@/assets/profile.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(700px 360px at 50% 0%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 70%)",
        }}
      />

      <div className="max-w-3xl w-full flex flex-col items-center text-center">
        <div
          className="relative mb-10 rounded-full p-[2px]"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--primary) 70%, transparent), transparent 70%)",
            boxShadow: "var(--shadow-glow)",
          }}
        >
          <img
            src={profile}
            alt="Shaik Md Suraim"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border border-border"
          />
        </div>

        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary mb-5">
          Frontend Developer · AI/ML Enthusiast
        </p>
        <h1
          className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05] bg-clip-text text-transparent"
          style={{ backgroundImage: "var(--gradient-text)" }}
        >
          Shaik Md Suraim
        </h1>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
          Building clean web experiences with a passion for AI and real-world problem solving.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-border bg-secondary/40 text-foreground px-6 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
