export async function generateStaticParams() {
  // Temporary: replaced by real data in Step 3
  return [{ slug: '01-routing' }];
}

export default async function SeedPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <h1>Seed: {slug}</h1>;
}
