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
    <section>
      {title && <h3>{title}</h3>}
      <div>
        <div>
          <p>Preview</p>
          <Component />
        </div>
        <div>
          <p>Source</p>
          <CodeBlock code={source.trimEnd()} />
        </div>
      </div>
    </section>
  );
}
