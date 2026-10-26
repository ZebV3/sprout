import matter from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';

const SEEDS_DIR = path.join(process.cwd(), 'content', 'seeds');
const SLUG_PATTERN = /^[a-z0-9-]+$/;

export type SeedLevel = 'Seed' | 'Sprout' | 'Sapling' | 'Tree' | 'Forest';

export interface SeedMeta {
  slug: string;
  title: string;
  level: SeedLevel;
  summary: string;
}

export interface Seed {
  meta: SeedMeta;
  content: string;
}

export function getSeedSlugs(): string[] {
  return fs
    .readdirSync(SEEDS_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
    .sort();
}

export function getSeed(slug: string): Seed | null {
  // reject escaped seeds folder
  if (!SLUG_PATTERN.test(slug)) return null;

  const file = path.join(SEEDS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;

  const { data, content } = matter(fs.readFileSync(file, 'utf8'));

  return {
    meta: {
      slug,
      title: data.title,
      level: data.level,
      summary: data.summary,
    },
    content,
  };
}

export function getAllSeeds(): SeedMeta[] {
  return getSeedSlugs().map((slug) => getSeed(slug)!.meta);
}
