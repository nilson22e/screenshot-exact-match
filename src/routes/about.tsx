import { createFileRoute } from "@tanstack/react-router";

import { AboutScreen } from "@/components/guide-app";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sobre e aviso de saúde — Método Metabolismo 40+" },
      {
        name: "description",
        content:
          "O que é o Método Metabolismo 40+ e o aviso importante: este conteúdo é educativo e não substitui o acompanhamento de um médico ou nutricionista.",
      },
      { property: "og:title", content: "Sobre e aviso de saúde — Método Metabolismo 40+" },
      {
        property: "og:description",
        content: "O que é o Método Metabolismo 40+ e o aviso importante antes de mudares a alimentação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <AboutScreen />;
}
