'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/components/providers/CurrencyProvider';

const blurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjRkZGREU3Ii8+PC9zdmc+';

export function BestsellerSpotlight() {
  const { formatPrice } = useCurrency();

  return (
    <section className='bg-[#FFD93D] py-20'>
      <div className='mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-5 md:px-6'>
        <div className='relative md:col-span-3'>
          <Image
            src='/images/mango-yakult.svg'
            alt='Mango Yakult Fruit Tea'
            width={960}
            height={640}
            placeholder='blur'
            blurDataURL={blurDataURL}
            className='h-full w-full rounded-3xl object-cover'
          />
          <span className='absolute left-4 top-4 rounded-full bg-white px-4 py-1 text-sm font-semibold text-[#3E1F00]'>
            Bestseller #1
          </span>
        </div>
        <div className='md:col-span-2'>
          <p className='text-sm font-semibold uppercase text-[#3E1F00]/70'>Spotlight Drink</p>
          <h3 className='mt-3 font-display text-4xl font-bold text-[#3E1F00]'>Mango Yakult Fruit Tea</h3>
          <p className='mt-4 text-[#3E1F00]/80'>Our crowd-favorite blend: real mango puree, probiotic yakult, and green tea over ice. Bright, creamy, and extra refreshing.</p>
          <p className='mt-4 text-sm text-[#3E1F00]/80'><strong>Tasting notes:</strong> tropical mango, citrus lift, smooth finish</p>
          <p className='mt-6 text-2xl font-bold text-[#3E1F00]'>From {formatPrice(89)}</p>
          <Button className='mt-5' asChild>
            <Link href='/menu?category=fruit-tea'>Try It</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
