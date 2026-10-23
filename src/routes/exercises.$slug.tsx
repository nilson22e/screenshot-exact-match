import { createFileRoute } from "@tanstack/react-router";

import { ExerciseDetailScreen } from "@/components/guide-app";
import { exercises } from "@/data/guide";

export const Route = createFileRoute("/exercises/$slug")({
  head: ({ params }) => {
    const exercise = exercises.find((item) => item.slug === params.slug);
    const title = exercise ? `${exercise.title} — Exercícios` : "Exercícios — Método Metabolismo 40+";
    const description = exercise
      ? `${exercise.title}: um movimento suave do Método Metabolismo 40+ para fazer em casa.`
      : "Movimentos suaves do Método Metabolismo 40+.";
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
  component: ExerciseDetailPage,
});

function ExerciseDetailPage() {
  const { slug } = Route.useParams();
  return <ExerciseDetailScreen slug={slug} />;
}
