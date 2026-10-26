import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from './components';

export function SeedContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={mdxComponents} />;
}
