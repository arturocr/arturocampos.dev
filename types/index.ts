import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface FrontMatter {
  title: string;
  date: string;
  description?: string;
  slug?: string;
  image?: string;
  author?: string;
  [key: string]: unknown;
}

export interface PostData {
  slug: string;
  content: string;
  frontMatter: FrontMatter;
}

export interface GetContentParams {
  slug: string;
  locale: string;
  type: 'content' | 'posts';
}

export interface ContentResult {
  props: {
    mdxSource: MDXRemoteSerializeResult;
    frontMatter: FrontMatter;
    hydrationComponentsList: string[];
  };
}

export interface SalaryCurrency {
  symbol: string;
  value: string;
}

export interface Tract {
  id: string;
  from: number;
  to: number | null;
  percentage: number;
}

export interface TractWithDeductible extends Tract {
  deductible: number;
}

export interface CalculatorConfig {
  periodBegins: string;
  periodEnds: string;
  socialSecurityTax: number;
  sourceLink: string;
}

export interface CalculatorData {
  salaryCurrencies: SalaryCurrency[];
  tracts: Tract[];
  config: CalculatorConfig;
}

export interface CalculatorState {
  exchangeRate: number;
  salary: number;
  salaryCurrency: string;
}

export interface LocalizedPathParams {
  defaultLocale?: string;
  locale?: string;
  asPath: string;
}

export interface GTagEventParams {
  action: string;
  category: string;
  label: string;
  value: number;
}
