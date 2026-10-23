import { createFileRoute } from "@tanstack/react-router";

import { PlateScreen } from "@/components/guide-app";

export const Route = createFileRoute("/plate")({
  head: () => ({
    meta: [
      { title: "O prato equilibrado — Método Metabolismo 40+" },
      {
        name: "description",
        content:
          "Uma referência visual simples: metade do prato com legumes, um quarto com proteína e um quarto com funge, mandioca ou batata-doce.",
      },
      { property: "og:title", content: "O prato equilibrado — Método Metabolismo 40+" },
      {
        property: "og:description",
        content: "Metade legumes, um quarto proteína, um quarto farinhas — uma referência, não uma regra.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PlatePage,
});

function PlatePage() {
  return <PlateScreen />;
}
