'use client';

import useSWR from 'swr';
import ViewsCounter from '@/components/views-counter';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const PostViews = ({ path }: { path: string }) => {
  const { data } = useSWR(
    `/api/page-views?slug=${encodeURIComponent(path)}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  return <ViewsCounter loading={!data} views={Number(data?.pageViews) || 0} />;
};

export default PostViews;
