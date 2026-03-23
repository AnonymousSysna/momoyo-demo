'use client';

import { Button } from '@/components/ui/button';
import { useCurrency } from '@/components/providers/CurrencyProvider';

const tiers = [
  {
    name: 'Starter Package',
    pricePhp: 350000,
    subtitle: 'kiosk setup',
    roi: 'ROI estimate: 12-16 months',
    includes: ['Compact kiosk build', 'Initial inventory', '2-week training'],
  },
  {
    name: 'Standard Package',
    pricePhp: 650000,
    subtitle: 'full store',
    roi: 'ROI estimate: 10-14 months',
    includes: ['Full store setup', 'Hiring support', '3-month marketing launch'],
  },
  {
    name: 'Premium Package',
    pricePhp: 950000,
    subtitle: 'flagship store',
    roi: 'ROI estimate: 8-12 months',
    includes: ['Flagship buildout', 'Advanced analytics support', 'Priority mentoring'],
  },
];

export function PricingTiers() {
  const { formatPrice } = useCurrency();

  return (
    <section className='mx-auto max-w-7xl px-4 py-16 md:px-6'>
      <h2 className='font-display text-4xl font-bold text-[#3E1F00]'>Investment Breakdown</h2>
      <div className='mt-8 grid gap-6 md:grid-cols-3'>
        {tiers.map((tier) => (
          <div key={tier.name} className='rounded-3xl bg-white p-6 shadow-sm'>
            <p className='text-sm font-semibold text-[#3E1F00]/70'>{tier.subtitle}</p>
            <h3 className='mt-2 text-2xl font-bold text-[#3E1F00]'>{tier.name}</h3>
            <p className='mt-2 text-3xl font-black text-[#FF6B6B]'>{formatPrice(tier.pricePhp)}</p>
            <ul className='mt-4 space-y-2 text-sm text-[#3E1F00]/80'>
              {tier.includes.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <p className='mt-3 text-sm font-semibold text-[#3E1F00]'>{tier.roi}</p>
            <Button className='mt-4 w-full'>Apply for This Tier</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
