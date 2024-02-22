import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { category } from "./category";
import { type InferSelectModel } from "drizzle-orm";

export const item = sqliteTable("item", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  short_desc: text("short_name").notNull(),
  description: text("desc").notNull(),
  slug: text("slug").notNull(),
  created_at: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
  category_id: integer("category_id").references(() => category.id),
  url: text("url").notNull(),
});

export type Item = InferSelectModel<typeof item>;
