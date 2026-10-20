import { describe, expect, it } from "vitest";

import { disclaimer, exercises, photoManifest, planDays, recipes } from "@/data/guide";
import { exchangeMeals, getMealCodesForDay, getWeeklyShopping, parseIngredient } from "@/lib/guide-logic";

describe("Método Metabolismo 40+ guide content", () => {
  it("contains the 66 recipes and 16 exercises in the brief", () => {
    expect(recipes).toHaveLength(66);
    expect(exercises).toHaveLength(16);
  });

  it("includes a missing-photo manifest entry for every recipe and exercise", () => {
    expect(photoManifest).toHaveLength(82);
    expect(photoManifest.filter((item) => item.status === "missing")).toHaveLength(82);
  });

  it("covers 21 days without repeating any lunch or dinner", () => {
    expect(planDays).toHaveLength(21);
    expect(new Set(planDays.map((day) => day.meals.L)).size).toBe(21);
    expect(new Set(planDays.map((day) => day.meals.D)).size).toBe(21);
  });

  it("keeps the exact medical disclaimer from the brief", () => {
    expect(disclaimer).toBe(
      "Aviso importante: Este conteúdo é educativo e informativo. Não substitui o acompanhamento de um médico ou nutricionista. Antes de mudares a alimentação ou começares exercício, fala com um profissional de saúde, sobretudo se tens hipertensão, diabetes, problemas cardíacos, estás grávida ou tomas medicação. Os resultados variam de pessoa para pessoa e não são garantidos.",
    );
  });

  it("adds weekly ingredient quantities by name and household unit", () => {
    expect(parseIngredient("2 colheres de sopa de ginguba pilada")).toMatchObject({
      name: "ginguba pilada",
      qty: 2,
      unit: "colheres de sopa",
      category: "Ovos e leguminosas",
    });
    const shopping = getWeeklyShopping(1, planDays, recipes);
    expect(shopping.some((item) => item.name.toLocaleLowerCase("pt-AO").includes("kizaca"))).toBe(true);
  });

  it("exchanges same-type plan meals between days without creating repeats", () => {
    const overrides = exchangeMeals({}, 1, 2, "L", "L01", "L02");
    expect(getMealCodesForDay(1, planDays, overrides)?.L).toBe("L02");
    expect(getMealCodesForDay(2, planDays, overrides)?.L).toBe("L01");
    const lunchCodes = planDays.map((day) => getMealCodesForDay(day.day, planDays, overrides)?.L);
    expect(new Set(lunchCodes).size).toBe(21);
  });
});