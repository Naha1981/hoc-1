import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-signing.jpg";
import founderImg from "@/assets/mmatlou.jpg";
import classroomImg from "@/assets/mmatlou-child.png";
import teamImg from "@/assets/team-meeting.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Hands On Creatives — SASL-led strategy consultancy" },
      {
        name: "description",
        content:
          "We design systems that integrate South African Sign Language into institutions — at scale. Inclusion that works. Strategy that grows.",
      },
      { property: "og:title", content: "Hands On Creatives — SASL-led strategy consultancy" },
      {
        property: "og:description",
        content:
          "Inclusion that works. Strategy that grows. SASL that transforms. We build inclusion into infrastructure.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
  }),
});

const partners = [
  "MTN", "SAMA Awards", "MoonSport", "Castle Milk Stout",
  "Lil-lets SA", "Darling Films", "Nostalgia Productions",
  "DeafTouch", "SMU", "University of the Witwatersrand",
];

const valueCards = [
  {
    k: "01",
    title: "Market Access",
    body: "Reach an underserved, high-value audience that competitors structurally cannot.",
  },
  {
    k: "02",
    title: "Innovation",
    body: "Deaf-led thinking reshapes how products, platforms, and systems are designed.",
  },
  {
    k: "03",
    title: "Growth",
    body: "Inclusion, when engineered correctly, drives measurable institutional outcomes.",
  },
];

const capabilities = [
  { title: "Strategic Inclusion Design", body: "Align inclusion with business strategy. Identify system gaps. Define measurable outcomes." },
  { title: "SASL Integration Systems", body: "Embed SASL across internal systems, customer platforms, and digital environments." },
  { title: "Institutional Consulting", body: "Restructure inclusion at leadership level — policy, frameworks, long-term adoption." },
  { title: "Creative System Development", body: "Build the tools that enable inclusion: content systems, interactive platforms, AI-powered access." },
];

const steps = [
  { n: "01", t: "Diagnose", d: "We audit current systems and identify where inclusion fails." },
  { n: "02", t: "Design", d: "We architect how SASL integrates into your organisation." },
  { n: "03", t: "Integrate", d: "We implement across platforms, teams, and workflows." },
  { n: "04", t: "Scale", d: "We optimise, measure, and expand impact." },
];

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("sending");
        const fd = new FormData(e.currentTarget);
        const name = String(fd.get("name") || "");
        const email = String(fd.get("email") || "");
        const org = String(fd.get("org") || "");
        const message = String(fd.get("message") || "");
        const subject = encodeURIComponent(`Strategy enquiry — ${org || name}`);
        const body = encodeURIComponent(`Name: ${name}\nOrganisation: ${org}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:info@hoc.co.za?subject=${subject}&body=${body}`;
        setTimeout(() => setStatus("sent"), 400);
      }}
      className="relative rounded-2xl bg-background text-foreground p-6 md:p-8 ring-1 ring-background/10 shadow-[var(--shadow-lift)]"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Name</span>
          <input required name="name" type="text" className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Organisation</span>
          <input name="org" type="text" className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
        </label>
      </div>
      <label className="block mt-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Work email</span>
        <input required name="email" type="email" className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
      </label>
      <label className="block mt-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">What you're trying to solve</span>
        <textarea required name="message" rows={4} className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold tracking-wide hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60"
      >
        {status === "sent" ? "Opening your email…" : "Request a Strategy Call"}
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
      </button>
      <p className="mt-3 text-[11px] text-muted-foreground text-center">
        Or email <a className="underline" href="mailto:info@hoc.co.za">info@hoc.co.za</a> directly.
      </p>
    </form>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="absolute inset-0 gradient-mesh pointer-events-none opacity-60" />
        <div className="blob bg-accent/40 h-[420px] w-[420px] -top-32 -left-20" />
        <div className="blob bg-accent/30 h-[360px] w-[360px] top-40 -right-24" style={{ animationDelay: "-4s" }} />

        <div className="container-x relative">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-ring" />
                SASL-led · Deaf-focused
              </span>
            </Reveal>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,5.6vw,4.6rem)] font-semibold tracking-tight leading-[1.02] text-balance">
              <Reveal delay={120}><span className="block">Inclusion that works.</span></Reveal>
              <Reveal delay={260}><span className="block">Strategy that grows.</span></Reveal>
              <Reveal delay={400}>
                <span className="block">
                  <span className="accent-underline">SASL</span> that transforms.
                </span>
              </Reveal>
            </h1>
            <Reveal delay={580}>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
                A Deaf-led consultancy designing the systems that integrate South African Sign Language into education, corporate, and public institutions — at scale.
              </p>
            </Reveal>
            <Reveal delay={720}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-sm font-semibold tracking-wide overflow-hidden transition-all hover:scale-[1.03] hover:shadow-[var(--shadow-lift)] active:scale-[0.98]">
                  <span className="absolute inset-0 shine opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative">Book a Strategy Call</span>
                  <span className="relative transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a href="#results" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 backdrop-blur px-7 py-4 text-sm font-medium hover:border-foreground hover:bg-accent/20 transition-all active:scale-[0.98]">
                  See the Results
                </a>
              </div>
            </Reveal>
          </div>

          {/* Prominent panoramic founder + classroom image */}
          <Reveal delay={500}>
            <div className="mt-14 relative">
              <div className="absolute -inset-4 rounded-[2.5rem] border border-dashed border-accent/40 spin-slow pointer-events-none" />
              <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-border shadow-[var(--shadow-lift)] tilt-3d bg-surface">
                <img
                  src={heroImg}
                  alt="Mmatlou Moloto, Founder of Hands On Creatives, signing SASL with four young learners in a classroom"
                  className="hero-img block w-full h-auto object-cover"
                  width={1568}
                  height={624}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                {/* Contrast overlay — intensity scales by breakpoint for consistent legibility */}
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-foreground/55 via-foreground/15 to-transparent md:from-foreground/40 md:via-foreground/8 lg:from-foreground/30 lg:via-foreground/5" />
                <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-foreground/55 to-transparent md:h-1/2 md:from-foreground/40 lg:from-foreground/35" />
                <div className="hidden md:block absolute bottom-6 left-6 rounded-2xl bg-background/85 backdrop-blur-md border border-border px-5 py-4 shadow-[var(--shadow-card)] max-w-xs">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-ring" />
                    In Practice
                  </div>
                  <div className="mt-1 text-base font-semibold tracking-tight">Hands lead. Systems follow.</div>
                </div>
                <div className="hidden md:block absolute bottom-6 right-6 rounded-2xl bg-foreground text-background px-5 py-4 shadow-[var(--shadow-lift)]">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-accent">Reach</div>
                  <div className="text-base font-semibold">+3.7M Deaf South Africans</div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs text-muted-foreground">
                <div>
                  <div className="text-2xl font-semibold text-foreground">15+</div>
                  <div className="uppercase tracking-widest">years in the field</div>
                </div>
                <div className="hidden sm:block h-10 w-px bg-border" />
                <div>
                  <div className="text-2xl font-semibold text-foreground">10+</div>
                  <div className="uppercase tracking-widest">institutions served</div>
                </div>
                <div className="hidden sm:block h-10 w-px bg-border" />
                <div>
                  <div className="text-2xl font-semibold text-foreground">4</div>
                  <div className="uppercase tracking-widest">core service pillars</div>
                </div>
                <div className="hidden sm:block h-10 w-px bg-border" />
                <div>
                  <div className="text-2xl font-semibold text-foreground">1</div>
                  <div className="uppercase tracking-widest">AI access platform</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP — partner & client logo lockups */}
      <section aria-label="Selected partners and clients" className="border-y border-border bg-background">
        <div className="container-x py-10">
          <Reveal>
            <div className="text-center md:text-left text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Trusted across corporate, academia, broadcast & the Deaf community
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {[
                {
                  name: "MTN", sub: "Telecoms",
                  logo: (
                    <span className="inline-flex items-center justify-center h-10 w-14 rounded-md bg-[#FFCC00] text-black font-black text-lg tracking-tight shadow-sm">MTN</span>
                  ),
                },
                {
                  name: "Castle Milk Stout", sub: "FMCG",
                  logo: (
                    <div className="flex flex-col items-center leading-none">
                      <svg viewBox="0 0 32 20" className="h-4 w-8 text-[#7a1f1f]" fill="currentColor" aria-hidden="true">
                        <path d="M2 18h28v2H2zM4 8h2V4h3v4h3V4h3v4h3V4h3v4h3V4h3v4h2v8H4z"/>
                      </svg>
                      <span className="font-serif font-bold text-[13px] tracking-wide text-[#1a1a1a] mt-0.5">CASTLE</span>
                      <span className="text-[8px] tracking-[0.25em] text-[#7a1f1f] font-semibold">MILK STOUT</span>
                    </div>
                  ),
                },
                {
                  name: "Lil-lets SA", sub: "Consumer",
                  logo: (
                    <span className="font-display font-extrabold italic text-2xl text-[#E5006D] lowercase tracking-tight">lil-lets</span>
                  ),
                },
                {
                  name: "Sefako Makgatho", sub: "University",
                  logo: (
                    <div className="flex flex-col items-center leading-tight">
                      <span className="font-serif font-extrabold text-2xl text-[#003F87] tracking-wider">SMU</span>
                      <span className="text-[7px] tracking-[0.15em] text-[#003F87] font-semibold text-center">SEFAKO MAKGATHO</span>
                    </div>
                  ),
                },
                {
                  name: "DeafTouch", sub: "Community",
                  logo: (
                    <div className="flex items-center gap-1.5">
                      <span className="text-2xl" aria-hidden="true">🤟</span>
                      <div className="flex flex-col leading-none items-start">
                        <span className="font-display font-bold text-sm text-foreground">DeafTouch</span>
                        <span className="text-[7px] tracking-[0.2em] text-muted-foreground font-semibold mt-0.5">COMMUNITY</span>
                      </div>
                    </div>
                  ),
                },
                {
                  name: "SAMA Awards", sub: "Music",
                  logo: (
                    <div className="flex flex-col items-center leading-none">
                      <span className="font-serif font-bold text-2xl text-[#B8893A] tracking-wide">SAMA</span>
                      <span className="text-[8px] tracking-[0.3em] text-[#B8893A] font-semibold mt-0.5">AWARDS</span>
                    </div>
                  ),
                },
                {
                  name: "MoonSport", sub: "Broadcast",
                  logo: (
                    <div className="flex items-center gap-1.5">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#F5C518]" fill="currentColor" aria-hidden="true">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                      </svg>
                      <div className="flex flex-col leading-none items-start">
                        <span className="font-display font-bold text-sm text-[#0a2540]">MoonSport</span>
                        <span className="text-[7px] tracking-[0.2em] text-muted-foreground font-semibold mt-0.5">BROADCAST</span>
                      </div>
                    </div>
                  ),
                },
              ].map((p) => (
                <li
                  key={p.name}
                  className="group relative bg-card hover:bg-background transition-colors min-h-32 flex flex-col items-center justify-center gap-2 px-3 py-4 text-center"
                  aria-label={p.name}
                  title={p.name}
                >
                  <div className="flex items-center justify-center h-12 w-full">
                    {p.logo}
                  </div>
                  <span className="font-display text-sm md:text-[15px] font-medium tracking-tight text-foreground/90 group-hover:text-foreground transition-colors leading-tight">
                    {p.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                    {p.sub}
                  </span>
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 h-px w-6 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* POSITIONING STRIP */}
      <section className="border-y border-border bg-surface">
        <div className="container-x py-20">
          <Reveal>
            <p className="font-display text-2xl md:text-4xl leading-snug max-w-4xl tracking-tight">
              Most organisations approach inclusion as <span className="text-muted-foreground">visibility</span>. That's why it <span className="accent-underline font-semibold">fails</span>. Inclusion is not messaging. It's <span className="text-accent font-semibold">infrastructure</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="container-x py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-accent">The Problem</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight">Current inclusion models are broken.</h2>
              <p className="mt-6 text-muted-foreground max-w-md">Compliance without impact. Visibility without access. Effort without return.</p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {[
                "Sit outside core business systems",
                "Fail to reach Deaf audiences effectively",
                "Deliver no measurable return on investment",
                "Mistake awareness for access",
              ].map((b, i) => (
                <Reveal key={b} delay={i * 100}>
                  <li className="flex items-start gap-6 py-6">
                    <span className="text-sm tabular-nums text-muted-foreground pt-1 w-10">0{i + 1}</span>
                    <span className="text-xl md:text-2xl font-medium tracking-tight">{b}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal>
              <p className="mt-8 text-lg text-muted-foreground">The result? <span className="text-foreground font-medium">Missed markets. Limited innovation. Compliance without impact.</span></p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-foreground text-background">
        <div className="container-x py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent">The Solution</div>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight">We redesign how inclusion works.</h2>
                <p className="mt-6 text-background/70 max-w-lg">Hands On Creatives integrates SASL into the operating layer of your organisation — not as an add-on, as a core function.</p>
                <ul className="mt-10 space-y-4">
                  {[
                    "Communication systems",
                    "Customer experience",
                    "Institutional frameworks",
                  ].map((x) => (
                    <li key={x} className="group flex items-center gap-4 rounded-xl border border-background/10 px-5 py-4 hover:border-accent hover:bg-background/5 transition-all hover:translate-x-1">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-lg">{x}</span>
                      <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-background/60">→</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="relative aspect-square rounded-[2rem] overflow-hidden ring-1 ring-background/15 bg-background">
                <img src={teamImg} alt="Team collaboration with SASL integration" className="h-full w-full object-cover" loading="lazy" width={1600} height={1200} />
                <div className="absolute top-5 left-5 rounded-full bg-background text-foreground px-3 py-1 text-xs uppercase tracking-widest">System view</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="container-x py-28">
        <div className="max-w-2xl">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Why this matters</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight">Executives don't invest in awareness. They invest in advantage.</h2>
          </Reveal>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {valueCards.map((c, i) => (
            <Reveal key={c.k} delay={i * 120}>
              <article className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)] hover:border-accent/40">
                <div className="text-xs tabular-nums text-muted-foreground">{c.k}</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-4 text-muted-foreground">{c.body}</p>
                <div className="mt-10 inline-flex items-center gap-2 text-sm text-foreground/70 group-hover:text-accent transition-colors">
                  Outcome → measured
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="scroll-mt-24 bg-surface border-y border-border">
        <div className="container-x py-28">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <Reveal>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent">Capabilities</div>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">What we do.</h2>
              </div>
            </Reveal>
            <Reveal>
              <p className="max-w-sm text-muted-foreground">Everything we build is designed for scale, embedded in operations, and measured against outcomes.</p>
            </Reveal>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="group rounded-2xl border border-border bg-card p-8 hover:border-foreground transition-all hover:shadow-[var(--shadow-card)]">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight">{c.title}</h3>
                    <span className="h-9 w-9 rounded-full bg-foreground text-background grid place-items-center text-sm transition-transform group-hover:rotate-45">↗</span>
                  </div>
                  <p className="mt-4 text-muted-foreground max-w-md">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS & CASE STUDIES */}
      <section id="results" className="scroll-mt-24 relative bg-background border-b border-border">
        <div className="container-x py-28">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <Reveal>
              <div className="max-w-2xl">
                <div className="text-xs uppercase tracking-[0.2em] text-accent">Measurable Results</div>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight">Outcomes, not optics.</h2>
                <p className="mt-6 text-muted-foreground text-lg">Selected work across corporate, academic, and national platforms — where SASL moved from afterthought to infrastructure.</p>
              </div>
            </Reveal>
          </div>

          {/* Metric strip */}
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {[
              { k: "+3.7M", l: "Deaf South Africans now reachable" },
              { k: "100%", l: "SASL coverage on integrated platforms" },
              { k: "4×", l: "Institutional pillars activated" },
              { k: "15 yrs", l: "Embedded in the Deaf community" },
            ].map((m, i) => (
              <Reveal key={m.k} delay={i * 100}>
                <div className="bg-background p-8 h-full">
                  <div className="font-display text-4xl md:text-5xl font-semibold tracking-tight">{m.k}</div>
                  <div className="mt-3 text-sm text-muted-foreground uppercase tracking-widest">{m.l}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Case studies */}
          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {[
              {
                tag: "Corporate · Brand",
                client: "MTN, Castle Milk Stout, Lil-lets SA",
                title: "From compliance to conversation.",
                before: "Brand campaigns reached Deaf audiences passively, if at all.",
                after: "SASL integrated into campaign architecture — live brand engagement with Deaf consumers.",
                metric: "+3.7M",
                metricLabel: "audience newly reachable",
              },
              {
                tag: "Academia · Health Sciences",
                client: "Sefako Makgatho Health Sciences University",
                title: "SASL embedded into curriculum.",
                before: "Accessibility treated as a student-services line item.",
                after: "Strategic partnership integrating SASL across teaching, clinical communication, and policy.",
                metric: "1 of 1",
                metricLabel: "Deaf-centred HSU partnership in SA",
              },
              {
                tag: "National Stage · Sport & Music",
                client: "MoonSport · Springbok Anthems · SAMA Awards",
                title: "SASL on the country's biggest stages.",
                before: "Sign language treated as a corner-of-screen overlay.",
                after: "Performance-grade SASL integration into national broadcasts and live productions.",
                metric: "Prime-time",
                metricLabel: "SASL visibility, national reach",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 120}>
                <article className="group h-full rounded-2xl border border-border bg-card p-8 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)] hover:border-accent/40 transition-all flex flex-col">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-accent">{c.tag}</div>
                  <div className="mt-2 text-xs text-muted-foreground">{c.client}</div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight leading-tight">{c.title}</h3>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl border border-border p-4">
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Before</div>
                      <p className="mt-2 text-foreground/80">{c.before}</p>
                    </div>
                    <div className="rounded-xl border border-accent/40 bg-accent/10 p-4">
                      <div className="text-[10px] uppercase tracking-widest text-accent">After</div>
                      <p className="mt-2 text-foreground">{c.after}</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-8 flex items-end justify-between">
                    <div>
                      <div className="font-display text-3xl font-semibold tracking-tight">{c.metric}</div>
                      <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{c.metricLabel}</div>
                    </div>
                    <span className="h-9 w-9 rounded-full bg-foreground text-background grid place-items-center text-sm transition-transform group-hover:rotate-45">↗</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 flex justify-center">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-sm font-semibold tracking-wide hover:scale-[1.03] hover:shadow-[var(--shadow-lift)] active:scale-[0.98] transition-all">
                Discuss your case
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPROACH / PROCESS */}
      <section id="approach" className="scroll-mt-24 container-x py-28">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">How we work</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">From audit to scale.</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="bg-background p-8 h-full">
                <div className="text-5xl font-display font-semibold text-accent/30 tabular-nums">{s.n}</div>
                <div className="mt-6 text-xl font-semibold">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRODUCT */}
      <section id="product" className="scroll-mt-24 bg-foreground text-background">
        <div className="container-x py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent">Product</div>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight">We don't just advise. We build.</h2>
                <p className="mt-6 text-background/70 max-w-lg text-lg">Hands On Kidz — an AI-powered reading platform engineered for Deaf learners.</p>
                <ul className="mt-8 space-y-3 text-background/80">
                  <li>· Word-level synchronisation</li>
                  <li>· SASL animation (reader + comprehension modes)</li>
                  <li>· Deaf-first learning experience</li>
                </ul>
                <p className="mt-8 text-background/60 italic">This is what inclusion looks like when it's engineered.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-background/15 aspect-[4/3]">
                <img src={classroomImg} alt="SASL learning in action" className="h-full w-full object-cover" loading="lazy" width={1200} height={900} />
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <div className="rounded-full bg-background text-foreground px-3 py-1 text-xs uppercase tracking-widest">Hands On Kidz</div>
                  <div className="rounded-full bg-background/90 backdrop-blur p-1 flex text-xs">
                    <span className="px-3 py-1 rounded-full bg-foreground text-background">Reader</span>
                    <span className="px-3 py-1 text-foreground">SASL</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="founder" className="scroll-mt-24 relative overflow-hidden bg-surface border-y border-border">
        <div className="absolute -top-40 -right-32 h-[500px] w-[500px] rounded-full bg-accent/30 blur-3xl pointer-events-none" />
        <div className="container-x py-28 relative">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Founder</div>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">
            <div className="md:col-span-5 md:sticky md:top-28 self-start">
              <Reveal>
                <div className="relative">
                  <div className="absolute -inset-3 rounded-[2rem] bg-accent/40 -z-0" />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-border shadow-[var(--shadow-lift)] tilt-3d">
                    <img src={founderImg} alt="Mmatlou Moloto, Founder" className="h-full w-full object-cover" loading="lazy" width={1200} height={1500} />
                    <div className="absolute top-5 left-5 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.25em]">
                      <span className="text-accent font-semibold">Founder</span> · Strategist
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent text-background">
                      <div className="text-2xl md:text-3xl font-semibold tracking-tight">Mmatlou Moloto</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.25em] text-accent">SASL · Deaf Education · Strategy</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="md:col-span-7">
                <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                  Built at the intersection of <span className="accent-underline">academia</span>, creative systems, and SASL integration.
                </h2>
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Mmatlou is a Deaf-community insider with 15+ years of lived practice and three postgraduate qualifications — operating where strategy, education, and SASL infrastructure meet.
                </p>

                {/* Executive snapshot */}
                <dl className="mt-10 grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border max-w-2xl">
                  {[
                    { k: "Role", v: "Founder, Strategist, Creative Consultant" },
                    { k: "Specialism", v: "SASL integration & Deaf-led system design" },
                    { k: "Experience", v: "15+ years inside the Deaf community" },
                    { k: "Sector reach", v: "Corporate · Academia · Broadcast · Public" },
                  ].map((s) => (
                    <div key={s.k} className="bg-card p-5">
                      <dt className="text-[10px] uppercase tracking-[0.22em] text-accent">{s.k}</dt>
                      <dd className="mt-2 text-base font-medium tracking-tight">{s.v}</dd>
                    </div>
                  ))}
                </dl>

                {/* Qualifications */}
                <div className="mt-6 rounded-2xl border border-border bg-card p-6 max-w-2xl">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-accent">Qualifications</div>
                  <ul className="mt-4 divide-y divide-border">
                    {[
                      { y: "MA", t: "Master's research — Deaf Education", i: "University of the Witwatersrand" },
                      { y: "BA Hons", t: "South African Sign Language", i: "Postgraduate honours" },
                      { y: "BA Hons", t: "Interpreting & Translation", i: "Postgraduate honours" },
                    ].map((c) => (
                      <li key={c.t} className="grid grid-cols-[72px_1fr] items-baseline gap-4 py-3">
                        <span className="text-xs font-semibold tabular-nums uppercase tracking-widest text-accent">{c.y}</span>
                        <div>
                          <div className="text-base font-semibold tracking-tight">{c.t}</div>
                          <div className="text-xs text-muted-foreground">{c.i}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2 max-w-2xl">
                  {["Strategist", "Academic", "Creative Consultant", "SASL Specialist", "Deaf Education"].map((t) => (
                    <span key={t} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {t}
                    </span>
                  ))}
                </div>

                {/* Credibility line */}
                <blockquote className="mt-8 rounded-2xl border-l-4 border-accent bg-card p-6 max-w-2xl">
                  <p className="font-display text-xl tracking-tight leading-snug">
                    "Inclusion is not a campaign. It's an operating system — and SASL is its interface."
                  </p>
                  <footer className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">Mmatlou Moloto · Founder</footer>
                </blockquote>

                <div className="mt-8">
                  <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold hover:scale-[1.03] active:scale-[0.97] transition-all">
                    Engage the founder
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-border bg-background overflow-hidden">
        <div className="container-x py-12">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Working across institutions, education, and innovation ecosystems.</div>
          </Reveal>
        </div>
        <div className="relative">
          <div className="flex gap-16 marquee whitespace-nowrap py-6 text-2xl md:text-3xl font-display tracking-tight text-foreground/40">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="hover:text-foreground transition-colors">{p} <span className="mx-6 text-accent">·</span></span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA + CONTACT FORM */}
      <section id="contact" className="container-x py-28 scroll-mt-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-8 md:p-16">
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/40 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl pointer-events-none" />
            <div className="relative grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-accent">Start the conversation</div>
                <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                  Let's build what access should look like.
                </h2>
                <p className="mt-6 text-background/70 max-w-md">For organisations ready to move beyond visibility — and into structure.</p>
                <ul className="mt-8 space-y-3 text-background/80 text-sm">
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> <a href="mailto:info@hoc.co.za" className="hover:text-accent transition-colors">info@hoc.co.za</a></li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> <a href="tel:+27784708240" className="hover:text-accent transition-colors">+27 78 470 8240</a></li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Johannesburg, South Africa</li>
                </ul>
              </div>
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background">
        <div className="container-x py-16">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-accent grid place-items-center text-foreground font-bold">H</span>
                <div>
                  <div className="text-base font-semibold">Hands On Creatives</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-background/60">SASL-led · Deaf-focused</div>
                </div>
              </div>
              <p className="mt-6 text-background/70 max-w-sm leading-relaxed">
                A SASL-led strategy consultancy building inclusion into institutional infrastructure.
              </p>
            </div>
            <div className="md:col-span-3">
              <div className="text-[10px] uppercase tracking-[0.25em] text-accent">Explore</div>
              <ul className="mt-5 space-y-3 text-sm text-background/80">
                <li><a href="#capabilities" className="hover:text-accent transition-colors">Capabilities</a></li>
                <li><a href="#product" className="hover:text-accent transition-colors">Product</a></li>
                <li><a href="#approach" className="hover:text-accent transition-colors">Approach</a></li>
                <li><a href="#founder" className="hover:text-accent transition-colors">Founder</a></li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <div className="text-[10px] uppercase tracking-[0.25em] text-accent">Contact</div>
              <ul className="mt-5 space-y-3 text-sm text-background/80">
                <li><a href="mailto:info@hoc.co.za" className="hover:text-accent transition-colors">info@hoc.co.za</a></li>
                <li><a href="tel:+27784708240" className="hover:text-accent transition-colors">+27 78 470 8240</a></li>
                <li>Johannesburg, South Africa</li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-3 text-sm font-medium hover:scale-[1.03] transition-transform">
                Start the Conversation →
              </a>
            </div>
          </div>
          <div className="mt-14 pt-6 border-t border-background/10 flex flex-wrap items-center justify-between gap-4 text-xs text-background/60">
            <div>© {new Date().getFullYear()} Hands On Creatives. All rights reserved.</div>
            <div className="uppercase tracking-[0.2em]">Inclusion is infrastructure.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
