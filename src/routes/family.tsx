import { createFileRoute } from "@tanstack/react-router";

import { FamilyScreen } from "@/components/guide-app";

export const Route = createFileRoute("/family")({
  head: () => ({
    meta: [
      { title: "Festas e almoços em família — Método Metabolismo 40+" },
      {
        name: "description",
        content:
          "Ideias para desfrutar dos convívios sem culpa nem regras rígidas — e voltar à tua rotina na refeição seguinte.",
      },
      { property: "og:title", content: "Festas e almoços em família — Método Metabolismo 40+" },
      {
        property: "og:description",
        content: "Ideias para desfrutar dos convívios sem culpa e voltar à rotina na refeição seguinte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: FamilyPage,
});

function FamilyPage() {
  return <FamilyScreen />;
}
