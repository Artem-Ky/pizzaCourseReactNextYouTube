import { ProductPage } from "@/pages/ProductPage";

export default async function ProductModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <ProductPage id={id} />;
}
