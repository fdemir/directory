"use server";

import { db } from "@/db";
import { category } from "@/db/schema/category";
import { item } from "@/db/schema/item";
import { eq, desc, and } from "drizzle-orm";

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
    .where(and(eq(category.slug, slug), eq(item.verified, 1)))
    .orderBy(desc(item.created_at))
    .limit(100);
}

export async function getItems() {
  return db
    .select()
    .from(item)
    .where(eq(item.verified, 1))
    .orderBy(desc(item.created_at))
    .limit(100);
}
