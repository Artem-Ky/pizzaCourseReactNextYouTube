import { prisma } from '@/shared/lib/prisma/prisma-client';
import { SelectedProductModal } from '@/widgets/SelectedProductModal';
import { notFound } from 'next/navigation';

export default async function ProductModalPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <SelectedProductModal product={product} />;
}