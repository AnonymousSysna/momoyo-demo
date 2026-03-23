'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FEATURED_PRODUCTS } from '@/lib/products';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/components/providers/CurrencyProvider';

const cards = [
  FEATURED_PRODUCTS['fruit-tea'],
  FEATURED_PRODUCTS['ice-cream'],
  FEATURED_PRODUCTS['coffee'],
];

const blurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjRkZGREU3Ii8+PC9zdmc+';

export function FeaturedProducts() {
  const { formatPrice } = useCurrency();

  return (
    <section className='mx-auto max-w-7xl px-4 py-20 md:px-6'>
      <h2 className='font-display text-4xl font-bold text-[#3E1F00]'>What&apos;s Fresh Today</h2>
      <div className='mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {cards.map((product) => (
          <motion.div key={product.id} whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
            <Card className='h-full overflow-hidden shadow-sm'>
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                placeholder='blur'
                blurDataURL={blurDataURL}
                className='h-64 w-full object-cover'
              />
              <CardContent>
                <h3 className='text-2xl font-bold text-[#3E1F00]'>{product.name}</h3>
                <p className='mt-2 text-sm text-[#3E1F00]/75'>{product.description}</p>
                <p className='mt-2 font-semibold text-[#3E1F00]'>from {formatPrice(product.price.small)}</p>
                <Button asChild className='mt-4 w-full'>
                  <Link href={`/menu?category=${product.category}`}>Order Now</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


