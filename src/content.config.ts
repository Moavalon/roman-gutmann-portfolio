import { defineCollection } from "astro:content";
import { array, enum as zenum, number, object, string, url } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: object({
    key: zenum(["lagerverwaltung", "internship", "mymillgame", "burgenbau"]),
    locale: zenum(["de", "en"]),
    routeSlug: string(),
    order: number(),
    title: string(),
    kicker: string(),
    excerpt: string(),
    context: string(),
    role: string(),
    contributions: array(string()),
    stack: array(string()),
    learnings: array(string()),
    repository: url().optional(),
    demo: url().optional(),
    accent: zenum(["teal", "blue", "amber"]),
  }),
});

export const collections = { projects };
