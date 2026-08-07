import { Reveal, SectionLabel } from "./primitives";

const frictions = [
  {
    stat: "40M+",
    title: "Small businesses, limited tools",
    body: "Nigeria has one of the largest MSME populations on the continent. Most operate without the machinery that would multiply their output.",
    span: "lg:col-span-7",
  },
  {
    stat: "₦",
    title: "Equipment is priced out of reach",
    body: "A tractor, a generator, a delivery van, a milling line: the assets that turn effort into income sit far beyond what one person can fund alone.",
    span: "lg:col-span-5",
  },
  {
    stat: "%",
    title: "Financing costs more than it returns",
    body: "Where credit exists, the terms rarely fit productive work. Collateral requirements, short tenors and high rates stall growth before it starts.",
    span: "lg:col-span-5",
  },
  {
    stat: "0",
    title: "Effort without ownership",
    body: "Millions rent, hire or borrow the tools they use daily. The work compounds, but the asset, and the wealth it builds, never becomes theirs.",
    span: "lg:col-span-7",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden bg-background py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent blur-[110px] opacity-70"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <SectionLabel>The Challenge</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-7 font-display text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.02]">
                The ideas are here.
                <br />
                <span className="text-growth">The equipment is not.</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
                Nigeria's growth bottleneck is not ambition or ability. It is access to the productive assets
                that turn enterprise into output, and output into lasting wealth.
              </p>
            </Reveal>
          </div>

          <ul className="grid gap-4 lg:grid-cols-12">
            {frictions.map((f, i) => (
              <Reveal
                as="li"
                key={f.title}
                delay={i}
                className={`${f.span} rounded-3xl border border-border bg-card p-8 transition-colors hover:bg-secondary sm:p-10`}
              >
                <span className="font-display text-4xl font-semibold text-growth/45">{f.stat}</span>
                <h3 className="mt-6 text-lg font-bold leading-snug">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
