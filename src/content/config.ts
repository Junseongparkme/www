import { email, name } from "@/metadata";
import { z, defineCollection } from "astro:content";

const webCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string().default(name),
    authorContact: z.string().email().default(email),
    publishDate: z.date().default(() => new Date()),
  }),
});

export const collections = {
  web: webCollection,
};
