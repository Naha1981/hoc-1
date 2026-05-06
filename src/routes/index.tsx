import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-people.jpg";
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

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-28 overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="absolute inset-0 gradient-mesh pointer-events-none opacity-80" />
        {/* Animated blobs */}
        <div className="blob bg-accent/40 h-[420px] w-[420px] -top-32 -left-20" />
        <div className="blob bg-accent/30 h-[360px] w-[360px] top-40 -right-24" style={{ animationDelay: "-4s" }} />
        {/* Floating tag */}
        <div className="absolute top-32 right-8 hidden lg:block float-y" style={{ animationDelay: "-2s" }}>
          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-md px-4 py-3 shadow-[var(--shadow-card)]">
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Live</div>
            <div className="text-sm font-medium">Inclusion engineered</div>
          </div>
        </div>

        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-ring" />
                  SASL-led · Deaf-focused
                </span>
              </Reveal>
              <h1 className="mt-6 font-display text-[clamp(2.6rem,6.4vw,5.2rem)] font-semibold tracking-tight leading-[1.02] text-balance">
                <Reveal delay={120}><span className="block">Inclusion that works.</span></Reveal>
                <Reveal delay={260}><span className="block">Strategy that grows.</span></Reveal>
                <Reveal delay={400}>
                  <span className="block">
                    <span className="accent-underline">SASL</span> that transforms.
                  </span>
                </Reveal>
              </h1>
              <Reveal delay={580}>
                <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
                  We don't run campaigns. We design systems that integrate South African Sign Language into institutions — at scale. Unlock access. Drive innovation. Build what inclusion should look like.
                </p>
              </Reveal>
              <Reveal delay={720}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium overflow-hidden transition-all hover:scale-[1.03]">
                    <span className="absolute inset-0 shine opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative">Request a Review</span>
                    <span className="relative transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <a href="#capabilities" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 backdrop-blur px-6 py-3.5 text-sm font-medium hover:border-foreground hover:bg-accent/20 transition-all">
                    Build Inclusive Systems
                  </a>
                </div>
              </Reveal>
              <Reveal delay={900}>
                <div className="mt-12 flex items-center gap-6 text-xs text-muted-foreground">
                  <div>
                    <div className="text-2xl font-semibold text-foreground">15+</div>
                    <div className="uppercase tracking-widest">years in the field</div>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <div className="text-2xl font-semibold text-foreground">10+</div>
                    <div className="uppercase tracking-widest">institutions served</div>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <div className="text-2xl font-semibold text-foreground">1</div>
                    <div className="uppercase tracking-widest">AI access platform</div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={400}>
                <div className="relative">
                  {/* Decorative orbit */}
                  <div className="absolute -inset-6 rounded-[2.5rem] border border-dashed border-accent/40 spin-slow pointer-events-none" />
                  <div className="absolute -top-4 -left-4 h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_var(--accent)]" />
                  <div className="absolute -bottom-4 -right-4 h-4 w-4 rounded-full bg-foreground" />
                  <div className="tilt-3d relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface ring-1 ring-border shadow-[var(--shadow-lift)]">
                    <img src={heroImg} alt="Two professionals communicating in SASL" className="absolute inset-0 h-full w-full object-cover" width={1080} height={1350} />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-background/90 backdrop-blur-md border border-border p-5 shadow-[var(--shadow-card)]">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-ring" />
                        In Practice
                      </div>
                      <div className="mt-1 text-lg font-medium">Hands lead. Systems follow.</div>
                    </div>
                  </div>
                  {/* Floating mini-card */}
                  <div className="hidden md:block absolute -left-10 bottom-16 float-y">
                    <div className="rounded-2xl bg-foreground text-background px-4 py-3 shadow-[var(--shadow-lift)]">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-accent">Outcome</div>
                      <div className="text-sm font-medium">+3.7M reachable</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
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
      <section id="capabilities" className="bg-surface border-y border-border">
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

      {/* APPROACH / PROCESS */}
      <section id="approach" className="container-x py-28">
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
      <section id="product" className="bg-foreground text-background">
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
      <section id="founder" className="container-x py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal>
            <div className="lg:col-span-4">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-surface ring-1 ring-border">
                <img src={founderImg} alt="Mmatlou Moloto" className="h-full w-full object-cover" loading="lazy" width={1200} height={1500} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="lg:col-span-8">
              <div className="text-xs uppercase tracking-[0.2em] text-accent">Founder</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Built by a strategist operating at the intersection of academia, creative systems, and SASL integration.
              </h2>
              <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
                Mmatlou Moloto. 15+ years inside the Deaf community. Honours in Interpreting & Translation. Honours in SASL. Master's research in Deaf Education, University of the Witwatersrand.
              </p>
              <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl">
                {["Strategist", "Academic", "Creative Consultant", "SASL Specialist"].map((t) => (
                  <div key={t} className="rounded-xl border border-border bg-card px-4 py-3 text-sm">{t}</div>
                ))}
              </div>
              <p className="mt-10 font-display text-xl tracking-tight max-w-xl">
                Focused on one outcome: <span className="accent-underline">turning inclusion into institutional capability.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-border bg-surface overflow-hidden">
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

      {/* FINAL CTA */}
      <section id="contact" className="container-x py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-10 md:p-20 text-center">
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.3em] text-accent">Final brief</div>
              <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl mx-auto leading-[1.05]">
                Let's build what access should look like.
              </h2>
              <p className="mt-6 text-background/70 max-w-xl mx-auto">For organisations ready to move beyond visibility — and into structure.</p>
              <div className="mt-10 flex justify-center">
                <a href="mailto:hello@handsoncreatives.co.za" className="pulse-ring inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 text-sm font-medium hover:scale-[1.03] transition-transform">
                  Start the Conversation
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="container-x py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full bg-foreground" />
            <span>© {new Date().getFullYear()} Hands On Creatives</span>
          </div>
          <div className="uppercase tracking-[0.2em] text-xs">SASL-led. Deaf-focused.</div>
        </div>
      </footer>
    </div>
  );
}
