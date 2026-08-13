import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Counter } from "./primitives";
import { BrandLogo } from "./BrandLogo";

const stats = [
  { value: 500000, suffix: "+", label: "Members targeted in five years" },
  { value: 100, prefix: "₦", suffix: "B", label: "Productive assets under management" },
  { value: 37, label: "States and the FCT covered" },
];

/** Original line-art: a cluster of productive machinery, drawn with the brand's own hand, not stock photography. */
function MachineryMark() {
  return (
    <svg viewBox="0 0 420 420" fill="none" className="h-full w-full" aria-hidden>
      <motion.circle
        cx="210"
        cy="210"
        r="168"
        stroke="var(--color-growth)"
        strokeOpacity="0.18"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      />
      {/* tractor */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <circle cx="120" cy="268" r="26" stroke="var(--color-soil)" strokeWidth="4" />
        <circle cx="222" cy="278" r="17" stroke="var(--color-soil)" strokeWidth="4" />
        <path
          d="M96 244 L96 214 L146 214 L168 244 L228 244"
          stroke="var(--color-soil)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M146 214 L146 186 L172 186"
          stroke="var(--color-soil)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </motion.g>
      {/* solar array */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.15 }}
      >
        <path
          d="M258 150 L340 150 L326 196 L244 196 Z"
          stroke="var(--color-growth)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M267 150 L263 196 M299 150 L292 196 M331 150 L322 196"
          stroke="var(--color-growth)"
          strokeWidth="2"
        />
        <path
          d="M299 196 L299 230"
          stroke="var(--color-growth)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </motion.g>
      {/* delivery truck */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <rect
          x="86"
          y="120"
          width="70"
          height="46"
          rx="3"
          stroke="var(--color-harvest)"
          strokeWidth="4"
        />
        <path
          d="M156 140 L188 140 L204 158 L204 166 L156 166 Z"
          stroke="var(--color-harvest)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <circle cx="112" cy="170" r="11" stroke="var(--color-harvest)" strokeWidth="4" />
        <circle cx="182" cy="170" r="11" stroke="var(--color-harvest)" strokeWidth="4" />
      </motion.g>
      {/* connecting stitches connecting capital to assets */}
      <motion.path
        d="M146 186 C 190 150, 230 150, 258 172 M172 186 C 170 220, 200 250, 222 261"
        stroke="var(--color-harvest)"
        strokeWidth="1.5"
        strokeDasharray="3 5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 1.6, delay: 1.6, ease: "easeInOut" }}
      />
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const r = 168;
        const cx = 210 + Math.cos(angle) * r;
        const cy = 210 + Math.sin(angle) * r;
        return (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r={i % 3 === 0 ? 3.5 : 2.2}
            fill={i % 2 === 0 ? "var(--color-growth-bright)" : "var(--color-harvest)"}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.9, 0.3] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: 1.8 + i * 0.15,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </svg>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const markShift = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      id="top"
      className="grain-warm relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-paper pb-16 pt-32 sm:pb-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-20 h-[34rem] w-[34rem] rounded-full bg-harvest-soft/40 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-growth/10 blur-[130px]"
      />

      <motion.div
        style={{ opacity: fade }}
        className="mx-auto grid w-full max-w-7xl gap-12 px-5 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-10 sm:px-8"
      >
        <div className="space-y-8 lg:pr-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-lg text-sm font-medium leading-relaxed text-muted-foreground sm:text-base"
          >
            Somewhere in Nigeria today, a piece of equipment that could feed, move or power a
            community sits idle because one person alone couldn't afford it.
          </motion.p>

          <h1 className="max-w-2xl space-y-2 text-[clamp(2.35rem,6vw,4.8rem)] font-black leading-[0.98] tracking-[-0.04em] text-ink">
            {["Somebody owns every machine", "Nigeria runs on."].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="block font-display"
              >
                {line}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
              className="block font-display text-growth"
            >
              What if it was you?
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="flex items-start gap-3 pt-1 sm:items-center"
          >
            <BrandLogo className="h-7 max-w-[6rem] shrink-0 rounded-md" />
            <p className="max-w-xl text-sm leading-relaxed text-foreground sm:text-base">
              This is <span className="font-bold">NEOCS</span>, the Nigeria Equipment Ownership
              Cooperative Society. Members pool capital, the cooperative buys the machinery,
              everyone shares what it earns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center"
          >
            <a
              href="/membership"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-soil px-7 py-4 text-sm font-bold text-paper transition-transform duration-300 hover:scale-[1.03]"
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
              href="#how"
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:border-growth/50 hover:text-growth"
            >
              See how it works
            </a>
          </motion.div>
        </div>

        <motion.div
          style={{ y: markShift }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
        >
          <MachineryMark />
        </motion.div>
      </motion.div>

      <motion.dl
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ opacity: fade }}
        className="mx-auto mt-16 grid w-full max-w-7xl gap-4 px-5 pt-8 sm:mt-20 sm:grid-cols-3 sm:gap-6 sm:px-8"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-border/70 bg-paper/70 p-5 backdrop-blur-sm sm:p-6"
          >
            <dt className="font-display text-2xl font-bold leading-none tracking-tight text-ink sm:text-4xl">
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </dt>
            <dd className="mt-2 max-w-[14rem] text-sm leading-relaxed text-muted-foreground text-balance sm:max-w-[16rem]">
              {s.label}
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
