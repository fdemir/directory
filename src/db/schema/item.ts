import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { category } from "./category";

export const item = sqliteTable('item', {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  short: text("short_name").notNull(),
  slug: text("slug").notNull(),
  description: text("desc").notNull(),
  created_at: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
  category_id: integer("category_id").references(() => category.id),
  url: text("url").notNull(),
});