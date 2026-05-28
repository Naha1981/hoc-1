import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-signing.jpg";
import heroPeopleImg from "@/assets/hero-people.jpg";
import heroHandsImg from "@/assets/hero-hands.jpg";
import systemDiagramImg from "@/assets/system-diagram.jpg";
import founderImg from "@/assets/mmatlou.jpg";
import classroomImg from "@/assets/mmatlou-child.png";
import teamMeetingImg from "@/assets/team-meeting.jpg";

const serviceCards = [
  {
    title: "SASL-Inclusive Brand Strategy",
    body: "We help brands integrate South African Sign Language meaningfully into campaigns, advertising, social media, events, storytelling, customer experience, and brand culture.",
    img: heroPeopleImg,
  },
  {
    title: "Accessibility, Inclusivity & Creative Integration",
    body: "We assess organisational accessibility across customer experience, communication systems, digital platforms, campaigns, events, and institutional culture, while also collaborating on campaigns, productions, performances, live events, media accessibility, and Deaf-centred storytelling to create inclusive, culturally relevant, and impactful experiences.",
    img: heroHandsImg,
  },
  {
    title: "Institutional & Curriculum Development",
    body: "We provide Deaf education strategy, literacy development, curriculum alignment, academic consultation, teacher development, and educational resource design.",
    img: systemDiagramImg,
  },
  {
    title: "SASL Training & Cultural Competency",
    body: "We offer training for corporate teams, customer-facing staff, hospitality environments, retail spaces, universities, and public institutions.",
    img: teamMeetingImg,
  },
];

const steps = [
  { n: "01", t: "Diagnose", d: "We audit current systems and identify where inclusion fails." },
  { n: "02", t: "Design", d: "We architect how SASL integrates into your organisation." },
  { n: "03", t: "Scale", d: "We optimise, measure, and expand impact." },
];

const logoMarqueeItems = [
  {
    name: "MoonSport",
    element: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#F5C518]" fill="currentColor" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
        <span className="font-display font-bold text-sm text-[#0a2540]">MoonSport</span>
      </div>
    ),
  },
  {
    name: "MTN",
    element: (
      <span className="inline-flex items-center justify-center h-10 w-14 rounded-md bg-[#FFCC00] text-black font-black text-lg tracking-tight shadow-sm">MTN</span>
    ),
  },
  {
    name: "SAMA 29",
    element: (
      <div className="flex flex-col items-center leading-none">
        <span className="font-serif font-bold text-2xl text-[#B8893A] tracking-wide">SAMA</span>
        <span className="text-[9px] tracking-[0.35em] text-[#B8893A] font-black mt-0.5">29</span>
      </div>
    ),
  },
  {
    name: "Darling Films",
    element: (
      <div className="flex flex-col items-center leading-none">
        <span className="font-serif font-bold text-xl text-[#D32F2F] tracking-wide">Darling</span>
        <span className="text-[8px] tracking-[0.25em] text-[#D32F2F] font-semibold mt-0.5">FILMS</span>
      </div>
    ),
  },
  {
    name: "SMU",
    element: (
      <div className="flex flex-col items-center leading-tight">
        <span className="font-serif font-extrabold text-2xl text-[#003F87] tracking-wider">SMU</span>
        <span className="text-[7px] tracking-[0.12em] text-[#003F87] font-semibold text-center">SEFAKO MAKGATHO</span>
      </div>
    ),
  },
  {
    name: "Castle Milk Stout",
    element: (
      <div className="flex flex-col items-center leading-none">
        <svg viewBox="0 0 32 20" className="h-4 w-8 text-[#7a1f1f]" fill="currentColor" aria-hidden="true">
          <path d="M2 18h28v2H2zM4 8h2V4h3v4h3V4h3v4h3V4h3v4h3V4h3v4h2v8H4z"/>
        </svg>
        <span className="font-serif font-bold text-[11px] tracking-wide text-[#1a1a1a] mt-0.5">CASTLE</span>
        <span className="text-[7px] tracking-[0.2em] text-[#7a1f1f] font-semibold">MILK STOUT</span>
      </div>
    ),
  },
  {
    name: "Lil-lets SA",
    element: (
      <span className="font-display font-extrabold italic text-2xl text-[#E5006D] lowercase tracking-tight">lil-lets</span>
    ),
  },
  {
    name: "Deaf Touch",
    element: (
      <div className="flex items-center gap-1.5">
        <span className="text-2xl" aria-hidden="true">🤟</span>
        <span className="font-display font-bold text-sm text-foreground">DeafTouch</span>
      </div>
    ),
  },
  {
    name: "MEDIA: Gopala Davies + Nostalgia",
    isMediaGroup: true,
    element: (
      <div className="flex items-center gap-4 border border-border/50 rounded-lg px-3 py-1.5 relative">
        <span className="absolute -top-2 left-2 text-[8px] uppercase tracking-[0.2em] text-muted-foreground bg-background px-1">MEDIA</span>
        <div className="flex flex-col items-center leading-none">
          <span className="font-sans font-bold text-sm text-foreground tracking-tight">Gopala Davies</span>
        </div>
        <span className="text-border">·</span>
        <div className="flex flex-col items-center leading-none">
          <span className="font-serif font-bold text-sm text-[#8B5A3C] tracking-wide">Nostalgia</span>
          <span className="text-[7px] tracking-[0.18em] text-[#8B5A3C] font-semibold">PRODUCTIONS</span>
        </div>
      </div>
    ),
  },
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
          <input required name="name" type="text" maxLength={100} className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Organisation</span>
          <input name="org" type="text" maxLength={120} className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
        </label>
      </div>
      <label className="block mt-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Work email</span>
        <input required name="email" type="email" className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
      </label>
      <label className="block mt-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">What you're trying to solve</span>
        <textarea required name="message" rows={4} maxLength={1500} className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
        <span className="mt-1 block text-[10px] text-muted-foreground text-right">Max 1500 characters</span>
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

export function Index() {
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
                We don't run campaigns. We design systems that integrate South African Sign Language into institutions — at scale. Unlock access. Drive innovation. Build what inclusion should look like.
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
                  decoding="async"
                />
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

              {/* Stats — keep only 15+ years and 100% SASL-led */}
              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs text-muted-foreground">
                <div>
                  <div className="text-2xl font-semibold text-foreground">15+</div>
                  <div className="uppercase tracking-widest">YEARS IN THE DEAF COMMUNITY</div>
                </div>
                <div className="hidden sm:block h-10 w-px bg-border" />
                <div>
                  <div className="text-2xl font-semibold text-foreground">100%</div>
                  <div className="uppercase tracking-widest">SASL-LED DESIGN</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE OFFER */}
      <section className="bg-foreground text-background">
        <div className="container-x py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent">The Offer</div>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight">We redesign how inclusion works.</h2>
                <p className="mt-6 text-background/70 max-w-lg">Hands On Creatives integrates SASL into communication systems, customer experience, and institutional frameworks. Not as an add-on — as a core function.</p>
                <ul className="mt-10 space-y-4">
                  {[
                    "Communication systems: Internal and external channels rebuilt around language equity.",
                    "Customer experience: Service design that includes Deaf customers as a first-class audience.",
                    "Institutional frameworks: Policy, training, and operations restructured for adoption at scale.",
                  ].map((x) => (
                    <li key={x} className="group flex items-center gap-4 rounded-xl border border-background/10 px-5 py-4 hover:border-accent hover:bg-background/5 transition-all hover:translate-x-1">
                      <span className="h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-lg">{x}</span>
                      <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-background/60">→</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="relative aspect-square rounded-[2rem] overflow-hidden ring-1 ring-background/15 bg-background">
                <img src={teamMeetingImg} alt="Team collaboration with SASL integration" className="h-full w-full object-cover" loading="lazy" width={1600} height={1200} />
                <div className="absolute top-5 left-5 rounded-full bg-background text-foreground px-3 py-1 text-xs uppercase tracking-widest">System view</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="capabilities" className="scroll-mt-24 bg-surface border-y border-border">
        <div className="container-x py-28">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <Reveal>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent">What We Do</div>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">Services.</h2>
              </div>
            </Reveal>
            <Reveal>
              <p className="max-w-sm text-muted-foreground">Everything we build is designed for scale, embedded in operations, and measured against outcomes.</p>
            </Reveal>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="group relative rounded-2xl border border-border bg-card overflow-hidden cursor-pointer hover:border-foreground transition-all hover:shadow-[var(--shadow-elegant)] min-h-[300px] flex flex-col">
                  {/* Hover background image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <img src={c.img} alt="" className="h-full w-full object-cover" aria-hidden="true" />
                    <div className="absolute inset-0 bg-foreground/80" />
                  </div>
                  {/* Card content */}
                  <div className="relative p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <h3 className="text-lg font-semibold tracking-tight leading-snug group-hover:text-background transition-colors">{c.title}</h3>
                      <span className="h-8 w-8 rounded-full bg-foreground text-background grid place-items-center text-sm transition-all flex-shrink-0 group-hover:bg-accent group-hover:text-foreground group-hover:rotate-45">↗</span>
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-background/80 transition-colors leading-relaxed flex-1">{c.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEASURABLE RESULTS */}
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

      {/* FROM AUDIT TO SCALE */}
      <section id="approach" className="scroll-mt-24 container-x py-28">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">How we work</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">From audit to scale.</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
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

      {/* HANDS ON KIDZ */}
      <section id="product" className="scroll-mt-24 bg-foreground text-background">
        <div className="container-x py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent">Product</div>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight">Building the future of inclusive learning.</h2>
                <p className="mt-6 text-background/70 max-w-lg text-lg">
                  Hands On Kidz focuses on accessible educational experiences for children, with a strong emphasis on SASL-led learning and literacy.
                </p>
                <ul className="mt-8 space-y-3 text-background/80">
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />Educational accessibility</li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />Literacy development</li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />Inclusive child engagement</li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />Visual communication systems</li>
                </ul>
                <p className="mt-8 text-background/60 italic">Designed with inclusion at the core.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-background/15 aspect-[4/3]">
                <img src={classroomImg} alt="SASL learning in action" className="h-full w-full object-cover" loading="lazy" width={1200} height={900} />
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <div className="rounded-full bg-background text-foreground px-3 py-1 text-xs uppercase tracking-widest">Hands On Kidz</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="about" className="scroll-mt-24 relative overflow-hidden bg-surface border-y border-border">
        <div className="absolute -top-40 -right-32 h-[500px] w-[500px] rounded-full bg-accent/30 blur-3xl pointer-events-none" />
        <div className="container-x py-28 relative">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Founder</div>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">
            <div id="team" className="md:col-span-5 md:sticky md:top-28 self-start">
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

            <Reveal delay={150} className="md:col-span-7">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                  Built at the intersection of <span className="accent-underline">academia</span>, creative systems, and SASL integration.
                </h2>
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Mmatlou is a Deaf-community insider with 15+ years of lived practice and three postgraduate qualifications — operating where strategy, education, and SASL infrastructure meet.
                </p>

                <dl className="mt-10 grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border max-w-2xl">
                  {[
                    { k: "Role", v: "Founder, Strategist, Creative Consultant" },
                    { k: "Specialisation", v: "SASL integration & SASL-led system design" },
                    { k: "Experience", v: "15+ years inside the Deaf community" },
                    { k: "Sector reach", v: "Corporate · Academia · Broadcast · Public" },
                  ].map((s) => (
                    <div key={s.k} className="bg-card p-5">
                      <dt className="text-[10px] uppercase tracking-[0.22em] text-accent">{s.k}</dt>
                      <dd className="mt-2 text-base font-medium tracking-tight">{s.v}</dd>
                    </div>
                  ))}
                </dl>

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

                <div className="mt-6 flex flex-wrap gap-2 max-w-2xl">
                  {["Strategist", "Academic", "Creative Consultant", "SASL Specialist", "Deaf Education"].map((t) => (
                    <span key={t} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {t}
                    </span>
                  ))}
                </div>

                <blockquote className="mt-8 rounded-2xl border-l-4 border-accent bg-card p-6 max-w-2xl">
                  <p className="font-display text-xl tracking-tight leading-snug">
                    "Inclusion is not a campaign. It's an operating system - and SASL is its interface."
                  </p>
                  <footer className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">MMATIOU MOLOTO, FOUNDER</footer>
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
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Sinosteel Plaza, Johannesburg, South Africa</li>
                </ul>
              </div>
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </section>

      {/* PARTNER LOGO CAROUSEL — bottom of page */}
      <section aria-label="Our partners and clients" className="border-t border-border bg-background overflow-hidden">
        <div className="container-x pt-10 pb-4">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Trusted across corporate, academia, broadcast &amp; the Deaf community
            </div>
          </Reveal>
        </div>
        <div className="relative py-8">
          {/* Left / right fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-14 marquee whitespace-nowrap items-center">
            {[...logoMarqueeItems, ...logoMarqueeItems].map((item, i) => (
              <div
                key={i}
                aria-label={item.name}
                className="inline-flex items-center justify-center opacity-60 hover:opacity-100 grayscale hover:grayscale-0 saturate-50 hover:saturate-100 transition-all duration-300 flex-shrink-0"
              >
                {item.element}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background">
        <div className="container-x py-16">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-[#FFD600] grid place-items-center text-foreground font-bold">H</span>
                <div>
                  <div className="text-base font-semibold">Hands On Creatives</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-background/60">SASL-LED STRATEGY CONSULTING</div>
                </div>
              </div>
              <p className="mt-6 text-background/70 max-w-sm leading-relaxed">
                A SASL-led strategy consultancy designing inclusion into the systems that run institutions.
              </p>
            </div>
            <div className="md:col-span-3">
              <div className="text-[10px] uppercase tracking-[0.25em] text-accent">Explore</div>
              <ul className="mt-5 space-y-3 text-sm text-background/80">
                <li><a href="#capabilities" className="hover:text-accent transition-colors">What We Do</a></li>
                <li><a href="#product" className="hover:text-accent transition-colors">Product</a></li>
                <li><a href="#approach" className="hover:text-accent transition-colors">Approach</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">Founder</a></li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <div className="text-[10px] uppercase tracking-[0.25em] text-accent">Contact</div>
              <ul className="mt-5 space-y-3 text-sm text-background/80">
                <li><a href="mailto:info@hoc.co.za" className="hover:text-accent transition-colors">info@hoc.co.za</a></li>
                <li><a href="tel:+27784708240" className="hover:text-accent transition-colors">+27 78 470 8240</a></li>
                <li>Sinosteel Plaza, Johannesburg, South Africa</li>
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
