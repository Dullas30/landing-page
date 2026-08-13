import { createFileRoute } from "@tanstack/react-router";

import { MembershipExperience } from "@/components/neocs/Membership";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership | NEOCS" },
      {
        name: "description",
        content:
          "Join NEOCS through a clear membership experience covering eligibility, KYC, fees, responsibilities and access to the cooperative ecosystem.",
      },
    ],
  }),
  component: MembershipRoute,
});

function MembershipRoute() {
  return <MembershipExperience />;
}
