import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  BadgeCheck,
  Building2,
  Landmark,
  KeyRound,
  LineChart,
  Lock,
  PiggyBank,
  ShieldCheck,
  Tractor,
  Zap,
  Users,
} from "lucide-react";

import { BrandLogo } from "./BrandLogo";
import { Reveal, SectionLabel } from "./primitives";
import { cn } from "@/lib/utils";

const naira = "\u20A6";

const membershipTypes = [
  {
    title: "Individuals",
    icon: Users,
    body: "For people aged 18 and above who can complete KYC verification and meet the required good-character and sound-mind standard.",
  },
  {
    title: "Societies / Associations",
    icon: Building2,
    body: "For registered groups and associations that can provide their entity details and complete the required verification checks.",
  },
  {
    title: "Corporate / Institutional / Strategic",
    icon: Landmark,
    body: "For corporate bodies, institutions and strategic partners that are legally registered and able to meet NEOCS onboarding requirements.",
  },
];

const fees = [
  { title: "Individual", amount: `${naira}5,000` },
  { title: "Society / Association", amount: `${naira}10,000` },
  { title: "Corporate / Institution / Strategic", amount: `${naira}20,000` },
];

const kycItems = [
  "NIN",
  "Address information",
  "Bank information",
  "Other required verification information",
];

const accessAreas = [
  {
    name: "CoopSave",
    icon: PiggyBank,
    body: "Structured thrift savings that apply at the Board-determined minimum.",
  },
  { name: "CoopLock", icon: Lock, body: "Locked savings with defined terms and clear conditions." },
  {
    name: "CoopFund",
    icon: Landmark,
    body: "Units that represent proportional interest in the productive asset pool.",
  },
  {
    name: "CoopEquip",
    icon: Tractor,
    body: "The equipment pathway for productive asset access and deployment.",
  },
  { name: "CoopQuick", icon: Zap, body: "Short-term support for stated productive purposes." },
  {
    name: "CoopProtect",
    icon: ShieldCheck,
    body: "Protection and support features for members and assets.",
  },
  { name: "CoopIntel", icon: LineChart, body: "The reporting layer that keeps members informed." },
];

const responsibilities = [
  "Provide accurate and complete information.",
  "Complete all required KYC verification.",
  "Protect login credentials, PIN and 2FA.",
  "Follow the NEOCS Bye-Laws, General Assembly decisions and Board rules.",
  "Use any approved facility for its stated productive purpose.",
];

const importantTerms = [
  {
    title: "Eligibility & KYC",
    summary:
      "Members must be 18+ or a legally registered entity, and all applications remain subject to NIN, address, bank and other verification checks.",
  },
  {
    title: "Fees & Savings",
    summary:
      `Registration and annual subscription fees are non-refundable. Regular CoopSave thrift savings apply at the minimum determined by the Board.`,
  },
  {
    title: "Digital Platform",
    summary:
      "NEOCS wallets include Main, Savings, CoopLock, Dividend, Earnings and Loan. Members must protect login details, PIN and 2FA, and verified electronic approvals carry legal validity.",
  },
  {
    title: "CoopFund & Shares",
    summary:
      "CoopFund units represent proportional interest in the productive asset pool, are generally non-transferable except as stated in the terms, and the maximum holding is 20% of paid-up share capital.",
  },
  {
    title: "Loans / Leasing / CoopQuick",
    summary:
      "Facilities must be used for the stated productive purpose, with bonds and two member sureties potentially required. Default may attract penalties, suspension, recovery action and liens as stated in the terms.",
  },
  {
    title: "Revenue Distribution",
    summary:
      "Registration fees and general revenue follow the published allocation structure, and dividends or patronage depend on surplus and regulatory approval.",
  },
  {
    title: "Data & Privacy",
    summary:
      "Member data may be collected, processed and stored for administration, credit assessment and compliance under the applicable privacy framework and consent rules.",
  },
  {
    title: "Termination / Expulsion",
    summary:
      "Membership may end through death, resignation or expulsion for specified breaches, with outstanding obligations affecting final balances as stated in the terms.",
  },
  {
    title: "Governance & Disputes",
    summary:
      "Members are bound by the Bye-Laws, General Assembly decisions and Board or Supervisory Committee directives, with disputes handled through the stated resolution process.",
  },
  {
    title: "Liability & Agreement",
    summary:
      "The Terms, Bye-Laws and Board rules form the membership agreement, and NEOCS liability is limited as described in the source document.",
  },
];

const termsSections = [
  {
    title: "Eligibility & KYC",
    content:
      `Eligibility: 18+ (or legally registered entity), sound mind/good character; membership subject to NIN, address, bank and other KYC verification.`,
  },
  {
    title: "Fees & Savings",
    content:
      `Non-refundable registration/annual subscription: Individual ${naira}5,000; Society/Association ${naira}10,000; Corporate/Institution/Strategic ${naira}20,000. Regular CoopSave thrift savings apply at Board-determined minimum.`,
  },
  {
    title: "Digital Platform",
    content:
      "NEOCS wallets: Main, Savings, CoopLock, Dividend, Earnings and Loan. Members must protect login/PIN/2FA. Verified electronic signatures/approvals have the same legal validity as physical signatures.",
  },
  {
    title: "CoopFund & Shares",
    content:
      "CoopFund units represent proportional interest in the productive asset pool; generally non-transferable except to a registered nominee or with Board approval. Maximum holding: 20% of paid-up share capital. Founders' allocation to Century Information System Ltd: 1%/10,000 units, activating after 2 years and only after members acquire 100,000 units.",
  },
  {
    title: "Loans / Leasing / CoopQuick",
    content:
      "Facilities must be used for the stated productive purpose. Required: bonds and two sureties who are members in good standing. Default may attract twice-normal penal interest, suspension, recovery action and lien on dividends/savings.",
  },
  {
    title: "Revenue Distribution",
    content:
      "Registration fees: 40% direct referral, 20% upline referral, 20% CoopFund, 20% Cooperative Reserve. General revenue: 60% Dividend Pool, 20% Growth & Stabilization Reserve, 10% Management/Operations/Technology, 10% Asset Expansion. Dividends/patronage depend on surplus and regulatory approval.",
  },
  {
    title: "Data & Privacy",
    content:
      "Member data may be collected/processed/stored for administration, credit assessment and compliance, protected under NDPR. Disclosure is by consent, law or approved credit-reference arrangements, including NELGRO.",
  },
  {
    title: "Termination / Expulsion",
    content:
      "Termination by death, resignation (1 month's notice and no outstanding debt) or expulsion for specified breaches including persistent non-saving, default, fraud, misuse of equipment or conduct prejudicial to the Society. Credit balance goes to nominee/legal representative less amounts owed.",
  },
  {
    title: "Governance & Disputes",
    content:
      "Members must comply with Bye-Laws, General Assembly decisions and directives of the Board, Supervisory Committee and Director of Cooperative Services. Disputes go first to Board mediation; unresolved matters proceed to the Director of Cooperative Services under Section 60, Lagos State Cooperative Societies Law 2022.",
  },
  {
    title: "Liability & Agreement",
    content:
      "NEOCS is not liable for losses from market fluctuations, depreciation, force majeure or member non-compliance, except gross negligence, fraud or wilful misconduct by authorised representatives. These Terms, Bye-Laws and Board rules constitute the entire membership agreement.",
  },
];

function TopBar() {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 pt-6 sm:px-8">
      <Link to="/" className="flex items-center gap-3">
        <BrandLogo className="h-7 max-w-[6rem] shrink-0 rounded-md" />
        <span className="text-sm font-extrabold tracking-tight text-ink">NEOCS</span>
      </Link>
      <div className="flex items-center gap-3">
        <Link
          to="/membership/terms"
          className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-growth/40 hover:text-growth"
        >
          View terms
        </Link>
        <Link
          to="/"
          className="hidden rounded-full bg-soil px-4 py-2 text-sm font-semibold text-paper transition-transform hover:scale-[1.02] sm:inline-flex"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

function TermsAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mt-10 rounded-[2rem] border border-border bg-card p-4 shadow-[var(--shadow-lift)] sm:p-6">
      <ul>
        {importantTerms.map((term, index) => {
          const isOpen = open === index;
          return (
            <li key={term.title} className={cn(index !== 0 && "border-t border-border/70")}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span className="text-base font-bold text-ink">{term.title}</span>
                <span
                  className={cn(
                    "mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-sm transition-transform duration-300",
                    isOpen && "rotate-45 border-growth text-growth",
                  )}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-3xl pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {term.summary}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function MembershipExperience() {
  return (
    <div id="top" className="grain-warm min-h-screen bg-paper text-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-growth/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-32 h-[26rem] w-[26rem] rounded-full bg-harvest-soft/30 blur-[120px]"
      />

      <TopBar />

      <main>
        <section className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
            <div className="space-y-8">
              <Reveal>
                <SectionLabel>Membership</SectionLabel>
              </Reveal>
              <Reveal delay={1}>
                <h1 className="max-w-3xl font-display text-[clamp(2.5rem,6vw,4.8rem)] font-bold leading-[0.98] tracking-[-0.04em]">
                  Become part of collective ownership.
                </h1>
              </Reveal>
              <Reveal delay={2}>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  NEOCS membership is the starting point for participating in the cooperative
                  ecosystem. It opens the door to structured membership, verified access and the
                  wider system of productive asset ownership.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  By submitting an application and paying the applicable fee, applicants confirm
                  that they have read, understood and agree to the Terms, the NEOCS Bye-Laws and
                  applicable Board rules.
                </p>
              </Reveal>

              <Reveal delay={4}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#application"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-soil px-7 py-4 text-sm font-bold text-paper transition-transform duration-300 hover:scale-[1.03]"
                  >
                    Continue to Membership
                    <span
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    >
                      →
                    </span>
                  </a>
                  <Link
                    to="/membership/terms"
                    className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-growth/50 hover:text-growth"
                  >
                    View Membership Terms
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={2} className="relative">
              <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-lift)] sm:p-8">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                  Membership at a glance
                </p>
                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Eligibility", value: "18+ or registered entity" },
                    { label: "Verification", value: "KYC required" },
                    { label: "Fees", value: "Category based" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-border bg-background p-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-growth">
                        {item.label}
                      </p>
                      <p className="mt-3 text-sm font-bold leading-snug text-ink">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-border bg-secondary/50 p-5">
                  <p className="text-sm font-semibold text-ink">Important</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Registration and annual subscription fees are non-refundable. CoopSave thrift
                    savings apply at the minimum determined by the Board.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionLabel>Who can join</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-7 max-w-3xl font-display text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.03]">
                Simple eligibility, clearly stated.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {membershipTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <Reveal
                    key={type.title}
                    delay={index}
                    className="rounded-[1.8rem] border border-border bg-card p-7 shadow-[var(--shadow-lift)]"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-growth/10 text-growth">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-xl font-bold">{type.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {type.body}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-paper-dim py-24 sm:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-harvest-soft/20 blur-[110px]"
          />
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionLabel>Membership fees</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-7 max-w-3xl font-display text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.03]">
                Fees are category-based and non-refundable.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {fees.map((fee, index) => (
                <Reveal
                  key={fee.title}
                  delay={index}
                  className="rounded-[1.8rem] border border-border bg-card p-7 shadow-[var(--shadow-lift)]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    {fee.title}
                  </p>
                  <p className="mt-5 font-display text-4xl font-bold text-growth">{fee.amount}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Registration and annual subscription fees apply for this membership category.
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <SectionLabel>What you'll need</SectionLabel>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-7 max-w-xl font-display text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.03]">
                  KYC first, verification always.
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Membership is subject to verification. The application process will ask for the
                  information NEOCS needs to confirm identity, address and banking details.
                </p>
              </Reveal>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {kycItems.map((item, index) => (
                <Reveal
                  key={item}
                  delay={index}
                  className="rounded-[1.6rem] border border-border bg-card p-6 shadow-[var(--shadow-lift)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-soil/10 text-soil">
                      <KeyRound className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="text-base font-bold">{item}</p>
                  </div>
                </Reveal>
              ))}
              <Reveal className="sm:col-span-2 rounded-[1.6rem] border border-border bg-secondary/50 p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-growth" aria-hidden />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Do not create a fake verification form yet. This page is a clean frontend
                    preview of the membership flow that can connect to registration later.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-secondary/30 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionLabel>What members access</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-7 max-w-3xl font-display text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.03]">
                The member-facing ecosystem, in one place.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                These areas are part of the NEOCS experience and are presented here as the
                cooperative platform members will use.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {accessAreas.map((area, index) => (
                <Reveal
                  key={area.name}
                  delay={index}
                  className="rounded-[1.6rem] border border-border bg-card p-6 shadow-[var(--shadow-lift)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-bold">{area.name}</h3>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-growth/10 text-growth">
                      <area.icon className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{area.body}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-8 rounded-[1.8rem] border border-border bg-card p-6 shadow-[var(--shadow-lift)]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-soil/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-soil">
                  Wallets
                </span>
                <span className="text-sm text-muted-foreground">
                  Main · Savings · CoopLock · Dividend · Earnings · Loan
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-background py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <Reveal>
                <SectionLabel>Member responsibilities</SectionLabel>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-7 max-w-xl font-display text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.03]">
                  Your membership, your responsibility.
                </h2>
              </Reveal>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {responsibilities.map((item, index) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={index}
                  className="rounded-[1.6rem] border border-border bg-card p-6 shadow-[var(--shadow-lift)]"
                >
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-growth" aria-hidden />
                    <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-paper-dim py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionLabel>Important terms</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-7 max-w-3xl font-display text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.03]">
                Expand the parts you want to review.
              </h2>
            </Reveal>
            <TermsAccordion />
            <Reveal delay={2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/membership/terms"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-soil px-7 py-4 text-sm font-bold text-paper transition-transform duration-300 hover:scale-[1.03]"
                >
                  Read Full Membership Terms & Conditions
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
                <a
                  href="#application"
                  className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-growth/50 hover:text-growth"
                >
                  Continue to Application Preview
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionLabel>Member declaration</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-7 max-w-3xl font-display text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.03]">
                A preview of the future application stage.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal className="rounded-[1.8rem] border border-border bg-card p-7 shadow-[var(--shadow-lift)]">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  The formal membership application will require the applicant to confirm that the
                  information supplied is true, complete and accurate and agree to the NEOCS
                  Terms, Bye-Laws and applicable rules.
                </p>
                <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-5">
                  <p className="text-sm font-semibold text-ink">Declaration text</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    I confirm that the information supplied in my application is true, complete and
                    accurate, and I agree to be bound by these Terms and Conditions and the NEOCS
                    Bye-Laws.
                  </p>
                </div>
              </Reveal>

              <div id="application">
                <Reveal className="rounded-[1.8rem] border border-border bg-card p-7 shadow-[var(--shadow-lift)]">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    Application coming soon
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    This is a placeholder state for the future registration flow. It keeps the
                    page ready for backend integration without pretending the application is live
                    yet.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {["Full name", "Membership category", "Email / phone", "KYC status"].map((f) => (
                      <div key={f} className="rounded-2xl border border-dashed border-border p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-growth">
                          {f}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">Placeholder field</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(90deg,#F4EFE6_0%,#A7C4A0_100%)] py-24 sm:py-32">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/18 blur-[140px]"
            animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.9, 0.55] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
            <Reveal>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-soil-deep/70">
                Ready to become part of NEOCS?
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-8 font-display text-[clamp(2.3rem,6.5vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.03em] text-soil-deep">
                Begin membership, then continue when registration opens.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-soil-deep/76 sm:text-lg">
                Membership starts here. The next step is a clean application flow that can be
                connected later without redesigning the page.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#application"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-soil-deep px-8 py-4 text-sm font-bold text-paper transition-transform duration-300 hover:scale-[1.03]"
                >
                  Begin Membership
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </a>
                <Link
                  to="/membership/terms"
                  className="inline-flex items-center justify-center rounded-full border border-soil-deep/20 px-8 py-4 text-sm font-semibold text-soil-deep transition-colors hover:border-soil-deep/35 hover:text-soil-deep"
                >
                  Review Terms
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}

export function MembershipTermsPage() {
  return (
    <div id="top" className="grain-warm min-h-screen bg-paper text-ink">
      <TopBar />
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-10 sm:px-8 sm:pb-32">
        <Reveal>
          <SectionLabel>Full Terms</SectionLabel>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-7 font-display text-[clamp(2.3rem,6vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.04em]">
            Membership Terms & Conditions
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Source text consolidated from the membership document. The wording below preserves the
            meaning and structure of the supplied terms.
          </p>
        </Reveal>

        <div className="mt-10 space-y-4">
          <Reveal className="rounded-[1.8rem] border border-border bg-card p-7 shadow-[var(--shadow-lift)]">
            <p className="text-sm leading-relaxed text-muted-foreground">
              NEOCS MEMBERSHIP TERMS & CONDITIONS
              <br />
              Nigeria Equipment Ownership Cooperative Society (NEOCS) Multipurpose Cooperative
              Society Limited
              <br />
              By submitting this application and paying the applicable fee, the applicant confirms
              that they have read, understood and agree to these Terms, the NEOCS Bye-Laws and
              applicable Board rules. Source terms consolidated from the full membership document.
            </p>
          </Reveal>

          {termsSections.map((section, index) => (
            <Reveal
              key={section.title}
              delay={index}
              className="rounded-[1.8rem] border border-border bg-card p-7 shadow-[var(--shadow-lift)]"
            >
              <h2 className="text-lg font-bold">{section.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {section.content}
              </p>
            </Reveal>
          ))}

          <Reveal className="rounded-[1.8rem] border border-border bg-card p-7 shadow-[var(--shadow-lift)]">
            <h2 className="text-lg font-bold">Member Declaration</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              I confirm that the information supplied in my application is true, complete and
              accurate, and I agree to be bound by these Terms and Conditions and the NEOCS
              Bye-Laws.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <p>Full Name: ____________________________</p>
              <p>Membership Category: ________________</p>
              <p>Signature: ____________________________</p>
              <p>Date: __________________</p>
              <p>Witness Name: ____________________________</p>
              <p>Witness Signature: ________________</p>
            </div>
          </Reveal>

          <Reveal className="rounded-[1.8rem] border border-border bg-card p-7 shadow-[var(--shadow-lift)]">
            <p className="text-sm leading-relaxed text-muted-foreground">
              For enquiries: secretariat@neocs.ng | www.neocs.ng | NEOCS Multipurpose Cooperative
              Society Limited
            </p>
          </Reveal>
        </div>

        <Reveal delay={1} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/membership"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-soil px-7 py-4 text-sm font-bold text-paper transition-transform duration-300 hover:scale-[1.03]"
          >
            Back to Membership
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </Link>
          <a
            href="#top"
            className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-growth/50 hover:text-growth"
          >
            Back to Top
          </a>
        </Reveal>
      </main>
    </div>
  );
}
