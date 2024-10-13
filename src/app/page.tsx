import { AsidePizzaFilters } from "@/widgets/AsidePizzaFilters";

import { Container, Title } from "@/shared/ui";
import { TopBar } from "@/widgets/TopBar";
import { ProductsGroupList } from "@/features/ProductsGroupList";
import { prisma } from "@/shared/lib/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar categories={categories.filter(item => item.products.length > 0)}/>
      <Container className="pb-14">
        <div className="flex gap-[60px]">
          {/* фильтрация */}
          <div className="w-[250px]">
            <AsidePizzaFilters />
          </div>

          {/* карточки */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList key={category.id} title={category.name} categoryId={category.id} items={category.products} />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
