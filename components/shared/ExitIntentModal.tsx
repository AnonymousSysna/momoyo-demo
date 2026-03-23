'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const KEY = 'momoyo-exit-intent-dismissed';

export function ExitIntentModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;
    if (sessionStorage.getItem(KEY) === '1') return;

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        setShow(true);
      }
    };

    document.addEventListener('mouseleave', onMouseLeave);
    return () => document.removeEventListener('mouseleave', onMouseLeave);
  }, []);

  const close = () => {
    sessionStorage.setItem(KEY, '1');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className='fixed inset-0 z-[90] grid place-items-center bg-black/45 p-4'>
      <div className='w-full max-w-md rounded-3xl bg-white p-6'>
        <div className='mb-4 flex items-start justify-between'>
          <div>
            <h3 className='font-display text-2xl font-bold text-[#3E1F00]'>Wait! Get 10% off your first order</h3>
            <p className='mt-2 text-sm text-[#3E1F00]/70'>Drop your email and we will send your discount code.</p>
          </div>
          <button onClick={close} className='rounded-full p-2 hover:bg-[#FFFDE7]'>
            <X className='h-4 w-4' />
          </button>
        </div>
        <div className='space-y-3'>
          <Input type='email' placeholder='you@example.com' />
          <Button className='w-full' onClick={close}>Get My Discount</Button>
        </div>
      </div>
    </div>
  );
}

