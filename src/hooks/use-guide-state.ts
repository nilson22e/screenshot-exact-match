import { useEffect, useState } from "react";

export type ProfileState = {
  name: string;
  ageConfirmed: boolean;
  disclaimerAcceptedAt: string;
  dataSaver: boolean;
  startedAt: string;
};

export type DayProgressState = {
  mealsDone: string[];
  workoutDone: boolean;
  waterGlasses: number;
  sleepOk: boolean;
  energy: number;
  habitDone: boolean;
};

function useGuideStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(key);
      if (saved !== null) setValue(JSON.parse(saved) as T);
    } catch {
      window.localStorage.removeItem(key);
    } finally {
      setReady(true);
    }
  }, [key]);

  useEffect(() => {
    if (ready) window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, ready, value]);

  return [value, setValue, ready] as const;
}

export function useProfile() {
  return useGuideStorage<ProfileState | null>("metabolismo40.profile", null);
}

export function useDayProgress() {
  return useGuideStorage<Record<number, DayProgressState>>("metabolismo40.progress", {});
}

export function useMealOverrides() {
  return useGuideStorage<Record<number, Partial<Record<"B" | "L" | "D" | "S", string>>>>(
    "metabolismo40.mealOverrides",
    {},
  );
}

export function useFavorites() {
  return useGuideStorage<string[]>("metabolismo40.favorites", []);
}

export function useShoppingState() {
  return useGuideStorage<{ checked: string[]; prices: Record<string, string> }>(
    "metabolismo40.shopping",
    { checked: [], prices: {} },
  );
}