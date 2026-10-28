import { ComponentType } from 'react';
import RouteTester from './01-routing/route-tester';
import LayoutPersistence from './02-layouts/layout-persistence';
import BoundaryExplorer from './03-server-client/boundary-explorer';
import LinkPlayground from './04-link-image-font/link-playground';

export const demos: Record<string, ComponentType> = {
  '01-routing/route-tester': RouteTester,
  '02-layouts/layout-persistence': LayoutPersistence,
  '03-server-client/boundary-explorer': BoundaryExplorer,
  '04-link-image-font/link-playground': LinkPlayground,
};
