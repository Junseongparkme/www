import { z, defineCollection } from "astro:content";

const webCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    author: z.string().default("Junseong Park"),
    authorContact: z.string().email().default("junseongpark.dev@gmail.com"),
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
