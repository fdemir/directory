import Item from "@/app/(home)/_components/item";
import { getItemById, getItemsBySlug } from "@/app/(home)/actions";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { notFound } from "next/navigation";

export default async function ItemDetail({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const item = await getItemById(params.id);

  if (!item) {
    notFound();
  }

  return (
    <Card>
      <CardHeader className="pb-0">
        <Item data={item} />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <p>{item.description}</p>
      </CardContent>
    </Card>
  );
}
