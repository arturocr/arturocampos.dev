'use client';

import { useEffect } from 'react';

interface AdUnitProps {
  slot: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdUnit = ({ slot }: AdUnitProps) => {
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  if (!publisherId || !slot) return null;

  return (
    <div className='overflow-hidden my-4 text-center'>
      <ins
        className='adsbygoogle'
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client={publisherId}
        data-ad-format='fluid'
        data-ad-layout='in-article'
        data-ad-slot={slot}
        data-full-width-responsive='true'
      ></ins>
    </div>
  );
};

export default AdUnit;
