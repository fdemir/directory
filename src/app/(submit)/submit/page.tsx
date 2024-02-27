import { getCategories } from "@/app/(home)/actions";
import { SubmitForm } from "./_components/form";

export default async function Submit() {
  const categoryList = await getCategories();

  return <SubmitForm categories={categoryList} />;
}
