import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import heroPeopleImg from "@/assets/hero-people.jpg";
import heroHandsImg from "@/assets/hero-hands.jpg";
import systemDiagramImg from "@/assets/system-diagram.jpg";
import founderImg from "@/assets/mmatlou.jpg";
import classroomImg from "@/assets/mmatlou-child.png";
import teamMeetingImg from "@/assets/team-meeting.jpg";
import logoMtn from "@/assets/logos/mtn.svg";
import logoSupaStrikas from "@/assets/logos/supa-strikas.jpg";
import logoSama29 from "@/assets/logos/sama-29.svg";
import logoDarlingTv from "@/assets/logos/darling-tv.jpg";
import logoSefakoMakgatho from "@/assets/logos/sefako-makgatho.jpg";
import logoCastleMilkStout from "@/assets/logos/castle-milk-stout.svg";
import logoLilLets from "@/assets/logos/lil-lets.svg";
import logoDeafTouch from "@/assets/logos/deaf-touch.jpg";
import logoGopalaDavies from "@/assets/logos/gopala-davies.svg";
import logoNostalgiaProductions from "@/assets/logos/nostalgia-productions.svg";

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

const logoItems: { name: string; src: string; height?: string }[] = [
  { name: "Supa Strikas",              src: logoSupaStrikas,      height: "h-9"  },
  { name: "MTN",                       src: logoMtn,              height: "h-9"  },
  { name: "SAMA 29",                   src: logoSama29,           height: "h-12" },
  { name: "Darling TV",                src: logoDarlingTv,        height: "h-10" },
  { name: "Sefako Makgatho University",src: logoSefakoMakgatho,   height: "h-12" },
  { name: "Castle Milk Stout",         src: logoCastleMilkStout,  height: "h-14" },
  { name: "Lil-lets SA",               src: logoLilLets,          height: "h-9"  },
  { name: "Deaf Touch",                src: logoDeafTouch,        height: "h-11" },
];

const mediaGroupElement = (
  <div className="flex items-center gap-4 border border-border/50 rounded-lg px-3 py-2 relative">
    <span className="absolute -top-2.5 left-2 text-[8px] uppercase tracking-[0.22em] text-muted-foreground bg-background px-1">MEDIA</span>
    <img src={logoGopalaDavies}       alt="Gopala Davies"        className="h-7 w-auto" />
    <span className="text-border/60 text-lg select-none">·</span>
    <img src={logoNostalgiaProductions} alt="Nostalgia Productions" className="h-11 w-auto" />
  </div>
);

const logoMarqueeItems = [
  ...logoItems.map((item) => ({
    name: item.name,
    element: (
      <img
        src={item.src}
        alt={item.name}
        className={`${item.height ?? "h-9"} w-auto object-contain`}
      />
    ),
  })),
  { name: "MEDIA: Gopala Davies + Nostalgia", element: mediaGroupElement },
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="relative rounded-2xl bg-background text-foreground p-6 md:p-8 ring-1 ring-background/10 shadow-[var(--shadow-lift)] flex flex-col items-center justify-center gap-4 min-h-[320px] text-center">
        <span className="text-4xl" aria-hidden>✓</span>
        <p className="font-semibold text-lg">Enquiry received — thank you.</p>
        <p className="text-sm text-muted-foreground max-w-xs">
          We'll be in touch within 1–2 business days. In the meantime feel free to email us directly at{" "}
          <a className="underline" href="mailto:admin@handsoncreatives.co.za">admin@handsoncreatives.co.za</a>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-xs underline text-muted-foreground hover:text-foreground transition-colors"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      action={FORMSPREE_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      className="relative rounded-2xl bg-background text-foreground p-6 md:p-8 ring-1 ring-background/10 shadow-[var(--shadow-lift)]"
    >
      <input type="hidden" name="_replyto" value="" />

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Name</span>
          <input
            required
            name="name"
            type="text"
            maxLength={100}
            placeholder="Your full name"
            className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Organisation</span>
          <input
            name="org"
            type="text"
            maxLength={120}
            placeholder="Company or institution"
            className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </label>
      </div>

      <label className="block mt-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Work email</span>
        <input
          required
          name="email"
          type="email"
          placeholder="you@organisation.com"
          className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </label>

      <label className="block mt-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">What you're trying to solve</span>
        <textarea
          required
          name="message"
          rows={4}
          maxLength={1500}
          placeholder="Describe the challenge or opportunity you'd like us to help with…"
          className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
        />
        <span className="mt-1 block text-[10px] text-muted-foreground text-right">Max 1 500 characters</span>
      </label>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">
          Something went wrong — please try again or email{" "}
          <a className="underline" href="mailto:admin@handsoncreatives.co.za">admin@handsoncreatives.co.za</a> directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold tracking-wide hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request a Strategy Call"}
        {status !== "sending" && (
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
        )}
      </button>

      <p className="mt-3 text-[11px] text-muted-foreground text-center">
        Or email <a className="underline" href="mailto:admin@handsoncreatives.co.za">admin@handsoncreatives.co.za</a> directly.
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
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
                  <a href="#capabilities" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 backdrop-blur px-7 py-4 text-sm font-medium hover:border-foreground hover:bg-accent/20 transition-all active:scale-[0.98]">
                    What We Do
                  </a>
                </div>
              </Reveal>

              <Reveal delay={800}>
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
              </Reveal>
            </div>

            <Reveal delay={400}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2.5rem] bg-accent/20 -z-0 blur-sm" />
                <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-border shadow-[var(--shadow-lift)]">
                  <img
                    src="/hero-image-final.jpg"
                    alt="Two women communicating in South African Sign Language"
                    className="block w-full object-contain"
                    loading="eager"
                    decoding="async"
                  />
                  <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-2xl bg-background/85 backdrop-blur-md border border-border px-4 py-3 shadow-[var(--shadow-card)]">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-ring" />
                      In Practice
                    </div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">Hands lead. Systems follow.</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
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
              <p className="max-w-sm text-muted-foreground">We develop practical accessibility solutions that are scalable, integrated into everyday operations, and evaluated through measurable outcomes that improve inclusion and engagement</p>
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
            <div key={s.n} className="bg-background p-8">
              <Reveal delay={i * 120}>
                <div>
                  <div className="text-5xl font-display font-semibold text-accent/30 tabular-nums">{s.n}</div>
                  <div className="mt-6 text-xl font-semibold">{s.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            </div>
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
      <section id="about" className="scroll-mt-24 relative bg-surface border-y border-border">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-32 h-[500px] w-[500px] rounded-full bg-accent/30 blur-3xl" />
        </div>
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
                  <footer className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">MMATLOU MOLOTO, FOUNDER</footer>
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
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> <a href="mailto:admin@handsoncreatives.co.za" className="hover:text-accent transition-colors">admin@handsoncreatives.co.za</a></li>
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
                <li><a href="mailto:admin@handsoncreatives.co.za" className="hover:text-accent transition-colors">admin@handsoncreatives.co.za</a></li>
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

      <BackToTop />
      <ScrollProgress />
    </div>
  );
}
