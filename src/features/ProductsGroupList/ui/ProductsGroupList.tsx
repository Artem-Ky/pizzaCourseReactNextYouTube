'use client';

import React, { useEffect } from 'react';
import { useIntersection } from 'react-use';

import { cn } from '@/shared/lib/utils';
import { Title } from '@/shared/ui';
import { ProductCard } from '@/entities/Product';
import { useSetActiveCategory } from '@/features/Categories';


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

  const setActiveCategoryId = useSetActiveCategory((state) => state.setActiveId);
  console.log(items)
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
      console.log(categoryId)
    }
  }, [intersection?.isIntersecting, categoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
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
  );
};