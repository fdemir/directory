"use server";
import { z } from "zod";
import { zfd } from "zod-form-data";
import { db } from "@/db";
import { item } from "@/db/schema/item";

import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "@/lib/r2";
import { submitSchema } from "./schema";

export async function submit(values: FormData) {
  const payload = submitSchema.parse(values);

  const fileName = `${
    crypto.randomUUID() + "." + payload.logo.type.split("/")[1]
  }`;

  // TODO: optimize image for upload

  await db.insert(item).values({
    name: payload.name,
    description: payload.description,
    url: payload.url,
    short_desc: payload.short_desc,
    category_id: Number(payload.category_id),
    logo: fileName,
  });

  const putObjectCommand = new PutObjectCommand({
    Bucket: "dir",
    Key: fileName,
    ContentType: payload.logo.type,
    Body: Buffer.from(await payload.logo.arrayBuffer()),
  });

  await s3Client.send(putObjectCommand);

  return true;
}
