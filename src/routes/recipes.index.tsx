import { createFileRoute } from "@tanstack/react-router";

import { RecipesScreen } from "@/components/guide-app";

export const Route = createFileRoute("/recipes/")({
  head: () => ({
    meta: [
      { title: "Receitas — Método Metabolismo 40+" },
      {
        name: "description",
        content:
          "66 pratos simples com ingredientes que conheces — funge, calulu, muamba, mandioca e mais. Todas as quantidades são medidas de casa.",
      },
      { property: "og:title", content: "Receitas — Método Metabolismo 40+" },
      {
        property: "og:description",
        content: "66 pratos simples com ingredientes que conheces, todos com medidas de casa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: RecipesPage,
});

function RecipesPage() {
  return <RecipesScreen />;
}
