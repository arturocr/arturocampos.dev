declare module '@mdx-js/react' {
  import type { ComponentType, ReactNode } from 'react';

  interface MDXProviderProps {
    components?: Record<string, ComponentType<Record<string, unknown>>>;
    children: ReactNode;
  }

  export const MDXProvider: ComponentType<MDXProviderProps>;
}
