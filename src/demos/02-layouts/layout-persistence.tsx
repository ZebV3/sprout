'use client';

import { useState } from 'react';

const pages = ['Overview', 'Settings', 'Billing'];

function Shell({
  page,
  onNavigate,
}: {
  page: string;
  onNavigate: (p: string) => void;
}) {
  const [note, setNote] = useState('');
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onNavigate(p)}
            className={`rounded border px-2 py-1 ${p === page ? 'bg-green-700 text-white' : ''}`}
          >
            {p}
          </button>
        ))}
      </div>
      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Type here, then switch pages"
        className="w-full rounded border px-2 py-1"
      />
      <div className="rounded bg-black/5 p-3 dark:bg-white/10">
        Page: {page}
      </div>
    </div>
  );
}

export default function LayoutPersistence() {
  const [page, setPage] = useState(pages[0]);
  const [useTemplate, setUseTemplate] = useState(false);

  return (
    <div className="space-y-3 text-sm">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={useTemplate}
          onChange={(e) => setUseTemplate(e.target.checked)}
        />
        Use template.tsx instead of layout.tsx
      </label>
      <p className="font-mono text-xs opacity-60">
        {useTemplate ? 'template.tsx (remounts)' : 'layout.tsx (persists)'}
      </p>
      <Shell
        key={useTemplate ? page : 'layout'}
        page={page}
        onNavigate={setPage}
      />
    </div>
  );
}
