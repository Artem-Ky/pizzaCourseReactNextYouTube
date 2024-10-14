import React from "react";
import { AsidePizzaFilters } from "@/widgets/AsidePizzaFilters";
import { Container, Title } from "@/shared/ui";
import { TopBar } from "@/widgets/TopBar";
import { getAllCategories } from "@/entities/Category";
import { CategoryWithProductList } from "@/widgets/CategoryWithProductList";

export const MainPage = async () => {
  const categories = await getAllCategories();
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar
        categories={categories.filter((item) => item.products.length > 0)}
      />
      <Container className="pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <AsidePizzaFilters />
          </div>

          <CategoryWithProductList categories={categories} />
        </div>
      </Container>
    </>
  );
};
