import type { Recipe } from "@/data/guide";

export type MealKey = "B" | "L" | "D" | "S";

export type ShoppingIngredient = {
  name: string;
  qty: number | null;
  unit: string;
  category: string;
};

const categoryRules: Array<[RegExp, string]> = [
  [/peix|carapau|corvina|cachucho|sardinha|atum|frango|galinha|cabrito|vaca/i, "Peixe e carne"],
  [/ovo|feij|ginguba|amendoim/i, "Ovos e leguminosas"],
  [/mandioca|batata|banana-pão|fuba|funge|arroz|esparguete|aveia|pão|farinha/i, "Tubérculos e farinhas"],
  [/kizaca|gimboa|couve|repolho|quiabo|abóbora|vagem|feijão-verde|cenoura|pimento|tomate|cebola|alho|pepino|ervilha|legumes/i, "Verduras e legumes"],
  [/banana|papaia|manga|laranja|abacate|limão|fruta/i, "Frutas"],
  [/.*/, "Despensa"],
];

const quantityUnits = [
  "colheres? de sopa",
  "colheres? de chá",
  "copos? americanos?",
  "conchas?",
  "punhados?",
  "bolas?",
  "fatias?",
  "pedaços?",
  "postas?",
  "dentes?",
  "folhas?",
  "latas?",
];
const measurePattern = new RegExp(
  `^(\\d+(?:[.,]\\d+)?)\\s+(${quantityUnits.join("|")})\\s+(?:de\\s+)?(.+)$`,
  "i",
);

export function ingredientCategory(name: string) {
  return categoryRules.find(([pattern]) => pattern.test(name))?.[1] ?? "Despensa";
}

export function parseIngredient(raw: string): ShoppingIngredient {
  const text = raw.trim().replace(/[.;]$/, "");
  const measured = text.match(measurePattern);
  if (measured) {
    const name = measured[3].trim();
    return {
      name,
      qty: Number(measured[1].replace(",", ".")),
      unit: measured[2].toLocaleLowerCase("pt-AO"),
      category: ingredientCategory(name),
    };
  }

  const amount = text.match(/^(\d+(?:[.,]\d+)?)\s+(.+)$/);
  const name = amount ? amount[2].trim() : text;
  return {
    name,
    qty: amount ? Number(amount[1].replace(",", ".")) : null,
    unit: amount ? "unidades" : "a gosto",
    category: ingredientCategory(name),
  };
}

export function getWeeklyShopping(
  week: number,
  planDays: Array<{ day: number; week: number; meals: Record<MealKey, string> }>,
  recipes: Recipe[],
) {
  const recipeByCode = new Map(recipes.map((recipe) => [recipe.code, recipe]));
  const grouped = new Map<string, ShoppingIngredient>();

  for (const day of planDays.filter((item) => item.week === week)) {
    for (const code of Object.values(day.meals)) {
      const recipe = recipeByCode.get(code);
      if (!recipe) continue;
      for (const raw of recipe.ingredients) {
        const ingredient = parseIngredient(raw);
        const key = `${ingredient.category}|${ingredient.name.toLocaleLowerCase("pt-AO")}|${ingredient.unit}`;
        const existing = grouped.get(key);
        if (existing && existing.qty !== null && ingredient.qty !== null) {
          existing.qty += ingredient.qty;
        } else if (!existing) {
          grouped.set(key, { ...ingredient });
        }
      }
    }
  }

  return [...grouped.values()].sort((a, b) =>
    a.category === b.category ? a.name.localeCompare(b.name, "pt-AO") : a.category.localeCompare(b.category, "pt-AO"),
  );
}

export function getMealCodesForDay(
  day: number,
  plans: Array<{ day: number; meals: Record<MealKey, string> }>,
  overrides: Record<number, Partial<Record<MealKey, string>>>,
) {
  const plan = plans.find((item) => item.day === day);
  if (!plan) return null;
  return { ...plan.meals, ...overrides[day] };
}

export function exchangeMeals(
  overrides: Record<number, Partial<Record<MealKey, string>>>,
  dayA: number,
  dayB: number,
  meal: MealKey,
  codeA: string,
  codeB: string,
) {
  return {
    ...overrides,
    [dayA]: { ...overrides[dayA], [meal]: codeB },
    [dayB]: { ...overrides[dayB], [meal]: codeA },
  };
}