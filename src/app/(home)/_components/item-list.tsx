import { getItems } from "../actions";
import Item from "./item";

type ItemListProps = {
  slug?: string;
};

export default async function ItemList({ slug = "" }: ItemListProps) {
  const items = await getItems(slug);

  return (
    <div>
      <Item />
    </div>
  );
}
