import { ReactElement, ReactNode } from 'react';
import { CodeBlock } from './code-block';
import { Demo } from '@/components/demo/demo';

function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="my-4 rounded-lg border-l-4 border-green-600 bg-green-50 p-4 text-green-950 dark:bg-green-950 dark:text-green-50">
      {children}
    </aside>
  );
}

function Pre({ children }: { children?: ReactNode }) {
  const code = children as ReactElement<{
    className?: string;
    children?: string;
  }>;
  const lang = code.props.className?.replace('language-', '') || 'text';

  return <CodeBlock code={String(code.props.children).trimEnd()} lang={lang} />;
}

export const mdxComponents = {
  Callout,
  Demo,
  pre: Pre,
};
