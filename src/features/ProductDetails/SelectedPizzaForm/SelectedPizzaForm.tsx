"use client";

import React, { useEffect } from "react";
import { Ingredient, ProductItem } from "@prisma/client";
import { cn } from "@/shared/lib/utils";
import { PizzaImage } from "../PizzaImage/PizzaImage";
import { Title } from "@/shared/ui";
import { Button } from "@/shared/components";
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants";
import { GroupVariants } from "../GroupVariants/GroupVariants";
import { IngredientItem } from "@/entities/Ingredient";
import { useSet } from "react-use";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

/**
 * Форма выбора ПИЦЦЫ
 */
export const SelectedPizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  loading,
  onSubmit,
  className,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredientIds, { toggle: toggleSelectIngredientId }] = useSet(
    new Set<number>([])
  );

  const textDetails = `${size} см ${mapPizzaType[type]}`;
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 999999;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredientIds.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  const totalPrice = pizzaPrice + totalIngredientsPrice;

  const availableSizes = items.filter((item) => item.pizzaType === type);
  const availablePizzaSizes = pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !availableSizes.some(
      (size) => Number(size.size) === Number(item.value)
    ),
  }));

  const handleClickAdd = () => {
    if (1) {
      onSubmit(1, Array.from(selectedIngredientIds));
    }
  };

  useEffect(() => {
    const currentSize = availablePizzaSizes.find((item) => Number(item.value) === size && !item.disabled);
    const availableSize = availablePizzaSizes?.find((item) => !item.disabled);
    if(!currentSize && availableSize) { 
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [availablePizzaSizes, size, type]);

  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants
            items={availablePizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => toggleSelectIngredientId(ingredient.id)}
                active={selectedIngredientIds.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          loading={loading}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
          onClick={handleClickAdd}
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
