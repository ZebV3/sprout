import { ReactNode } from 'react';

function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="my-4 rounded-lg border-l-4 border-green-600 bg-green-50 p-4 text-green-950 dark:bg-green-950 dark:text-green-50">
      {children}
    </aside>
  );
}

export const mdxComponents = {
  Callout,
};
