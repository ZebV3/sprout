export default async function SeedsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <h1>Seed: {slug}</h1>;
}
