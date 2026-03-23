'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from '@/components/shared/CountdownTimer';
import { trackCtaClick } from '@/lib/analytics';

const blurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjRkZGREU3Ii8+PC9zdmc+';

export function HeroSection() {
  return (
    <section className='relative min-h-screen overflow-hidden px-4 pb-16 pt-44 md:px-6'>
      <motion.div
        className='pointer-events-none absolute -top-40 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6BCB77] opacity-45 blur-3xl'
        animate={{ scale: [1, 1.2, 1], rotate: [0, 12, -8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className='relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2'>
        <div>
          <p className='mb-4 inline-flex rounded-full bg-[#FFFDE7] px-4 py-1 text-sm font-semibold text-[#3E1F00]'>Freshly made in the Philippines</p>
          <h1 className='font-display text-4xl font-black leading-tight text-[#3E1F00] sm:text-6xl'>Your Happiest Sip Starts Here.</h1>
          <p className='mt-4 max-w-lg text-lg text-[#3E1F00]/80'>Fruit Tea • Ice Cream • Coffee — made fresh in the Philippines</p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
            <Button asChild size='lg' onClick={() => trackCtaClick('see_menu_hero', '/')}>
              <Link href='/menu'>See Our Menu</Link>
            </Button>
            <Button asChild variant='outline' size='lg' onClick={() => trackCtaClick('find_store_hero', '/')}>
              <Link href='/locations'>Find a Store</Link>
            </Button>
          </div>

          <CountdownTimer />
        </div>

        <div className='relative h-[420px]'>
          {[
            { src: '/images/hero-fruit-tea.svg', alt: 'Fruit tea cup', top: '8%', left: '8%', delay: 0 },
            { src: '/images/hero-ice-cream.svg', alt: 'Ice cream cup', top: '42%', left: '36%', delay: 0.2 },
            { src: '/images/hero-coffee.svg', alt: 'Coffee cup', top: '10%', right: '6%', delay: 0.4 },
          ].map((img) => (
            <motion.div
              key={img.src}
              className='absolute'
              style={img as never}
              initial={{ y: 0 }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, delay: img.delay, ease: 'easeInOut' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={220}
                height={220}
                placeholder='blur'
                blurDataURL={blurDataURL}
                priority
                className='drop-shadow-xl'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
