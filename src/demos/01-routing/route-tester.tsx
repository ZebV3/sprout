'use client';

import { useState } from 'react';

function toUrl(filePath: string): string | null {
  const segments = filePath.split('/').filter(Boolean);
  if (segments[0] === 'app') segments.shift();
  if (segments.pop() !== 'page.tsx') return null;

  const parts = segments
    .filter((s) => !(s.startsWith('(') && s.endsWith(')'))) // route groups
    .map((s) => (s.startsWith('[') ? `:${s.slice(1, -1)}` : s)); // dynamic segment

  return '/' + parts.join('/');
}

export default function RouteTester() {
  const [path, setPath] = useState('app/blog/[slug]/page.tsx');
  const url = toUrl(path);

  return (
    <div className="space-y-3">
      <label className="block text-sm">
        File path
        <input
          value={path}
          onChange={(e) => setPath(e.target.value)}
          className="mt-1 w-full rounded border px-2 py-1 font-mono"
        />
      </label>
      <p>
        URL: <code>{url ?? 'Not a route (needs to end in page.tsx)'}</code>
      </p>
    </div>
  );
}
