import { Item as ItemT } from "@/db/schema/item";
import Image from "next/image";
import Link from "next/link";

export default function Item({ data }: { data: ItemT }) {
  return (
    <Link className="py-4 flex gap-4 w-full items-center" href="/">
      <Image
        src="/example-link-icon.jpg"
        width={72}
        height={72}
        alt="Snapchat"
        className="rounded-md"
      />
      <div className="h-full flex flex-col text-xl">
        <span className="font-semibold">{data.name}</span>
        <span className="text-muted-foreground">{data.short_desc}</span>
      </div>
    </Link>
  );
}
