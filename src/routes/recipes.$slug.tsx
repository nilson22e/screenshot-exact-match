import { createFileRoute } from "@tanstack/react-router";

import { RecipeDetailScreen } from "@/components/guide-app";
import { recipes } from "@/data/guide";

export const Route = createFileRoute("/recipes/$slug")({
  head: ({ params }) => {
    const recipe = recipes.find((item) => item.slug === params.slug);
    const title = recipe ? `${recipe.title} — Receitas` : "Receitas — Método Metabolismo 40+";
    const description = recipe
      ? `${recipe.title}: uma receita do Método Metabolismo 40+ para 4 pessoas, com medidas de casa.`
      : "Receitas simples do Método Metabolismo 40+.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: RecipeDetailPage,
});

function RecipeDetailPage() {
  const { slug } = Route.useParams();
  return <RecipeDetailScreen slug={slug} />;
}
