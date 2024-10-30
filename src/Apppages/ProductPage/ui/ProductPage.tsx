import { ProductForm } from "@/features/ProductDetails";
import { prisma } from "@/shared/lib/prisma/prisma-client";
import { Container } from "@/shared/ui";
import { notFound } from "next/navigation";

interface Props {
  id: string;
}

export default async function ProductPage({ id }: Props) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        {/* <ProductForm /> */}
      </div>
    </Container>
  );
}
