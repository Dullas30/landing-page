import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, SectionLabel } from "./primitives";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What exactly is NEOCS?",
    a: "The Nigeria Equipment Ownership Cooperative Society is a national cooperative that lets Nigerians pool capital and collectively own productive assets (equipment, machinery, vehicles and shared infrastructure) then share in the income those assets generate.",
  },
  {
    q: "How does it work in practice?",
    a: "You join as a member and contribute through structured savings or fund units. Contributions are pooled into collective capital, the cooperative acquires productive assets, those assets earn revenue through leasing and financing, and the revenue returns to members through a published distribution framework.",
  },
  {
    q: "How are productive assets acquired?",
    a: "Assets are selected and reviewed by the Investment Committee, then acquired through vetted OEMs, equipment suppliers and leasing partners. They are held by the cooperative and deployed to members and enterprises through purchase, rental, lease to use or lease to own arrangements.",
  },
  {
    q: "How are members kept informed?",
    a: "Through the Coop Intel dashboard, members can see assets under management, the equipment portfolio, revenue performance, expenditure, reserve funds, dividend history and fund performance reports, plus formal reporting at the General Assembly.",
  },
  {
    q: "Who can become a member?",
    a: "Individuals (entrepreneurs, artisans, farmers, professionals, traders, students and workers) as well as registered cooperatives, community associations, trade groups, SMEs, startups, companies, institutions and strategic partners such as OEMs and leasing companies.",
  },
  {
    q: "What does membership require?",
    a: "A registration fee and annual subscription according to your membership category, plus standard verification: NIN, a valid means of identification, address and utility bill confirmation, a passport photograph and bank verification.",
  },
  {
    q: "How is NEOCS governed?",
    a: "By a cooperative governance framework: the General Assembly, a Board of Directors, and Supervisory, Investment, Audit & Risk, and Technology & Innovation committees, each with defined oversight responsibilities.",
  },
  {
    q: "Who is behind NEOCS?",
    a: "NEOCS is promoted by Century Information System Ltd (CIS) as founder, promoter and technical sponsor, responsible for concept development, legal structuring, platform development and ecosystem partnerships.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-secondary/40 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <SectionLabel>Questions</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-7 font-display text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.03]">
                Clear answers, <span className="text-growth">plainly said.</span>
              </h2>
            </Reveal>
          </div>

          <ul>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span className="text-base font-bold sm:text-lg">{f.q}</span>
                      <span
                        className={cn(
                          "mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-sm transition-transform duration-300",
                          isOpen && "rotate-45 border-primary text-primary",
                        )}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
