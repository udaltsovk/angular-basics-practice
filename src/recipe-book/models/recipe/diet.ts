export const RecipeDiets = [
  "Безглютеновая",
  "Низкокалорийная",
  "Низкожировая",
  "Вегетарианская",
] as const;

export type RecipeDiet = (typeof RecipeDiets)[number];
