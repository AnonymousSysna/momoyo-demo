'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function StickyOrderCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) return setVisible(false);
      setVisible(window.scrollY > window.innerHeight * 0.75);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className='fixed inset-x-3 bottom-3 z-40 md:hidden'>
      <Link
        href='/menu'
        className='block rounded-full bg-[#FF6B6B] py-3 text-center font-semibold text-white shadow-lg'
      >
        Order Now
      </Link>
    </div>
  );
}

