import Item from "@/app/(home)/_components/item";
import { getItemById, getItemsBySlug } from "@/app/(home)/actions";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdLink } from "react-icons/md";

export default async function ItemDetail({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const item = await getItemById(Number(params.id));

  if (!item) {
    notFound();
  }

  return (
    <Card>
      <CardHeader className="pb-0">
        <Item data={item} />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

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

        <p>{item.description}</p>
      </CardContent>
    </Card>
  );
}
