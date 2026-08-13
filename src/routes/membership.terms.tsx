import { createFileRoute } from "@tanstack/react-router";

import { MembershipTermsPage } from "@/components/neocs/Membership";

export const Route = createFileRoute("/membership/terms")({
  head: () => ({
    meta: [
      { title: "Membership Terms | NEOCS" },
      {
        name: "description",
        content: "Full NEOCS membership terms and conditions for the membership experience.",
      },
    ],
  }),
  component: MembershipTermsRoute,
});

function MembershipTermsRoute() {
  return <MembershipTermsPage />;
}
