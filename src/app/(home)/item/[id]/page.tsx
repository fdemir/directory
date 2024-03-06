import ItemDetail from "../_components/detail";

export default function ItemDetailPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return <ItemDetail id={params.id} />;
}
