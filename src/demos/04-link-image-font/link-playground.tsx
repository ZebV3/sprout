'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LinkPlayground() {
  const [prefetch, setPrefetch] = useState(true);
  const [replace, setReplace] = useState(false);
  const [scroll, setScroll] = useState(true);

  const extra = [
    !prefetch && 'prefetch={false}',
    replace && 'replace',
    !scroll && 'scroll={false}',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="space-y-3 text-sm">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={prefetch}
          onChange={(e) => setPrefetch(e.target.checked)}
        />
        Prefetch
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={replace}
          onChange={(e) => setReplace(e.target.checked)}
        />
        Replace history entry
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={scroll}
          onChange={(e) => setScroll(e.target.checked)}
        />
        Scroll to top
      </label>

      <pre className="overflow-x-auto rounded bg-black/5 p-2 dark:bg-white/10">
        <code>{`<Link href="/seeds"${extra ? ' ' + extra : ''}>Seeds</Link>`}</code>
      </pre>

      <Link
        href="/seeds"
        prefetch={prefetch ? undefined : false}
        replace={replace}
        scroll={scroll}
        className="inline-block rounded bg-green-700 px-3 py-1.5 text-white"
      >
        Go to Seeds
      </Link>
      <p className="opacity-60">
        After clicking, try the browser Back button. With replace on, the
        previous entry is gone.
      </p>
    </div>
  );
}
