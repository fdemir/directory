import { z } from "zod";
import { zfd } from "zod-form-data";

const MAX_FILE_SIZE = 1024 * 1024 * 5;

export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const submitSchema = zfd.formData({
  name: zfd.text(z.string().min(80)),
  description: zfd.text(z.string().max(1000)),
  url: zfd.text(z.string().url("Must be a valid URL")),
  short_desc: zfd.text(z.string().min(1).max(100)),
  category_id: zfd.text(),
  logo: zfd
    .file()
    .refine((file) => file, "Image is required.")
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
});
