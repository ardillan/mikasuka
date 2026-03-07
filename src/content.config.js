import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const bicicosas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/bicicosas" }),
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    thumbnail: z.string(),
  }),
});

export const collections = { bicicosas };
