'use client';

import { useState } from 'react';

type Node = { name: string; children?: Node[] };

const tree: Node = {
  name: 'page.tsx',
  children: [
    {
      name: 'Header',
      children: [{ name: 'Logo' }, { name: 'SearchBox' }],
    },
    {
      name: 'ArticleList',
      children: [{ name: 'ArticleCard', children: [{ name: 'LikeButton' }] }],
    },
  ],
};

function count(node: Node, inClient: boolean, marked: Set<string>): number {
  const isClient = inClient || marked.has(node.name);
  return (
    (isClient ? 1 : 0) +
    (node.children ?? []).reduce((n, c) => n + count(c, isClient, marked), 0)
  );
}

function Row({
  node,
  inClient,
  marked,
  toggle,
  depth,
}: {
  node: Node;
  inClient: boolean;
  marked: Set<string>;
  toggle: (name: string) => void;
  depth: number;
}) {
  const isClient = inClient || marked.has(node.name);
  return (
    <>
      <label
        className="flex items-center gap-2 py-0.5"
        style={{ paddingLeft: depth * 16 }}
      >
        <input
          type="checkbox"
          checked={marked.has(node.name)}
          onChange={() => toggle(node.name)}
        />
        <code>{node.name}</code>
        <span
          className={`rounded px-1.5 text-xs ${isClient ? 'bg-amber-200 text-amber-900' : 'bg-green-200 text-green-900'}`}
        >
          {isClient ? 'client' : 'server'}
        </span>
      </label>
      {node.children?.map((c) => (
        <Row
          key={c.name}
          node={c}
          inClient={isClient}
          marked={marked}
          toggle={toggle}
          depth={depth + 1}
        />
      ))}
    </>
  );
}

export default function BoundaryExplorer() {
  const [marked, setMarked] = useState<Set<string>>(new Set());

  const toggle = (name: string) =>
    setMarked((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });

  return (
    <div className="space-y-3 text-sm">
      <p className="opacity-70">
        Tick a component to add &apos;use client&apos; to it.
      </p>
      <div>
        <Row
          node={tree}
          inClient={false}
          marked={marked}
          toggle={toggle}
          depth={0}
        />
      </div>
      <p className="font-medium">
        Components shipped as JavaScript: {count(tree, false, marked)} of 7
      </p>
    </div>
  );
}
