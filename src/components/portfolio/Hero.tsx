import profile from "@/assets/profile.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* subtle background glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(600px 300px at 50% 0%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 70%)",
        }}
      />

      <div className="max-w-3xl w-full flex flex-col items-center text-center">
        <div
          className="relative mb-8 rounded-full p-[2px]"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--primary) 60%, transparent), transparent)",
            boxShadow: "var(--shadow-glow)",
          }}
        >
          <img
            src={profile}
            alt="Shaik Md Suraim"
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border border-border"
          />
        </div>

        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
          Frontend Developer · AI/ML Enthusiast
        </p>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-foreground">
          Shaik Md Suraim
        </h1>
        <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
          Building clean web experiences with a passion for AI and real-world problem solving.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-border bg-secondary/40 text-foreground px-5 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
