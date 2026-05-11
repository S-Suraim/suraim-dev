import profile from "@/assets/profile.png";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center px-6 pt-28 pb-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 80% 20%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: text */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs text-muted-foreground tracking-wide">
              Available for opportunities
            </span>
          </div>

          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary mb-4">
            AI/ML & Frontend Developer
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-text)" }}
          >
            Shaik Md Suraim
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            I build AI-powered web applications with React.js, TensorFlow, and
            Generative AI APIs — blending responsive UI with practical
            intelligence.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-secondary/40 text-foreground px-6 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] -z-10 blur-2xl opacity-70"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 40%, transparent), transparent 70%)",
              }}
            />
            <div
              className="relative rounded-2xl p-[1px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklab, var(--primary) 60%, transparent), transparent 60%)",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              <img
                src={profile}
                alt="Shaik Md Suraim"
                className="block w-64 h-80 sm:w-80 sm:h-[26rem] lg:w-full lg:h-[32rem] object-cover rounded-2xl border border-border"
              />
            </div>
            {/* corner accents */}
            <span aria-hidden className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary/60 rounded-tl-lg" />
            <span aria-hidden className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary/60 rounded-br-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
