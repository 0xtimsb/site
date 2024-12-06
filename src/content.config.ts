import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

import { POSTS_DATA_DIR } from "./constants";

const posts = defineCollection({
  loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: POSTS_DATA_DIR }),
  schema: z.object({
    title: z.string(),
    sort: z.number().optional(),
  }),
});

export const collections = { posts };
