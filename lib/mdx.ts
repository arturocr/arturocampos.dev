import mdxPrism from 'mdx-prism';
import remarkCodeTitles from 'remark-code-titles';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export const mdxOptions = {
  remarkPlugins: [remarkCodeTitles, remarkGfm] as any[],
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
