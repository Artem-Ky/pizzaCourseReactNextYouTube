import { AsidePizzaFilters } from "@/widgets/AsidePizzaFilters";

import { Container, Title } from "@/shared/ui";
import { TopBar } from "@/widgets/TopBar";
import { ProductsGroupList } from "@/features/ProductsGroupList";

export default function Home() {
  const product = [
    {
    id: 1,
    name: 'test',
    items: [{price: 450}, {price: 650}, {price: 950}],
    imageUrl: 'https://avatars.mds.yandex.net/i?id=7d03027cfade99547a7451cee2155b60616371c4-5176208-images-thumbs&n=13',
  },
  {
    id: 2,
    name: 'test',
    items: [{price: 450}, {price: 650}, {price: 950}],
    imageUrl: 'https://avatars.mds.yandex.net/i?id=7d03027cfade99547a7451cee2155b60616371c4-5176208-images-thumbs&n=13',
  },
  {
    id: 3,
    name: 'test',
    items: [{price: 450}, {price: 650}, {price: 950}],
    imageUrl: 'https://avatars.mds.yandex.net/i?id=7d03027cfade99547a7451cee2155b60616371c4-5176208-images-thumbs&n=13',
  },
  {
    id: 4,
    name: 'test',
    items: [{price: 450}, {price: 650}, {price: 950}],
    imageUrl: 'https://avatars.mds.yandex.net/i?id=7d03027cfade99547a7451cee2155b60616371c4-5176208-images-thumbs&n=13',
  },
  {
    id: 5,
    name: 'test',
    items: [{price: 450}, {price: 650}, {price: 950}],
    imageUrl: 'https://avatars.mds.yandex.net/i?id=7d03027cfade99547a7451cee2155b60616371c4-5176208-images-thumbs&n=13',
  },
  {
    id: 6,
    name: 'test',
    items: [{price: 450}, {price: 650}, {price: 950}],
    imageUrl: 'https://avatars.mds.yandex.net/i?id=7d03027cfade99547a7451cee2155b60616371c4-5176208-images-thumbs&n=13',
  },
  {
    id: 7,
    name: 'test',
    items: [{price: 450}, {price: 650}, {price: 950}],
    imageUrl: 'https://avatars.mds.yandex.net/i?id=7d03027cfade99547a7451cee2155b60616371c4-5176208-images-thumbs&n=13',
  },
];
const product2 = [
  {
  id: 1,
  name: 'test',
  items: [{price: 450}, {price: 650}, {price: 950}],
  imageUrl: 'https://avatars.mds.yandex.net/i?id=7d03027cfade99547a7451cee2155b60616371c4-5176208-images-thumbs&n=13',
},
{
  id: 2,
  name: 'test',
  items: [{price: 450}, {price: 650}, {price: 950}],
  imageUrl: 'https://avatars.mds.yandex.net/i?id=7d03027cfade99547a7451cee2155b60616371c4-5176208-images-thumbs&n=13',
},
{
  id: 3,
  name: 'test',
  items: [{price: 450}, {price: 650}, {price: 950}],
  imageUrl: 'https://avatars.mds.yandex.net/i?id=7d03027cfade99547a7451cee2155b60616371c4-5176208-images-thumbs&n=13',
},
{
  id: 4,
  name: 'test',
  items: [{price: 450}, {price: 650}, {price: 950}],
  imageUrl: 'https://avatars.mds.yandex.net/i?id=7d03027cfade99547a7451cee2155b60616371c4-5176208-images-thumbs&n=13',
},
{
  id: 5,
  name: 'test',
  items: [{price: 450}, {price: 650}, {price: 950}],
  imageUrl: 'https://avatars.mds.yandex.net/i?id=7d03027cfade99547a7451cee2155b60616371c4-5176208-images-thumbs&n=13',
},
{
  id: 6,
  name: 'test',
  items: [{price: 450}, {price: 650}, {price: 950}],
  imageUrl: 'https://avatars.mds.yandex.net/i?id=7d03027cfade99547a7451cee2155b60616371c4-5176208-images-thumbs&n=13',
},
{
  id: 7,
  name: 'test',
  items: [{price: 450}, {price: 650}, {price: 950}],
  imageUrl: 'https://avatars.mds.yandex.net/i?id=7d03027cfade99547a7451cee2155b60616371c4-5176208-images-thumbs&n=13',
},
];
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14">
        <div className="flex gap-[60px]">
          {/* фильтрация */}
          <div className="w-[250px]">
            <AsidePizzaFilters />
          </div>

          {/* карточки */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Пиццы" categoryId={1} items={product} />
              <ProductsGroupList title="Комбо" categoryId={2} items={product} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
