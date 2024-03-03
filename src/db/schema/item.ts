import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { category } from "./category";
import { type InferSelectModel } from "drizzle-orm";

export const item = sqliteTable("item", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  short_desc: text("short_desc").notNull(),
  description: text("description").notNull(),
  created_at: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
  category_id: integer("category_id")
    .references(() => category.id)
    .default(0),
  url: text("url").notNull(),
  logo: text("logo").notNull(),
  // 0 = not verified, 1 = verified
  verified: integer("verified").default(0),
});

export type Item = InferSelectModel<typeof item>;
