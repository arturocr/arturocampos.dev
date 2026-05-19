'use client';

import { useEffect, useState } from 'react';

interface AdUnitProps {
  slot: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdUnit = ({ slot }: AdUnitProps) => {
  const [mounted, setMounted] = useState(false);
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  useEffect(() => {
    setMounted(true);
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  if (!mounted || !publisherId || !slot) return null;

  return (
    <div className='overflow-hidden text-center'>
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
