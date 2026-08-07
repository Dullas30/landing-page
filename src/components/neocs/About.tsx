import { motion } from "motion/react";
import { Reveal, SectionLabel } from "./primitives";

const pillars = [
  { title: "Collective ownership", body: "Many small contributions become one large pool, and that pool buys real, income generating assets held for members.", big: true },
  { title: "Productive assets", body: "Tractors, trucks, solar systems, medical and industrial equipment: things that work, earn and hold value." },
  { title: "Enterprise growth", body: "Members reach the equipment they need to expand output, win contracts and employ more people." },
  { title: "Shared prosperity", body: "Earnings flow back as dividends, unit value growth, patronage rewards and welfare support." },
];

const sectors = [
  "Agriculture", "Transport & Logistics", "Energy & Power", "Healthcare",
  "Construction", "Manufacturing", "Mining", "Education",
  "Fashion & Beauty", "Media & Sport", "ICT & Telecoms", "MSMEs",
];

/** An original radial diagram, twelve sectors orbiting one cooperative core. Not a stock map. */
function SectorBloom() {
  return (
    <svg viewBox="0 0 400 400" fill="none" className="h-full w-full">
      <circle cx="200" cy="200" r="150" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="2 6" />
      <circle cx="200" cy="200" r="94" stroke="var(--color-border)" strokeWidth="1" />
      {sectors.map((s, i) => {
        const angle = (i / sectors.length) * Math.PI * 2 - Math.PI / 2;
        const r = 150;
        const x = 200 + Math.cos(angle) * r;
        const y = 200 + Math.sin(angle) * r;
        return (
          <g key={s}>
            <line x1="200" y1="200" x2={x} y2={y} stroke="var(--color-growth)" strokeOpacity="0.15" strokeWidth="1" />
            <motion.circle
              cx={x} cy={y} r="7"
              fill={i % 3 === 0 ? "var(--color-growth)" : i % 3 === 1 ? "var(--color-harvest)" : "var(--color-soil)"}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "backOut" }}
            />
          </g>
        );
      })}
      <circle cx="200" cy="200" r="46" fill="var(--color-soil)" />
      <text x="200" y="196" textAnchor="middle" fill="var(--color-paper)" fontSize="12" fontWeight="800" letterSpacing="0.5">
        NEOCS
      </text>
      <text x="200" y="212" textAnchor="middle" fill="var(--color-harvest-soft)" fontSize="8" letterSpacing="1">
        THE CORE
      </text>
    </svg>
  );
}

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper-dim py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <SectionLabel>Introducing NEOCS</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-7 font-display text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.05]">
                A cooperative for the things that produce.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
                The Nigeria Equipment Ownership Cooperative Society is a national platform where members save
                together, own together and grow together. No jargon, no gatekeeping. One structured route from
                everyday contributions to a share in a working asset base spanning the country.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                Our purpose is simple: turn millions of Nigerians from consumers of equipment into owners of it.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={i}
                  className={`rounded-2xl border border-border bg-card p-6 ${p.big ? "sm:col-span-2" : ""}`}
                >
                  <h3 className="text-sm font-bold uppercase tracking-wider text-growth">{p.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={2} className="relative lg:mt-10">
            <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-lift)]">
              <SectorBloom />
            </div>
            <div className="mt-8 lg:absolute lg:-bottom-10 lg:-left-8 lg:mt-0 lg:max-w-[15rem] lg:rounded-2xl lg:border lg:border-border lg:bg-paper lg:p-5 lg:shadow-[var(--shadow-lift)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Sectors we build for
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {sectors.slice(0, 6).map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/75"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
