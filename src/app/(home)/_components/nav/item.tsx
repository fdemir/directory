import { Category } from "@/db/schema/category";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Link from "next/link";

type ItemProps = {
  category: Category;
};

// we explicitly define the colors, so tailwind doesn't purge them
const randomLinkColorClassList = [
  "bg-blue-800 text-blue-200",
  "bg-emerald-800 text-emerald-300",
  "bg-rose-800 text-rose-200",
  "bg-cyan-800 text-cyan-200",
  "bg-green-800 text-green-200",
  "bg-red-800 text-red-200",
  "bg-indigo-800 text-indigo-200",
];

function getRandomIdxFromSlug(slug: string, range: number) {
  return (
    slug
      .split("")
      .splice(0, 2)
      .reduce((a, b) => a + b.charCodeAt(0), 0) % range
  );
}

export default function Item({ category }: ItemProps) {
  // TODO: this is not an ideal solution to load icons, but it works for now.
  // I should find another way to load the icons dynamically. Currently, I assume database entry has an Md icon name.
  const DynamicIcon = dynamic(() =>
    import("react-icons/md").then((icons) => icons["Md" + category.icon] as any)
  );

  return (
    <Link
      href={category.slug ? `/category/${category.slug}` : "/"}
      className="flex items-center hover:bg-primary-foreground rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-primary-foreground transition-colors"
    >
      <span
        className={cn(
          "w-10 h-10 flex items-center justify-center rounded-md opacity-80 text-2xl mx-3",
          `${
            randomLinkColorClassList[
              getRandomIdxFromSlug(
                category.slug,
                randomLinkColorClassList.length
              )
            ]
          }`
        )}
      >
        <DynamicIcon />
      </span>
      <span className="block p-2rounded-md">{category.name}</span>
    </Link>
  );
}
