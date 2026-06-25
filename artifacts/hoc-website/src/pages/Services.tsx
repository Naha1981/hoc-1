import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import heroPeopleImg from "@/assets/hero-people.jpg";
import heroHandsImg from "@/assets/hero-hands.jpg";
import systemDiagramImg from "@/assets/system-diagram.jpg";
import teamMeetingImg from "@/assets/team-meeting.jpg";

const serviceCards = [
  {
    title: "SASL-Inclusive Brand Strategy",
    body: "We help brands integrate South African Sign Language meaningfully into campaigns, advertising, social media, events, storytelling, customer experience, and brand culture.",
    img: heroPeopleImg,
  },
  {
    title: "Accessibility, Inclusivity & Creative Integration",
    body: "We assess organisational accessibility across customer experience, communication systems, digital platforms, campaigns, events, and institutional culture, while also collaborating on inclusive, culturally relevant, and impactful experiences.",
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

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="group relative rounded-2xl border border-border bg-card overflow-hidden cursor-pointer hover:border-foreground transition-all hover:shadow-[var(--shadow-elegant)] min-h-[300px] flex flex-col">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <img src={c.img} alt="" className="h-full w-full object-cover" aria-hidden="true" />
                  <div className="absolute inset-0 bg-foreground/80" />
                </div>
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
