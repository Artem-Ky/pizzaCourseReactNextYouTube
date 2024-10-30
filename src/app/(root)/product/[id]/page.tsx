import ProductPage from "@/Apppages/ProductPage";

export default function ProductPageRoute({
  params: { id },
}: {
  params: { id: string };
}) {
  return <ProductPage id={id} />;
}
