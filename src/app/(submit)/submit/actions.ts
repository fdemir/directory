"use server";
import { db } from "@/db";
import { item } from "@/db/schema/item";

import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "@/lib/r2";
import { submitSchema } from "./schema";

import sharp from "sharp";

export async function submit(values: FormData) {
  const payload = submitSchema.parse(values);

  const fileName = `${crypto.randomUUID()}.webp`;

  await db.insert(item).values({
    name: payload.name,
    description: payload.description,
    url: payload.url,
    short_desc: payload.short_desc,
    category_id: Number(payload.category_id),
    logo: fileName,
  });

  const imageBuffer = Buffer.from(await payload.logo.arrayBuffer());
  const actualImage = await sharp(imageBuffer).resize(300).webp().toBuffer();

  const putObjectCommand = new PutObjectCommand({
    Bucket: "dir",
    Key: fileName,
    ContentType: "image/webp",
    Body: actualImage,
  });

  await s3Client.send(putObjectCommand);

  return true;
}
