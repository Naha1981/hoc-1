import { useEffect, useRef, useState } from "react";
import logo from "@/assets/hoc-logo.jpg";

const links = [
  { href: "/", label: "Home", anchor: false },
  { href: "/services", label: "What We Do", anchor: false },
  { href: "/#about", label: "About Founder", anchor: true },
  { href: "/#about", label: "Meet the Team", anchor: true },
  { href: "/#contact", label: "Contact Us", anchor: true },
];

function smoothScrollTo(hash: string) {
  const el = document.querySelector(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  function handleLinkClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    anchor: boolean
  ) {
    setMenuOpen(false);
    if (!anchor) return;
    const hash = "#" + href.split("#")[1];
    if (window.location.pathname === "/") {
      e.preventDefault();
      smoothScrollTo(hash);
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-x">
        <div className="relative" ref={menuRef}>
          {/* ── Main pill ── */}
          <nav
            className={`flex items-center justify-between rounded-full border border-border bg-background/80 backdrop-blur-xl px-3 pr-4 transition-all ${
              scrolled ? "shadow-[var(--shadow-card)] py-2" : "py-2.5"
            }`}
          >
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <span className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#FFD600] ring-2 ring-[#FFD600]/40">
                <img
                  src={logo}
                  alt="Hands On Creatives"
                  className="h-11 w-11 rounded-full object-cover mix-blend-multiply"
                />
              </span>
              <span className="hidden sm:flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-tight">Hands On Creatives</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  SASL-LED STRATEGY CONSULTING
                </span>
              </span>
            </a>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => handleLinkClick(e, l.href, l.anchor)}
                    className="hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMenuOpen((o) => !o)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="md:hidden flex flex-col items-center justify-center h-10 w-10 rounded-full border border-border bg-background/60 gap-[5px] transition-colors hover:bg-accent/20"
              >
                <span
                  className={`block h-[1.5px] w-5 bg-foreground rounded-full transition-all duration-300 ${
                    menuOpen ? "translate-y-[6.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-foreground rounded-full transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-foreground rounded-full transition-all duration-300 ${
                    menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                  }`}
                />
              </button>

              {/* Get a Quote — desktop only */}
              <a
                href="/#contact"
                onClick={(e) => handleLinkClick(e, "/#contact", true)}
                className="hidden md:inline-flex group relative items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold tracking-wide overflow-hidden hover:scale-[1.03] hover:shadow-[var(--shadow-lift)] active:scale-[0.97] transition-all"
              >
                <span className="absolute inset-0 shine opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">Get a Quote</span>
                <span aria-hidden className="relative transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </nav>

          {/* ── Mobile dropdown ── */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-[var(--shadow-elegant)] overflow-hidden transition-all duration-300 origin-top ${
              menuOpen
                ? "opacity-100 scale-y-100 pointer-events-auto"
                : "opacity-0 scale-y-95 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col divide-y divide-border/60">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => handleLinkClick(e, l.href, l.anchor)}
                    className="flex items-center justify-between px-5 py-4 text-sm font-medium text-foreground hover:bg-accent/10 transition-colors"
                  >
                    <span>{l.label}</span>
                    <span className="text-muted-foreground">→</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="p-4 border-t border-border/60">
              <a
                href="/#contact"
                onClick={(e) => handleLinkClick(e, "/#contact", true)}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-foreground text-background py-3.5 text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
              >
                Get a Quote →
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
