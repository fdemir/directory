import { z } from "zod";

export const submitSchema = z.object({
  name: z.string().min(2),
  description: z.string().max(1000),
  url: z.string().url("Must be a valid URL"),
  short_desc: z.string().min(1).max(100),
  category_id: z.string(),
});
