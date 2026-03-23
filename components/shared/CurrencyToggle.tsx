'use client';

import { useCurrency } from '@/components/providers/CurrencyProvider';
import { cn } from '@/lib/utils';

export function CurrencyToggle() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className='inline-flex rounded-full border border-[#3E1F00]/20 bg-white p-1'>
      {(['PHP', 'USD'] as const).map((item) => (
        <button
          key={item}
          type='button'
          onClick={() => setCurrency(item)}
          className={cn(
            'rounded-full px-3 py-1 text-xs font-semibold',
            currency === item ? 'bg-[#3E1F00] text-white' : 'text-[#3E1F00]'
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
