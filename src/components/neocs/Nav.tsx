import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./BrandLogo";

const links = [
  { label: "The Problem", href: "#problem" },
  { label: "About", href: "#about" },
  { label: "How it Works", href: "#how" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Trust", href: "#trust" },
  { label: "FAQs", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center gap-4 px-5 transition-all duration-500 sm:px-8",
          scrolled
            ? "my-3 rounded-2xl border border-border bg-paper/90 py-3 shadow-sm backdrop-blur-xl"
            : "my-4 py-3",
        )}
      >
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <BrandLogo className="h-7 max-w-[6rem] shrink-0 rounded-md" />
          <span className="truncate text-sm font-extrabold tracking-tight text-ink">
            NEOCS
            <span className="ml-2 hidden font-medium text-ink/50 sm:inline">
              Cooperative Society
            </span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-growth focus-visible:text-growth focus-visible:outline-none"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/membership"
          className="ml-auto shrink-0 rounded-full bg-soil px-5 py-2.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] lg:ml-6"
        >
          Become a Member
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-ink lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={cn(
                "block h-px w-4 bg-current transition",
                open && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-4 bg-current transition",
                open && "-translate-y-[3px] -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          aria-label="Mobile"
          className="mx-4 rounded-2xl border border-border bg-paper/98 p-4 backdrop-blur-xl lg:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-ink/80 hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
