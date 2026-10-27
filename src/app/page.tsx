import Link from 'next/link';

const stages = [
  { name: 'Seed', desc: 'Absolute beginner' },
  { name: 'Sprout', desc: 'The basics' },
  { name: 'Sapling', desc: 'Intermediate' },
  { name: 'Tree', desc: 'Advanced' },
  { name: 'Forest', desc: 'Production and mastery' },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl space-y-12 p-6 py-16">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Learn Next.js and React by growing with it.
        </h1>
        <p className="max-w-2xl text-lg opacity-80">
          Every lesson is a Seed: short writing, a live demo, and the real
          source code beside it. Open source, built with the stack it teaches.
        </p>
        <Link
          href="/seeds"
          className="inline-block rounded-lg bg-green-700 px-5 py-2.5 font-medium text-white hover:bg-green-800"
        >
          Browse Seeds
        </Link>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">How you grow</h2>
        <ol className="grid gap-3 sm:grid-cols-5">
          {stages.map((s, i) => (
            <li key={s.name} className="rounded-lg border p-3">
              <p className="text-xs opacity-60">Stage {i + 1}</p>
              <p className="font-semibold">{s.name}</p>
              <p className="text-sm opacity-70">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
