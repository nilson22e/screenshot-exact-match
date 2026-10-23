import { createFileRoute } from "@tanstack/react-router";

import { ExercisesScreen } from "@/components/guide-app";

export const Route = createFileRoute("/exercises/")({
  head: () => ({
    meta: [
      { title: "Exercícios — Método Metabolismo 40+" },
      {
        name: "description",
        content:
          "16 movimentos suaves para fazer em casa, sem equipamento e ao teu ritmo — marcha, ponte de glúteos, dança de semba e mais.",
      },
      { property: "og:title", content: "Exercícios — Método Metabolismo 40+" },
      {
        property: "og:description",
        content: "16 movimentos suaves para fazer em casa, sem equipamento e ao teu ritmo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ExercisesPage,
});

function ExercisesPage() {
  return <ExercisesScreen />;
}
