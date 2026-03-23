'use client';

import { ProductCategory } from '@/lib/products';
import { cn } from '@/lib/utils';

const tabs: Array<{ label: string; value: ProductCategory | 'all' }> = [
  { label: 'All', value: 'all' },
  { label: 'Fruit Tea', value: 'fruit-tea' },
  { label: 'Ice Cream', value: 'ice-cream' },
  { label: 'Coffee', value: 'coffee' },
  { label: 'Add-ons', value: 'add-on' },
];

export function FilterBar({
  active,
  onChange,
}: {
  active: ProductCategory | 'all';
  onChange: (value: ProductCategory | 'all') => void;
}) {
  return (
    <div className='sticky top-[108px] z-20 mb-8 overflow-x-auto rounded-2xl bg-white/95 p-2 shadow-sm backdrop-blur'>
      <div className='flex min-w-max gap-2'>
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-semibold',
              active === tab.value ? 'bg-[#FF6B6B] text-white' : 'text-[#3E1F00] hover:bg-[#FFFDE7]'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

