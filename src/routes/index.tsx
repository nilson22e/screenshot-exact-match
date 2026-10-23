import { createFileRoute } from "@tanstack/react-router";

import { HomeScreen } from "@/components/guide-app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método Metabolismo 40+ — Um caminho possível, ao teu ritmo" },
      {
        name: "description",
        content:
          "Guia educativo de 21 dias com refeições simples da nossa terra, movimento suave e pequenos hábitos — feito em Angola, sem promessas.",
      },
      { property: "og:title", content: "Método Metabolismo 40+ — Um caminho possível, ao teu ritmo" },
      {
        property: "og:description",
        content:
          "Guia educativo de 21 dias com refeições simples da nossa terra, movimento suave e pequenos hábitos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return <HomeScreen />;
}
