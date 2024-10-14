import { Category, Product, Ingredient } from "@prisma/client";

export type CategoryWithProductAndIngredients = Category & {
  products: (Product & {
    ingredients: Ingredient[];
  })[];
};