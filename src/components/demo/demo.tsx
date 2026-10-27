import { demos } from '@/demos/registry';
import fs from 'node:fs';
import path from 'node:path';
import { CodeBlock } from '../mdx/code-block';

export async function Demo({ name, title }: { name: string; title?: string }) {
  const Component = demos[name];
  if (!Component)
    throw new Error(`Unknown demo: "${name}" Add it to src/demos/registry.ts`);

  const source = fs.readFileSync(
    path.join(process.cwd(), 'src', 'demos', `${name}.tsx`),
    'utf8',
  );

  return (
    <section className="not-prose my-6 rounded-xl border p-4">
      {title && <h3 className="mb-3 font-semibold">{title}</h3>}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <p className="mb-2 text-xs tracking-wide uppercase opacity-60">
            Preview
          </p>
          <Component />
        </div>
        <div className="min-w-0">
          <p className="mb-2 text-xs tracking-wide uppercase opacity-60">
            Source
          </p>
          <CodeBlock code={source.trimEnd()} />
        </div>
      </div>
    </section>
  );
}
