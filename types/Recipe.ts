type Ingredient = {
  name: string;
  needed: number;
  unit: string;
};

export type Recipe = {
  id: number;
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  categories: string[];
};
