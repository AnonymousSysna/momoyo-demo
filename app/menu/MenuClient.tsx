'use client';

import { useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FilterBar } from '@/components/menu/FilterBar';
import { ProductGrid } from '@/components/menu/ProductGrid';
import { PRODUCTS, ProductCategory } from '@/lib/products';
import { trackMenuFilter } from '@/lib/analytics';

export default function MenuClient() {
  const router = useRouter();
  const params = useSearchParams();
  const category = (params.get('category') as ProductCategory | null) ?? 'all';

  const filtered = useMemo(() => {
    if (category === 'all') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === category);
  }, [category]);

  const onChange = (value: ProductCategory | 'all') => {
    const next = new URLSearchParams(params.toString());
    if (value === 'all') next.delete('category');
    else next.set('category', value);
    trackMenuFilter(value);
    router.replace(`/menu${next.toString() ? `?${next.toString()}` : ''}`);
  };

  return (
    <section className='mx-auto max-w-7xl px-4 py-10 md:px-6'>
      <h1 className='font-display text-4xl font-bold text-[#3E1F00]'>Full Menu</h1>
      <p className='mt-2 text-[#3E1F00]/75'>Find your next favorite sip or scoop.</p>
      <FilterBar active={category} onChange={onChange} />
      <ProductGrid products={filtered} onReset={() => onChange('all')} />
    </section>
  );
}

