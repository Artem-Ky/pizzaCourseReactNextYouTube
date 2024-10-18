"use client";

import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import React from "react";
import { useRouter } from "next/navigation";
import {
  SelectedPizzaForm,
  SelectedProductForm,
} from "@/features/ProductDetails";
import { ProductWithRelations } from "@/entities/Product";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const SelectedProductModal: React.FC<Props> = ({
  product,
  className,
}) => {
  const router = useRouter();
  const isPizza = Boolean(product.items[0].pizzaType);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        {isPizza ? (
          <SelectedPizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={() => {}}
          />
        ) : (
          <SelectedProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.items[0].price}
            onSubmit={() => {}}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
