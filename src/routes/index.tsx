import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/neocs/Nav";
import { Hero } from "@/components/neocs/Hero";
import { Problem } from "@/components/neocs/Problem";
import { About } from "@/components/neocs/About";
import { HowItWorks } from "@/components/neocs/HowItWorks";
import { Ecosystem } from "@/components/neocs/Ecosystem";
import { Trust } from "@/components/neocs/Trust";
import { Benefits } from "@/components/neocs/Benefits";
import { Faq } from "@/components/neocs/Faq";
import { FinalCta } from "@/components/neocs/FinalCta";
import { Footer } from "@/components/neocs/Footer";

const title = "NEOCS Nigeria Equipment Ownership Cooperative Society";
const description =
  "NEOCS lets Nigerians collectively own productive assets, build enterprises and create sustainable wealth through a transparent, member-owned cooperative.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <About />
        <HowItWorks />
        <Ecosystem />
        <Trust />
        <Benefits />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
