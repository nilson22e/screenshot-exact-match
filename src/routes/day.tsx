import { createFileRoute } from "@tanstack/react-router";

import { DayScreen } from "@/components/guide-app";

export const Route = createFileRoute("/day")({
  head: () => ({
    meta: [
      { title: "O meu dia — Método Metabolismo 40+" },
      {
        name: "description",
        content:
          "Segue o teu dia de cada vez: refeições do plano, movimento suave, copos de água, descanso e energia — ao teu ritmo.",
      },
      { property: "og:title", content: "O meu dia — Método Metabolismo 40+" },
      {
        property: "og:description",
        content: "Refeições do plano, movimento suave e pequenos hábitos, um dia de cada vez.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DayPage,
});

function DayPage() {
  return <DayScreen />;
}
