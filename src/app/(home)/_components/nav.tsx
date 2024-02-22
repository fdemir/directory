import { Button } from "@/components/ui/button";
import Link from "next/link";
import Item from "./item";
import { getCategories } from "../actions";

export default async function Nav() {
  const categories = await getCategories();

  return (
    <nav className="w-[300px] p-5 flex flex-col gap-4 fixed">
      <Link href="/submit">
        <Button className="w-full py-5">Submit</Button>
      </Link>

      <ul className="flex flex-col gap-2">
        {categories.map((category) => (
          <li key={category.slug}>
            <Item category={category} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
