"use client";
import toast from 'react-hot-toast';
import { useCartStore } from "@/entities/Cart/model/store/cart";
import { ProductWithRelations } from "@/entities/Product";
import { SelectedPizzaForm } from "./SelectedPizzaForm/SelectedPizzaForm";
import { SelectedProductForm } from "./SelectedProductForm/SelectedProductForm";

interface Props {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({
  product,
  onSubmit: _onSubmit,
}) => {
  const cartState = useCartStore((state) => state);

  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await cartState.addCartItem({
        productItemId: itemId,
        ingredients,
      });

      toast.success(product.name + ' добавлена в корзину');
      _onSubmit?.();
    } catch (err) {
      toast.error('Не удалось добавить товар в корзину');
      console.error(err);
    }
  };

  if (isPizzaForm) {
    return (
      <SelectedPizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={cartState.loading}
      />
    );
  }

  return (
    <SelectedProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      onSubmit={onSubmit}
      price={firstItem.price}
      loading={cartState.loading}
    />
  );
};
