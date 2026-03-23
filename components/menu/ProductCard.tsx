'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useCurrency } from '@/components/providers/CurrencyProvider';

const blurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjRkZGREU3Ii8+PC9zdmc+';

const sizes: Array<keyof Product['price']> = ['small', 'medium', 'large'];

export function ProductCard({ product }: { product: Product }) {
  const [size, setSize] = useState<keyof Product['price']>('medium');
  const { formatPrice } = useCurrency();
  const price = useMemo(() => product.price[size], [product, size]);

  return (
    <article className='overflow-hidden rounded-3xl border border-[#3E1F00]/10 bg-white'>
      <div className='flex flex-col md:flex-col max-md:flex-row'>
        <Image
          src={product.image}
          alt={product.name}
          width={420}
          height={420}
          placeholder='blur'
          blurDataURL={blurDataURL}
          className='h-40 w-40 object-cover max-md:shrink-0 md:h-60 md:w-full'
        />
        <div className='flex-1 p-4'>
          {product.badge ? (
            <Badge className='bg-[#FFD93D] text-[#3E1F00]'>
              {product.badge}
            </Badge>
          ) : null}
          <h3 className='mt-2 text-xl font-bold text-[#3E1F00]'>{product.name}</h3>
          <p className='mt-1 line-clamp-2 text-sm text-[#3E1F00]/70'>{product.description}</p>
          <p className='mt-2 font-semibold text-[#3E1F00]'>{formatPrice(price)}</p>

          <div className='mt-3 flex gap-2'>
            {sizes.map((option) => (
              <button
                key={option}
                onClick={() => setSize(option)}
                className={cn(
                  'rounded-full border px-3 py-1 text-xs font-semibold uppercase',
                  size === option
                    ? 'border-[#FF6B6B] bg-[#FF6B6B] text-white'
                    : 'border-[#3E1F00]/20 text-[#3E1F00]'
                )}
              >
                {option[0].toUpperCase()}
              </button>
            ))}
          </div>

          <Button className='mt-4 w-full'>Add to Order</Button>
        </div>
      </div>
    </article>
  );
}

