"use server";
import { z } from "zod";
import { submitSchema } from "./schema";
import { db } from "@/db";
import { item } from "@/db/schema/item";

export async function submit(values: z.infer<typeof submitSchema>) {
  const result = db.insert(item).values({
    name: values.name,
    description: values.description,
    url: values.url,
    short_desc: values.short_desc,
    category_id: Number(values.category_id),
  });

  return result;
}
