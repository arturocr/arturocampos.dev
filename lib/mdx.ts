import mdxPrism from 'mdx-prism';
import remarkCodeTitles from 'remark-code-titles';
import rehypeRaw from 'rehype-raw';

export const mdxOptions = {
  remarkPlugins: [remarkCodeTitles] as any[],
  rehypePlugins: [
    [
      rehypeRaw,
      {
        passThrough: [
          'mdxJsxFlowElement',
          'mdxJsxTextElement',
          'mdxFlowExpression',
          'mdxTextExpression',
          'mdxjsEsm',
        ],
      },
    ],
    mdxPrism,
  ] as any[],
};
