import { createFileRoute } from "@tanstack/react-router";

import { PhotoAdminScreen } from "@/components/guide-app";

export const Route = createFileRoute("/admin/fotografias")({
  head: () => ({
    meta: [
      { title: "Fotografias — Administração do Método Metabolismo 40+" },
      {
        name: "description",
        content:
          "Biblioteca das 82 fotografias reais do guia — receitas e exercícios — com espaço para crédito e licença antes do envio.",
      },
      { property: "og:title", content: "Fotografias — Administração do Método Metabolismo 40+" },
      {
        property: "og:description",
        content: "Biblioteca das 82 fotografias reais do guia, com crédito e licença por preencher.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PhotoAdminPage,
});

function PhotoAdminPage() {
  return <PhotoAdminScreen />;
}
