import { Reveal, SectionLabel } from "./primitives";

const governance = [
  {
    title: "General Assembly",
    body: "Members hold the ultimate authority over the cooperative's direction.",
  },
  {
    title: "Board of Directors",
    body: "Elected stewardship of strategy, performance and accountability.",
  },
  { title: "Supervisory Committee", body: "Independent oversight of operations and compliance." },
  {
    title: "Investment Committee",
    body: "Disciplined review of every asset the cooperative acquires.",
  },
  { title: "Audit & Risk Committee", body: "Formal audit, controls and risk management." },
  {
    title: "Technology & Innovation",
    body: "Oversight of the digital platform members rely on daily.",
  },
];

const commitments = [
  {
    heading: "Everything is reported",
    body: "The Coop Intel dashboard publishes assets under management, equipment portfolio, revenue, expenditure, reserves, dividend history and fund performance to members.",
  },
  {
    heading: "Cooperative structure, not a scheme",
    body: "NEOCS is built as a cooperative society: one member community, defined committees, formal assemblies and rules that exist before the money does.",
  },
  {
    heading: "Members first, always",
    body: "Revenue is allocated by a published framework: the majority to the member dividend pool, with the balance to reserves, operations and asset expansion.",
  },
];

const allocation = [
  { label: "Dividend Pool", value: 60 },
  { label: "Growth & Stabilization Reserve", value: 20 },
  { label: "Management, Operations & Technology", value: 10 },
  { label: "Asset Expansion", value: 10 },
];

export function Trust() {
  return (
    <section id="trust" className="relative bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Trust & Governance</SectionLabel>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-7 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.03]">
            Confidence is built on
            <span className="text-growth"> things you can check.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {commitments.map((c, i) => (
            <Reveal
              key={c.heading}
              delay={i}
              className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-lift)]"
            >
              <h3 className="text-lg font-bold">{c.heading}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <h3 className="text-xl font-bold">Governance structure</h3>
            </Reveal>
            <ul className="mt-8">
              {governance.map((g, i) => (
                <Reveal
                  as="li"
                  key={g.title}
                  delay={i * 0.5}
                  className="grid gap-1 py-5 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-6"
                >
                  <span className="text-sm font-bold">{g.title}</span>
                  <span className="text-sm text-muted-foreground">{g.body}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <Reveal>
              <h3 className="text-xl font-bold">How revenue is allocated</h3>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                A published distribution framework decides where every naira of cooperative revenue
                goes before it is earned.
              </p>
            </Reveal>
            <ul className="mt-8 space-y-6">
              {allocation.map((a, i) => (
                <Reveal as="li" key={a.label} delay={i}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-semibold">{a.label}</span>
                    <span className="font-display text-2xl text-primary">{a.value}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-growth-bright transition-[width] duration-1000"
                      style={{ width: `${a.value}%` }}
                    />
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
