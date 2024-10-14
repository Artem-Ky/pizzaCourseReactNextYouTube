import React from "react";

import { cn } from "@/shared/lib/utils";
import { Title } from "@/shared/ui";
import { ProductCard } from "./ProductCard";
import { CategoryTrigger } from "./CategoryTrigger";

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  return (
    <div className="relative">
      <CategoryTrigger categoryId={categoryId} title={title} />
      <div className={className}>
        <Title text={title} size="lg" className="font-extrabold mb-5" />

        <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
          {items.map((product, i) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              ingredients={product.ingredients}
              imageUrl={product.imageUrl}
              price={product.items[0].price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
