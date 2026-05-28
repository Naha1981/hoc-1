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
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {[
            { n: "01", t: "Diagnose", d: "Audit systems. Identify where inclusion fails." },
            { n: "02", t: "Design", d: "Architect how SASL integrates into your organisation." },
            { n: "03", t: "Integrate", d: "Implement across platforms, teams, and workflows." },
            { n: "04", t: "Scale", d: "Optimise, measure, and expand impact." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="bg-background p-10 h-full">
                <div className="text-5xl font-display font-semibold text-accent/30 tabular-nums">{s.n}</div>
                <div className="mt-6 text-2xl font-semibold tracking-tight">{s.t}</div>
                <p className="mt-3 text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {[
            { title: "Strategic Inclusion Design", body: "Align inclusion with business strategy. Identify system gaps. Define measurable outcomes. We work at the intersection of policy, commercial strategy, and language access to build frameworks that hold." },
            { title: "SASL Integration Systems", body: "Embed SASL across internal systems, customer platforms, and digital environments. Not as a subtitle — as a primary interface. We engineer the infrastructure that makes language equity operational." },
            { title: "Institutional Consulting", body: "Restructure inclusion at leadership level — policy, frameworks, long-term adoption. We work with executives and boards to embed Deaf-centred thinking into governance and operational design." },
            { title: "Creative System Development", body: "Build the tools that enable inclusion: content systems, interactive platforms, AI-powered access. We move from strategy into delivery — designing and building the systems organisations need." },
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
