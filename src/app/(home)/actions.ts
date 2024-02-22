"use server";

import { db } from "@/db";
import { category } from "@/db/schema/category";
import { item } from "@/db/schema/item";
import { eq, desc } from "drizzle-orm";

export async function getCategories() {
  return db.select().from(category);
}

export async function getItemsBySlug(slug: string) {
  return db
    .select({
      item,
    })
    .from(item)
    .leftJoin(category, eq(item.category_id, category.id))
    .where(eq(category.slug, slug))
    .orderBy(desc(item.created_at))
    .limit(100);
}

export async function getItems() {
  return db.select().from(item).orderBy(desc(item.created_at)).limit(100);
}
