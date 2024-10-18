import { ProductPage } from "@/pages/ProductPage";

export default function ProductPageRoute({ params: { id } }: { params: { id: string } }) {
    return <ProductPage id={id}/>;
}