import React from "react";
import { AsidePizzaFilters } from "@/widgets/AsidePizzaFilters";
import { Container, Title } from "@/shared/ui";
import { TopBar } from "@/widgets/TopBar";
import { CategoryWithProductList } from "@/widgets/CategoryWithProductList";
import { getAllCategories, GetSearchParams } from "@/entities/Category";


export default async function MainPage({searchParams}: {searchParams: GetSearchParams}) {
  const categories = await getAllCategories(searchParams);
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar
        categories={categories.filter((item) => item.products.length > 0)}
      />
      <Container className="pb-14">
        <div className="flex gap-16">
          <div className="w-[250px]">
            <AsidePizzaFilters />
          </div>
          <CategoryWithProductList categories={categories} />
        </div>
      </Container>
    </>
  );
}
