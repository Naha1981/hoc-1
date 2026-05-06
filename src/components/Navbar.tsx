import { useEffect, useState } from "react";
import logo from "@/assets/hoc-logo.jpg";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#capabilities", label: "Capabilities" },
    { href: "#product", label: "Product" },
    { href: "#approach", label: "Approach" },
    { href: "#founder", label: "Founder" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-x">
        <nav
          className={`mx-auto flex items-center justify-between rounded-full border border-border bg-background/80 backdrop-blur-xl px-3 pr-5 transition-all ${
            scrolled ? "shadow-[var(--shadow-card)] py-2" : "py-2.5"
          }`}
        >
          <a href="#top" className="flex items-center gap-3 group">
            <span className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-foreground ring-2 ring-foreground/10">
              <img src={logo} alt="Hands On Creatives" className="h-11 w-11 rounded-full object-cover mix-blend-screen invert" />
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">Hands On Creatives</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">SASL-led · Deaf-focused</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Request a Review
            <span aria-hidden>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
