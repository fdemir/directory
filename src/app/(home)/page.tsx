import { Metadata } from "next";
import ItemList from "./_components/item-list";
import { getItems } from "./actions";
import Item from "./_components/item";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default async function Home() {
  const items = await getItems();

  return (
    <div>
      <h1 className="text-4xl font-semibold mb-4">Today</h1>
      <ItemList>
        {items.map((item) => (
          <Item key={item.id} data={item} />
        ))}
      </ItemList>
    </div>
  );
}
