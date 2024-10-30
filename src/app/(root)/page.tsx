import MainPage from "@/Apppages/MainPage";
import { GetSearchParams } from "@/entities/Category";

export default function Home({
  searchParams,
}: {
  searchParams: GetSearchParams;
}) {
  return <MainPage searchParams={searchParams} />;
}
