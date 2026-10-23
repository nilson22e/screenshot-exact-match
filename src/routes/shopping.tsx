import { createFileRoute } from "@tanstack/react-router";

import { ShoppingScreen } from "@/components/guide-app";

export const Route = createFileRoute("/shopping")({
  head: () => ({
    meta: [
      { title: "Lista de compras — Método Metabolismo 40+" },
      {
        name: "description",
        content:
          "A lista semanal acompanha as refeições do plano, organizada por secção do mercado, com espaço para os teus preços em Kwanza.",
      },
      { property: "og:title", content: "Lista de compras — Método Metabolismo 40+" },
      {
        property: "og:description",
        content: "A lista semanal acompanha as refeições do plano, com espaço para os teus preços em Kz.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ShoppingPage,
});

function ShoppingPage() {
  return <ShoppingScreen />;
}
