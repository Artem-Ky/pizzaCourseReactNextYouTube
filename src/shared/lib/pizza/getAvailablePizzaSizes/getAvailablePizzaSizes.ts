import { Variant } from '@/features/ProductDetails/GroupVariants/GroupVariants';
import { pizzaSizes, PizzaType } from '@/shared/constants';
import { ProductItem } from '@prisma/client';


export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);

  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some((pizza) => Number(pizza.size) === Number(item.value)),
  }));
};