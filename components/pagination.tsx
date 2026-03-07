'use client';

import { useRouter } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  numPages: number;
}

export default function Pagination({ currentPage, numPages }: PaginationProps) {
  const router = useRouter();

  if (numPages <= 1) return null;

  return (
    <div className='pagination'>
      {Array.from({ length: numPages }, (_, i) => (
        <button
          key={`pagination-number${i + 1}`}
          onClick={() => router.push(`?page=${i + 1}`)}
          className={currentPage === i + 1 ? 'active' : ''}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
