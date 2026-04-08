'use client';

import Giscus from '@giscus/react';

export default function GiscusComments({ locale }: { locale: string }) {
  return (
    <>
      <hr className='my-5' />
      <Giscus
        repo={process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`}
        repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID!}
        category='Blog'
        categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!}
        mapping='pathname'
        strict='0'
        reactionsEnabled='1'
        emitMetadata='0'
        inputPosition='top'
        theme='noborder_light'
        lang={locale}
        loading='lazy'
      />
    </>
  );
}
