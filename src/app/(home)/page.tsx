import { Metadata } from "next";
import ItemList from "./_components/item-list";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default async function Home() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Today</h1>
      <ItemList />
    </div>
  );
}
