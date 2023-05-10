import { email, name } from "@/metadata";
import { z, defineCollection } from "astro:content";

const webCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    author: z.string().default(name),
    authorContact: z.string().email().default(email),
  }),
});

export const collections = {
  web: webCollection,
};
