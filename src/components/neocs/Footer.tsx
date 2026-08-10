import { BrandLogo } from "./BrandLogo";

const columns = [
  {
    title: "Cooperative",
    links: ["About NEOCS", "Vision & Mission", "Governance", "Five Year Targets", "Impact"],
  },
  {
    title: "Programmes",
    links: ["Coop Save", "Coop Lock", "Coop Fund", "Coop Equip", "Coop Quick", "Coop Protect", "Coop Intel"],
  },
  {
    title: "Members",
    links: ["Who Can Join", "Membership Categories", "Benefits", "FAQs", "Member Support"],
  },
];

export function Footer() {
  return (
    <footer className="bg-[linear-gradient(90deg,#D9E4CF_0%,#A7C4A0_100%)] py-16 text-soil-deep sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo className="h-9 w-auto rounded-md object-contain shadow-[0_12px_28px_rgba(0,0,0,0.08)]" />
              <span className="text-sm font-extrabold tracking-wide text-soil-deep">NEOCS</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-soil-deep/72">
              Nigeria Equipment Ownership Cooperative Society, a national productive asset ownership and
              community wealth creation cooperative.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic text-soil-deep/64">
              <p>Central Business District, Abuja, FCT</p>
              <p>
                <a href="mailto:hello@neocs.ng" className="transition-colors hover:text-growth">
                  hello@neocs.ng
                </a>
              </p>
              <p>
                <a href="tel:+2348088369114" className="transition-colors hover:text-growth">
                  +234 808 836 9114
                </a>
              </p>
            </address>
          </div>

          <nav className="grid gap-10 sm:grid-cols-3" aria-label="Footer">
            {columns.map((c) => (
              <div key={c.title}>
                <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-growth">
                  {c.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#top" className="text-sm text-soil-deep/68 transition-colors hover:text-soil-deep">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 pt-8 text-xs text-soil-deep/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nigeria Equipment Ownership Cooperative Society. All rights reserved.</p>
          <p>Promoted by Century Information System Ltd (CIS)</p>
        </div>
      </div>
    </footer>
  );
}
