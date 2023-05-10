import { email, name } from "@/metadata";
import { z, defineCollection } from "astro:content";

const webCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    author: z.string().default(name),
    authorContact: z.string().email().default(email),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});

export const collections = {
  web: webCollection,
};
