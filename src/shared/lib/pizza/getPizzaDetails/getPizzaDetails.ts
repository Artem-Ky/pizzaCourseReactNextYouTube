
import { mapPizzaType, PizzaSize, PizzaType } from '@/shared/constants';
import { Ingredient, ProductItem } from '@prisma/client';
import { calcTotalPizzaPrice } from '../calcTotalPizzaPrice/calcTotalPizzaPrice';


export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
) => {
  const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients);
  const textDetaills = `${size} см, ${mapPizzaType[type]} пицца`;

  return { totalPrice, textDetaills };
};