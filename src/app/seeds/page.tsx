import { getAllSeeds } from '@/lib/seeds';
import Link from 'next/link';

export default function SeedsPage() {
  const seeds = getAllSeeds();
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Seeds</h1>
      <ul className="space-y-4">
        {seeds.map((seed) => (
          <li key={seed.slug} className="rounded-lg border p-4">
            <Link
              href={`/seeds/${seed.slug}`}
              className="text-xl font-semibold"
            >
              {seed.title}
            </Link>
            <p className="text-sm opacity-70">{seed.level}</p>
            <p>{seed.level}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
