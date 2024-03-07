import Item from "@/app/(home)/_components/item";
import { getItemById, getItemsBySlug } from "@/app/(home)/actions";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdLink } from "react-icons/md";

export default async function ItemDetail({ id }: { id: string }) {
  const item = await getItemById(Number(id));

  if (!item) {
    notFound();
  }

  return (
    <Card>
      <CardHeader className="pb-0">
        <Item data={item} />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="my-3 flex gap-4">
          <Link target="_blank" href="https://watchandchill.in/">
            <Badge
              variant="secondary"
              className="px-3 py-2 text-md items-center flex gap-2 flex-shrink-0"
            >
              <span>Link</span>
              <MdLink className="w-6 h-6" />
            </Badge>
          </Link>
        </div>

        <p className="whitespace-pre-wrap">{item.description}</p>
      </CardContent>
    </Card>
  );
}
