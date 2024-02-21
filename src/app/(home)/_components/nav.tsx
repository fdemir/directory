import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LuAccessibility, LuHome } from "react-icons/lu";

const randomLinkColorClassList = [
  "bg-blue-800 text-blue-200",
  "bg-emerald-800 text-emerald-300",
  "bg-rose-800 text-rose-200",
  "bg-cyan-800 text-cyan-200",
];

const categorylist = [
  {
    name: "Sport",
    slug: "sport",
    icon: <LuHome />,
  },
  {
    name: "Finance",
    slug: "xxd",
    icon: <LuAccessibility />,
  },
];

export default function Nav() {
  return (
    <nav className="w-[300px] p-5 flex flex-col gap-4 fixed">
      <Link href="/submit">
        <Button className="w-full py-5">Submit</Button>
      </Link>

      <ul className="flex flex-col gap-2">
        {categorylist.map((category) => (
          <li key={category.slug}>
            <Link
              href={`/category/${category.slug}`}
              className="flex items-center hover:bg-primary-foreground rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-primary-foreground transition-colors"
            >
              <span
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-md opacity-80 text-2xl mx-3",
                  `${
                    randomLinkColorClassList[
                      category.slug
                        .split("")
                        .splice(0, 2)
                        .reduce((a, b) => a + b.charCodeAt(0), 0) %
                        randomLinkColorClassList.length
                    ]
                  }`
                )}
              >
                {category.icon}
              </span>
              <span className="block p-2rounded-md">{category.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
