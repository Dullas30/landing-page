import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PiggyBank, Lock, Landmark, Tractor, Zap, ShieldCheck, LineChart } from "lucide-react";
import { Reveal, SectionLabel } from "./primitives";
import { cn } from "@/lib/utils";

const modules = [
  {
    id: "save",
    name: "Coop Save",
    icon: PiggyBank,
    tag: "Build ownership capital",
    body: "Structured daily, weekly or monthly savings with auto save, personal targets, reminders and savings rewards. This is where membership capital begins.",
    points: ["Auto save & targets", "Savings rewards", "Contribution reminders"],
  },
  {
    id: "lock",
    name: "Coop Lock",
    icon: Lock,
    tag: "Fixed term commitment",
    body: "Members lock funds for a defined tenor between 90 and 360 days to support asset acquisition, with terms and any early termination conditions stated upfront.",
    points: ["90 to 360 day tenors", "Transparent terms", "Clear exit conditions"],
  },
  {
    id: "fund",
    name: "Coop Fund",
    icon: Landmark,
    tag: "National Equipment Ownership Fund",
    body: "The flagship fund. Members accumulate units that finance equipment acquisition, leasing and community equipment hubs across Nigeria.",
    points: ["Unit based ownership", "₦20B initial fund target", "₦100B long term ambition"],
  },
  {
    id: "equip",
    name: "Coop Equip",
    icon: Tractor,
    tag: "National equipment marketplace",
    body: "Buy, rent, lease to use or lease to own equipment across agriculture, construction, health, energy, ICT, transport, mining and the creative industry.",
    points: ["Lease to own options", "OEM member pricing", "Financing at the point of need"],
  },
  {
    id: "quick",
    name: "Coop Quick",
    icon: Zap,
    tag: "Short term liquidity",
    body: "A short, interest free facility drawn against a member's own verified balances, designed for genuine emergencies, not long term borrowing.",
    points: ["0% interest", "Up to 30 days", "Drawn against your balance"],
  },
  {
    id: "protect",
    name: "Coop Protect",
    icon: ShieldCheck,
    tag: "Welfare & asset protection",
    body: "Equipment insurance, business protection services, group health partnerships and member support programmes that keep enterprises standing.",
    points: ["Equipment insurance", "Group health partnerships", "Member support"],
  },
  {
    id: "intel",
    name: "Coop Intel",
    icon: LineChart,
    tag: "Open reporting dashboard",
    body: "The transparency layer. Members see assets under management, portfolio, revenue, expenditure, reserves, dividend history and fund performance.",
    points: ["Assets under management", "Revenue & expenditure", "Dividend history"],
  },
];

export function Ecosystem() {
  const [active, setActive] = useState(modules[0]!.id);
  const current = modules.find((m) => m.id === active)!;

  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-[linear-gradient(90deg,#F4EFE6_0%,#A7C4A0_100%)] py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[30rem] w-[30rem] rounded-full bg-white/18 blur-[140px]"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel tone="dark">The Ecosystem</SectionLabel>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-7 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.03] text-soil-deep">
            Seven programmes.
            <span className="text-growth"> One connected system.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-soil-deep/78">
            Each part of NEOCS feeds the next: savings become capital, capital becomes assets, assets become
            income, and reporting keeps all of it in plain view.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {modules.map((m) => {
              const Icon = m.icon;
              const isActive = m.id === active;
              return (
                <li key={m.id} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    onClick={() => setActive(m.id)}
                    aria-pressed={isActive}
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-all duration-300",
                      isActive
                        ? "border-growth/25 bg-white/34 text-soil-deep"
                        : "border-soil-deep/10 text-soil-deep/60 hover:border-soil-deep/20 hover:text-soil-deep",
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-colors",
                        isActive ? "bg-growth/12 text-growth" : "bg-white/45 text-soil-deep/45",
                      )}
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block whitespace-nowrap text-sm font-bold lg:whitespace-normal">{m.name}</span>
                      <span className="hidden text-xs text-soil-deep/46 lg:block">{m.tag}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="relative min-h-[22rem] rounded-3xl border border-white/35 bg-white/38 p-8 shadow-[0_24px_60px_-28px_rgba(20,30,20,0.16)] backdrop-blur-[12px] sm:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-growth">{current.tag}</p>
                <h3 className="mt-4 text-3xl font-extrabold text-soil-deep sm:text-4xl">{current.name}</h3>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-soil-deep/76">{current.body}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                  {current.points.map((p) => (
                    <li key={p} className="rounded-xl border border-white/30 bg-white/56 px-4 py-3 text-xs font-medium text-soil-deep/72">
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
