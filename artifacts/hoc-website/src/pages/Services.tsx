import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";

export function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container-x pt-32 md:pt-40 pb-20">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-accent">Services</div>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-tight">We build inclusion into systems. Not around them.</h1>
        </Reveal>
        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {[
            { n: "01", t: "Diagnose", d: "Audit systems. Identify where inclusion fails." },
            { n: "02", t: "Design", d: "Architect how SASL integrates into your organisation." },
            { n: "03", t: "Scale", d: "Optimise, measure, and expand impact." },
          ].map((s, i) => (
            <div key={s.n} className="bg-background p-10">
              <Reveal delay={i * 120}>
                <div>
                  <div className="text-5xl font-display font-semibold text-accent/30 tabular-nums">{s.n}</div>
                  <div className="mt-6 text-2xl font-semibold tracking-tight">{s.t}</div>
                  <p className="mt-3 text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {[
            { title: "SASL-Inclusive Brand Strategy", body: "We help brands integrate South African Sign Language meaningfully into campaigns, advertising, social media, events, storytelling, customer experience, and brand culture." },
            { title: "Accessibility, Inclusivity & Creative Integration", body: "We assess organisational accessibility across customer experience, communication systems, digital platforms, campaigns, events, and institutional culture, while also collaborating on inclusive, culturally relevant, and impactful experiences." },
            { title: "Institutional & Curriculum Development", body: "We provide Deaf education strategy, literacy development, curriculum alignment, academic consultation, teacher development, and educational resource design." },
            { title: "SASL Training & Cultural Competency", body: "We offer training for corporate teams, customer-facing staff, hospitality environments, retail spaces, universities, and public institutions." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="group rounded-2xl border border-border bg-card p-8 hover:border-foreground transition-all hover:shadow-[var(--shadow-card)]">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight">{c.title}</h3>
                  <span className="h-9 w-9 rounded-full bg-foreground text-background grid place-items-center text-sm transition-transform group-hover:rotate-45 flex-shrink-0">↗</span>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 flex justify-center">
            <a href="/#contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-sm font-semibold tracking-wide hover:scale-[1.03] hover:shadow-[var(--shadow-lift)] active:scale-[0.98] transition-all">
              Start the conversation
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
