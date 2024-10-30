import { ProductWithRelations } from "@/entities/Product";
import { Category, Product, Ingredient } from "@prisma/client";

export type CategoryWithProductAndIngredients = Category & {
  products: ProductWithRelations[];
};

