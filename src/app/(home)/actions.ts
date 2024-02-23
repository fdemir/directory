"use server";

import { db } from "@/db";
import { category } from "@/db/schema/category";
import { item } from "@/db/schema/item";
import { eq, desc } from "drizzle-orm";

export async function getCategories() {
  return db.select().from(category);
}

export async function getCategory(slug: string) {
  return db.query.category.findFirst({
    where: eq(category.slug, slug),
  });
}

export async function getItemById(id: number) {
  return db.query.item.findFirst({
    where: eq(item.id, id),
  });
}

export async function getItemsBySlug(slug: string) {
  // TODO: consider the db.query
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
