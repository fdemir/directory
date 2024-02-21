import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const category = sqliteTable('category', {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  icon: text("icon").notNull(),
  slug: text("slug").notNull(),
});