'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import useTranslation from '@/i18n/useTranslation';

interface ViewsCounterProps {
  loading?: boolean;
  views: number;
}

const DURATION = 1200; // ms

const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

const ViewsCounter = ({ loading = false, views }: ViewsCounterProps) => {
  const { t } = useTranslation();
  const [displayedViews, setDisplayedViews] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (loading || views === 0) return;

    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      const easedProgress = easeOutQuart(progress);

      setDisplayedViews(Math.round(easedProgress * views));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [views, loading]);

  return (
    <span
      className={clsx('transition-opacity duration-75', loading && 'opacity-0')}
    >
      {displayedViews.toLocaleString('en-US')}{' '}
      {displayedViews !== 1 ? t('visits') : t('visit')}
    </span>
  );
};

export default ViewsCounter;
