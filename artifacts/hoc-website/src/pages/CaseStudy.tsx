import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import classroomImg from "@/assets/mmatlou-child.png";

export function CaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container-x pt-32 md:pt-40 pb-20">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-accent">Case Study</div>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-tight">Hands On Kidz</h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">Building a Deaf-first learning system at scale.</p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 relative rounded-[2rem] overflow-hidden ring-1 ring-border aspect-[21/9]">
            <img src={classroomImg} alt="SASL learning in action" className="h-full w-full object-cover" loading="eager" />
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
              <div className="rounded-full bg-background text-foreground px-3 py-1 text-xs uppercase tracking-widest">Hands On Kidz</div>
              <div className="rounded-full bg-background/90 backdrop-blur p-1 flex text-xs">
                <span className="px-3 py-1 rounded-full bg-foreground text-background">Reader</span>
                <span className="px-3 py-1 text-foreground">SASL</span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <dl className="rounded-2xl border border-border bg-card divide-y divide-border">
                {[
                  { k: "Category", v: "EdTech · Deaf Education" },
                  { k: "Platform", v: "AI-powered reading app" },
                  { k: "Audience", v: "Deaf learners, primary school" },
                  { k: "Status", v: "In development" },
                ].map((s) => (
                  <div key={s.k} className="p-5">
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-accent">{s.k}</dt>
                    <dd className="mt-2 text-base font-medium tracking-tight">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-10">
            <Reveal>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent">The Challenge</div>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Deaf children deserve reading tools built for them — not adapted from hearing models.</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">Existing reading platforms are built around phonics — a system grounded in spoken language. For Deaf learners, this is structurally exclusionary. Hands On Kidz was built to rethink literacy from first principles, using SASL as the primary cognitive bridge.</p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent">Key Features</div>
                <ul className="mt-6 space-y-4">
                  {[
                    { title: "AI Reading Engine", body: "Word-level tokenization maps text to SASL in real time. Every word is a gateway to its signed equivalent." },
                    { title: "SASL Animation System", body: "Two modes — Reader (passive comprehension) and Comprehension (active engagement) — allow learners to move through text with SASL support embedded at every step." },
                    { title: "Inclusive Interaction Design", body: "Every interface decision was made with Deaf-first UX principles. Visual language replaces audio cues. Interaction patterns are built around how Deaf children actually learn." },
                  ].map((f, i) => (
                    <li key={f.title} className="group rounded-2xl border border-border bg-card p-6 hover:border-accent/40 hover:shadow-[var(--shadow-card)] transition-all">
                      <div className="flex items-start gap-4">
                        <span className="text-xs tabular-nums text-muted-foreground pt-1">0{i + 1}</span>
                        <div>
                          <div className="font-semibold tracking-tight">{f.title}</div>
                          <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{f.body}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <blockquote className="rounded-2xl border-l-4 border-accent bg-card p-6">
                <p className="font-display text-xl tracking-tight leading-snug">
                  "This is what inclusion looks like when it's engineered — not bolted on."
                </p>
                <footer className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">Mmatlou Moloto · Founder</footer>
              </blockquote>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="mt-20 flex justify-center">
            <a href="/#contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-sm font-semibold tracking-wide hover:scale-[1.03] hover:shadow-[var(--shadow-lift)] active:scale-[0.98] transition-all">
              Discuss your project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
