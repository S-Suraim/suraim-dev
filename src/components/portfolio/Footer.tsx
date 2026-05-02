export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Shaik Md Suraim. All rights reserved.</p>
        <p>Built with React & Tailwind.</p>
      </div>
    </footer>
  );
}
