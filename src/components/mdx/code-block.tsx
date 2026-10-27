'use cache';

import { codeToHtml } from 'shiki';

export async function CodeBlock({
  code,
  lang = 'tsx',
}: {
  code: string;
  lang?: string;
}) {
  const html = await codeToHtml(code, {
    lang,
    themes: { light: 'github-light', dark: 'github-dark' },
  });

  return (
    <div
      className="overflow-x-auto rounded-lg border text-sm [&_pre]:m-0 [&_pre]:p-4"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
