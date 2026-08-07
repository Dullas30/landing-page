import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal, SectionLabel } from "./primitives";

const stages = [
  {
    n: "01",
    title: "People",
    body: "Individuals, cooperatives, businesses and institutions register, verify their identity and begin contributing, the first, smallest unit the whole system runs on.",
  },
  {
    n: "02",
    title: "Collective ownership",
    body: "Savings, locked contributions and fund units combine into collective capital far larger than any single member could raise alone.",
  },
  {
    n: "03",
    title: "Productive assets",
    body: "The cooperative buys equipment and shared infrastructure through vetted OEMs, suppliers and leasing partners, tractors, trucks, solar systems, industrial plant.",
  },
  {
    n: "04",
    title: "Economic activity",
    body: "Equipment is leased, financed and deployed to enterprises across the country, turning idle capital into daily, working output.",
  },
  {
    n: "05",
    title: "Communities",
    body: "As assets are put to work locally, they create jobs, raise output and strengthen the small businesses that anchor everyday Nigerian life.",
  },
  {
    n: "06",
    title: "Shared prosperity",
    body: "Revenue returns as dividends, unit growth and reserves, and the cycle repeats, larger each time, with more of the country holding a stake.",
  },
];

// Six nodes, bottom (People) to top (Shared prosperity), growth reads upward, like a plant.
const nodes = [
  { x: 150, y: 860 },
  { x: 232, y: 706 },
  { x: 96, y: 552 },
  { x: 216, y: 398 },
  { x: 104, y: 244 },
  { x: 150, y: 80 },
];

function chainPath() {
  let d = `M ${nodes[0]!.x} ${nodes[0]!.y}`;
  for (let i = 1; i < nodes.length; i++) {
    const prev = nodes[i - 1]!;
    const cur = nodes[i]!;
    const midY = (prev.y + cur.y) / 2;
    d += ` C ${prev.x} ${midY}, ${cur.x} ${midY}, ${cur.x} ${cur.y}`;
  }
  return d;
}

function GrowthChain({ progress }: { progress: import("motion/react").MotionValue<number> }) {
  const pathD = chainPath();
  return (
    <svg viewBox="0 0 300 940" fill="none" className="h-full w-full">
      <path d={pathD} stroke="var(--color-border)" strokeWidth="2" strokeLinecap="round" />
      <motion.path
        d={pathD}
        stroke="var(--color-growth)"
        strokeWidth="3"
        strokeLinecap="round"
        style={{ pathLength: progress }}
      />
      {nodes.map((pt, i) => {
        const nodeProgress = useTransform(progress, [Math.max(0, (i - 0.4) / 5.5), (i + 0.4) / 5.5], [0, 1]);
        const scale = useTransform(nodeProgress, [0, 1], [0.5, 1]);
        const opacity = useTransform(nodeProgress, [0, 1], [0.35, 1]);
        return (
          <motion.g key={i} style={{ scale, opacity }}>
            <circle cx={pt.x} cy={pt.y} r="26" fill="var(--color-paper)" stroke="var(--color-border)" strokeWidth="1.5" />
            <circle cx={pt.x} cy={pt.y} r="9" fill={i === nodes.length - 1 ? "var(--color-harvest)" : "var(--color-growth)"} />
            <text x={pt.x} y={pt.y + 44} textAnchor="middle" fill="var(--color-ink)" fontSize="11" fontWeight="700">
              {stages[i]!.n}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 55%"] });

  return (
    <section id="how" className="relative overflow-hidden bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>How NEOCS Works</SectionLabel>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-7 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.03]">
            One person can't move much. <span className="text-growth">A country can.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Watch the same loop that repeats at national scale, from one member's first contribution to
            prosperity shared across communities.
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-16 grid gap-10 sm:mt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:h-[min(80vh,700px)]">
            <GrowthChain progress={scrollYProgress} />
          </div>

          <ol className="space-y-16 sm:space-y-20 lg:py-10">
            {stages.map((s, i) => (
              <Reveal as="li" key={s.n} delay={0}>
                <span className="font-display text-sm font-bold tracking-widest text-growth">{s.n}</span>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{s.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {s.body}
                </p>
                {i === stages.length - 1 && (
                  <p className="mt-6 max-w-md rounded-2xl border border-harvest/30 bg-harvest-soft/25 p-5 text-sm leading-relaxed text-foreground">
                    Every cycle strengthens the next: more members, more assets, more revenue, flowing back to
                    the people who put the capital to work.
                  </p>
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
