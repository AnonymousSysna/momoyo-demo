'use client';

import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

const KEY = 'momoyo-banner-dismissed';

export function AnnouncementBanner() {
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return localStorage.getItem(KEY) !== '1';
  });

  if (!visible) return null;

  return (
    <div className='fixed inset-x-0 top-0 z-50 bg-[#FF6B6B] px-4 py-2 text-sm font-semibold text-white'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3'>
        <p>New branches opening in Cebu & Davao this March!</p>
        <div className='flex items-center gap-3'>
          <Link href='/locations' className='underline underline-offset-2'>
            View Locations
          </Link>
          <button
            aria-label='Dismiss announcement'
            onClick={() => {
              localStorage.setItem(KEY, '1');
              setVisible(false);
            }}
            className='rounded-full p-1 hover:bg-white/20'
          >
            <X className='h-4 w-4' />
          </button>
        </div>
      </div>
    </div>
  );
}
