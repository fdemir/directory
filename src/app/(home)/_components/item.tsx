import { Item as ItemT } from "@/db/schema/item";
import Image from "next/image";
import Link from "next/link";

export default function Item({ data }: { data: ItemT }) {
  return (
    <Link
      className="py-4 flex gap-4 w-full items-center"
      href={`/item/${data.id}`}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_S3_PUBLIC_URL}/${data.logo}`}
        width={72}
        height={72}
        alt={data.name}
        className="rounded-md aspect-square"
      />
      <div className="h-full flex flex-col text-xl">
        <span className="font-semibold">{data.name}</span>
        <span className="text-muted-foreground">{data.short_desc}</span>
      </div>
    </Link>
  );
}
