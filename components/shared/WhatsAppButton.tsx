'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href='https://wa.me/639171001111'
      target='_blank'
      rel='noreferrer'
      className='group fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg'
      aria-label='Chat with us on WhatsApp'
    >
      <MessageCircle className='h-6 w-6' />
      <span className='pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-[#3E1F00] px-3 py-1 text-xs opacity-0 transition group-hover:opacity-100'>
        Chat with us!
      </span>
    </a>
  );
}
