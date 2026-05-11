import { Section } from "./Section";

const items = [
  { label: "Email", value: "balusuraim123@gmail.com", href: "mailto:balusuraim123@gmail.com" },
  { label: "Phone", value: "+91 90320 16038", href: "tel:+919032016038" },
  { label: "LinkedIn", value: "in/s-md-suraim", href: "https://www.linkedin.com/in/s-md-suraim-053891237/" },
  { label: "GitHub", value: "@S-Suraim", href: "https://github.com/S-Suraim" },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's get in touch">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-3">
          {items.map((i) => (
            <a
              key={i.label}
              href={i.href}
              target={i.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-primary/50"
            >
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {i.label}
              </span>
              <span className="text-sm text-foreground">{i.value}</span>
            </a>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
            const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
            window.location.href = `mailto:balusuraim123@gmail.com?subject=${subject}&body=${body}`;
          }}
          className="rounded-xl border border-border bg-card p-6 space-y-4"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              required
              name="name"
              placeholder="Your name"
              className="w-full rounded-md bg-background border border-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full rounded-md bg-background border border-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Your message"
            className="w-full rounded-md bg-background border border-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
          />
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Send message
          </button>
        </form>
      </div>
    </Section>
  );
}
