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
    <div className='my-4 overflow-hidden text-center'>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client={publisherId}
        data-ad-slot={slot}
        data-ad-format='auto'
        data-full-width-responsive='true'
      />
    </div>
  );
};

export default AdUnit;
