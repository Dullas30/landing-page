import { motion } from "motion/react";

import { Reveal } from "./primitives";

export function FinalCta() {
  return (
    <section
      id="join"
      className="relative overflow-hidden bg-[linear-gradient(90deg,#F4EFE6_0%,#A7C4A0_100%)] py-32 sm:py-44"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/18 blur-[150px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-soil-deep/70">
            Own Assets · Build Enterprises · Create Wealth · Transform Communities
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-8 max-w-3xl font-display text-[clamp(2.3rem,6.5vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.03em] text-soil-deep">
            A country builds faster when its people own the tools.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-soil-deep/76 sm:text-lg">
            NEOCS is not a place to park money. It is a movement to place productive assets in the
            hands of the Nigerians who will put them to work, and to keep the value where it is
            created.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/membership"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-soil-deep px-8 py-4 text-sm font-bold text-paper transition-transform duration-300 hover:scale-[1.03]"
            >
              Become a Member
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </a>
            <a
              href="#ecosystem"
              className="inline-flex items-center justify-center rounded-full border border-soil-deep/20 px-8 py-4 text-sm font-semibold text-soil-deep transition-colors hover:border-soil-deep/35 hover:text-soil-deep"
            >
              Explore the ecosystem
            </a>
          </div>
        </Reveal>
        <Reveal delay={4}>
          <p className="mt-8 text-xs text-soil-deep/52">
            Membership opens with identity verification. Registration and annual subscription apply
            by category.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
