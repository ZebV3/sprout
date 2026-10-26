import { SeedContent } from '@/components/mdx/seed-content';
import { getSeed, getSeedSlugs } from '@/lib/seeds';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getSeedSlugs().map((slug) => ({ slug }));
}

export default async function SeedPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const seed = getSeed(slug);
  if (!seed) notFound();

  return (
    <main className="mx-auto max-w-3xl p-6">
      <p className="text-sm opacity-70">{seed.meta.level}</p>
      <h1 className="text-3xl font-bold">{seed.meta.title}</h1>
      <p className="mb-8 opacity-80">{seed.meta.summary}</p>
      <article className="prose dark:prose-invert max-w-none">
        <SeedContent source={seed.content} />
      </article>
    </main>
  );
}
