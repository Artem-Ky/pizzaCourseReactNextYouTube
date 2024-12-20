import { CategoryWithProductAndIngredients } from "@/entities/Category";
import React from "react";
import cn from "clsx";
import { ProductsGroupList } from "@/features/ProductsGroupList";

interface Props {
  className?: string;
  categories: CategoryWithProductAndIngredients[];
}

export const CategoryWithProductList: React.FC<Props> = ({
  className,
  categories,
}) => {
  return (
    <div className={cn("flex-1", className)}>
      <div className="flex flex-col gap-16">
        {categories.map(
          (category) =>
            category.products.length > 0 && (
              <ProductsGroupList
                key={category.id}
                title={category.name}
                categoryId={category.id}
                items={category.products}
              />
            )
        )}
      </div>
    </div>
  );
};
