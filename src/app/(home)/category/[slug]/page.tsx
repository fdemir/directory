import Item from "../../_components/item";
import ItemList from "../../_components/item-list";
import { getCategory, getItemsBySlug } from "../../actions";

export default async function Page({ params }: { params: { slug: string } }) {
  const category = await getCategory(params.slug);
  const items = await getItemsBySlug(params.slug);

  return (
    <>
      <h1 className="text-4xl font-semibold mb-4">{category?.name}</h1>
      <ItemList>
        {items.map((item) => (
          <Item key={item.item.id} data={item.item} />
        ))}
      </ItemList>
    </>
  );
}
