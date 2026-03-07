'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { pageview } from '@/lib/gtag';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    pageview(window.location.href, document.title);
  }, [pathname]);

  return null;
}
