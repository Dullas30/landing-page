import { motion } from "motion/react";
import {
  Coins, Wrench, Users2, Building2, Infinity as InfinityIcon,
  Sprout, Briefcase, GraduationCap, Store, HandCoins, Landmark, Factory,
} from "lucide-react";
import { Reveal, SectionLabel, Counter } from "./primitives";

const benefits = [
  { icon: Coins, title: "Financial", body: "Dividend income, growth in the value of your units, patronage rewards and steadily compounding savings." },
  { icon: Wrench, title: "Business", body: "Access to equipment, affordable financing, enterprise development support and new market opportunities." },
  { icon: Users2, title: "Community", body: "Cooperative welfare support, training and capacity building, and development programmes where members live." },
  { icon: Building2, title: "Enterprise", body: "Shared equipment hubs and productive infrastructure that let small operators compete for bigger work." },
  { icon: InfinityIcon, title: "Long term ownership", body: "A stake that can grow with the cooperative and be passed on, ownership that outlives a single season." },
];

const audiences = [
  { icon: Briefcase, label: "Entrepreneurs", note: "Founders scaling output" },
  { icon: Sprout, label: "Farmers", note: "Mechanised, year-round" },
  { icon: GraduationCap, label: "Professionals & Students", note: "Early, disciplined ownership" },
  { icon: Store, label: "Artisans & Traders", note: "Tools that pay for themselves" },
  { icon: Factory, label: "SMEs & Startups", note: "Capacity without heavy debt" },
  { icon: HandCoins, label: "Cooperatives & Trade Groups", note: "Collective buying power" },
  { icon: Building2, label: "Companies", note: "Fleet and plant access" },
  { icon: Landmark, label: "Institutions & Partners", note: "OEMs, lessors, development bodies" },
];

export function Benefits() {
  return (
    <>
      <section className="relative bg-secondary/40 py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionLabel>Member Benefits</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-7 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.03]">
              Value that arrives in <span className="text-growth">more than one form.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Featured benefit, told as a stat rather than another icon card */}
            <Reveal className="flex flex-col justify-between rounded-3xl bg-soil p-8 text-paper sm:p-10">
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
                  <Coins className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-7 text-xl font-bold">Financial</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/70">{benefits[0]!.body}</p>
              </div>
              <p className="mt-10 font-display text-4xl font-bold text-harvest-soft">
                <Counter value={60} suffix="%" /> to dividends
              </p>
            </Reveal>

            <ul className="grid gap-4 sm:grid-cols-2">
              {benefits.slice(1).map((b, i) => {
                const Icon = b.icon;
                return (
                  <Reveal as="li" key={b.title} delay={i + 1}>
                    <motion.article
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      className="h-full rounded-3xl border border-border bg-card p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                        <Icon className="h-4.5 w-4.5" aria-hidden />
                      </span>
                      <h3 className="mt-6 text-lg font-bold">{b.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                    </motion.article>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section id="join-who" className="relative bg-background py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:items-start lg:gap-16">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <SectionLabel>Who Can Join</SectionLabel>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-7 font-display text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.03]">
                  Open to <span className="text-growth">anyone who produces.</span>
                </h2>
              </Reveal>
            </div>

            {/* A flowing cluster, not a grid of identical cards, varied chip sizes read like a crowd, not a spec sheet. */}
            <ul className="flex flex-wrap gap-3">
              {audiences.map((a, i) => {
                const Icon = a.icon;
                const large = i === 0 || i === 5;
                return (
                  <Reveal
                    as="li"
                    key={a.label}
                    delay={i * 0.5}
                    className={large ? "basis-full sm:basis-[calc(50%-0.375rem)]" : "basis-[calc(50%-0.375rem)] sm:basis-[calc(33%-0.5rem)]"}
                  >
                    <div className="group flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary">
                      <Icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-growth transition-transform duration-300 group-hover:scale-110" aria-hidden />
                      <div>
                        <h3 className="text-sm font-bold leading-snug">{a.label}</h3>
                        <p className="mt-1 text-xs text-muted-foreground">{a.note}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
