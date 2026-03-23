'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from '@/components/shared/CountdownTimer';
import { trackCtaClick } from '@/lib/analytics';

const blurDataURL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjRkZGREU3Ii8+PC9zdmc+';

const heroItems = [
  {
    src: '/images/hero-fruit-tea.svg',
    alt: 'Fruit tea cup',
    delay: 0,
    desktopClass: 'left-[8%] top-[8%]',
  },
  {
    src: '/images/hero-ice-cream.svg',
    alt: 'Ice cream cup',
    delay: 0.2,
    desktopClass: 'left-[36%] top-[42%]',
  },
  {
    src: '/images/hero-coffee.svg',
    alt: 'Coffee cup',
    delay: 0.4,
    desktopClass: 'right-[6%] top-[10%]',
  },
] as const;

export function HeroSection() {
  return (
    <section className='relative min-h-screen overflow-hidden px-4 pb-14 pt-36 md:px-6 md:pb-16 md:pt-44'>
      <motion.div
        className='pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6BCB77] opacity-45 blur-3xl sm:h-[540px] sm:w-[540px]'
        animate={{ scale: [1, 1.2, 1], rotate: [0, 12, -8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className='relative mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-2'>
        <div>
          <p className='mb-4 inline-flex rounded-full bg-[#FFFDE7] px-4 py-1 text-xs font-semibold text-[#3E1F00] sm:text-sm'>
            Freshly made in the Philippines
          </p>
          <h1 className='font-display text-3xl font-black leading-tight text-[#3E1F00] sm:text-5xl lg:text-6xl'>
            Your Happiest Sip Starts Here.
          </h1>
          <p className='mt-4 max-w-lg text-base text-[#3E1F00]/80 sm:text-lg'>
            Fruit Tea • Ice Cream • Coffee - made fresh in the Philippines
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
            <Button asChild size='lg' className='w-full sm:w-auto' onClick={() => trackCtaClick('see_menu_hero', '/')}>
              <Link href='/menu'>See Our Menu</Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='w-full sm:w-auto'
              onClick={() => trackCtaClick('find_store_hero', '/')}
            >
              <Link href='/locations'>Find a Store</Link>
            </Button>
          </div>

          <CountdownTimer />
        </div>

        <div className='mt-2 sm:mt-0'>
          <div className='flex items-center justify-center gap-3 sm:hidden'>
            {heroItems.map((item) => (
              <Image
                key={`mobile-${item.src}`}
                src={item.src}
                alt={item.alt}
                width={110}
                height={110}
                placeholder='blur'
                blurDataURL={blurDataURL}
                priority
                className='h-[96px] w-[96px] drop-shadow-xl'
              />
            ))}
          </div>

          <div className='relative hidden h-[360px] sm:block lg:h-[420px]'>
            {heroItems.map((item) => (
              <motion.div
                key={item.src}
                className={`absolute ${item.desktopClass}`}
                initial={{ y: 0 }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={220}
                  height={220}
                  placeholder='blur'
                  blurDataURL={blurDataURL}
                  priority
                  className='h-[170px] w-[170px] drop-shadow-xl lg:h-[220px] lg:w-[220px]'
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
