'use client';

import { motion } from 'framer-motion';

const items = [
  '* 4.9/5 Rating',
  '50,000+ Happy Customers',
  '30+ Branches Nationwide',
  'Fresh Ingredients Daily',
  'Best Milk Tea 2024 - Manila Food Awards',
];

export function SocialProofTicker() {
  return (
    <section className='overflow-hidden bg-[#3E1F00] py-4 text-white/95'>
      <motion.div
        className='flex gap-8 whitespace-nowrap'
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <p key={`${item}-${idx}`} className='font-semibold'>{item}</p>
        ))}
      </motion.div>
    </section>
  );
}
