'use client';

import { Api } from "@/processes/api/client-api";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";

interface ReturnProps {
    ingredients: Ingredient[];
    isLoading: boolean;
}

export const useIngredients = (): ReturnProps => {
  const [ingredients, setItems] = useState<Ingredient[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setIsLoading(true);
        const ingredients = await Api.ingredients.getAllIngredients();
        setItems(ingredients);
      } catch (error) {
        console.log(error);
      }
      finally {
        setIsLoading(false);
      }
    }

    fetchIngredients();
  }, []);

  return { ingredients, isLoading };
};
