import Link from 'next/link';

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur dark:bg-black/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-bold">
          🌱 Sprout
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/seeds">Seeds</Link>
          <a
            href="https://github.com/ZebV3/sprout"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
