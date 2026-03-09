'use client';

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import ViewsCounter from '@/components/views-counter';

const PostViews = ({ path }: { path: string }) => {
  const { data } = useSWR<{ pageViews: string }>(
    `/api/page-views?slug=${encodeURIComponent(path)}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  return <ViewsCounter loading={!data} views={Number(data?.pageViews) || 0} />;
};

export default PostViews;
