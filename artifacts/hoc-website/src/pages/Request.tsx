import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";

export function Request() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container-x pt-32 md:pt-40 pb-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Request Review</div>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              This is not a contact form.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              We work with organisations ready to integrate inclusion into their systems — not those exploring ideas. Before you submit, ask yourself: are you ready to restructure how your institution approaches inclusion?
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 rounded-2xl border border-border bg-card p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-accent mb-6">What to expect</div>
              <ul className="space-y-4">
                {[
                  "We review every submission carefully — this is not automated.",
                  "If your organisation aligns with our approach, you'll hear back within 24–48 hours.",
                  "We only take on work where we can deliver measurable, structural change.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStatus("sending");
                const fd = new FormData(e.currentTarget);
                const name = String(fd.get("name") || "");
                const email = String(fd.get("email") || "");
                const org = String(fd.get("org") || "");
                const role = String(fd.get("role") || "");
                const challenge = String(fd.get("challenge") || "");
                const subject = encodeURIComponent(`Review Request — ${org || name}`);
                const body = encodeURIComponent(`Name: ${name}\nRole: ${role}\nOrganisation: ${org}\nEmail: ${email}\n\nChallenge:\n${challenge}`);
                window.location.href = `mailto:admin@handsoncreatives.co.za?subject=${subject}&body=${body}`;
                setTimeout(() => setStatus("sent"), 400);
              }}
              className="mt-10 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Your name</span>
                  <input required name="name" type="text" className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Your role</span>
                  <input required name="role" type="text" className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Organisation</span>
                  <input required name="org" type="text" className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Work email</span>
                  <input required name="email" type="email" className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                </label>
              </div>
              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">The systemic challenge you're trying to solve</span>
                <textarea required name="challenge" rows={6} className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Be specific. What isn't working? What outcome are you trying to achieve?" />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-4 text-sm font-semibold tracking-wide hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60"
              >
                {status === "sent" ? "Opening your email client…" : "Submit for Review"}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
              <p className="text-[11px] text-muted-foreground text-center">
                Or email <a className="underline" href="mailto:admin@handsoncreatives.co.za">admin@handsoncreatives.co.za</a> directly.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
