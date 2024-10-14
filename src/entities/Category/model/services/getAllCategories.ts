import { prisma } from "@/shared/lib/prisma/prisma-client";

export const getAllCategories = async () => {
  return prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });
};