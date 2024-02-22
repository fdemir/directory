"use server"

import { db } from "@/db"
import { category } from "@/db/schema/category"

export async function getCategories() {
  return db.select().from(category)
}