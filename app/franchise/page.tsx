import type { Metadata } from 'next';
import { Briefcase, Megaphone, Truck, Monitor, Palette, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PricingTiers } from '@/components/franchise/PricingTiers';
import { ApplicationForm } from '@/components/franchise/ApplicationForm';

export const metadata: Metadata = {
  title: 'Franchise | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee',
  description: 'Start your Momoyo franchise in the Philippines with flexible packages, support, and fast-growing demand.',
  openGraph: { title: 'Franchise | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee', description: 'Learn investment tiers and submit your Momoyo franchise application.', images: ['/images/og-franchise.svg'] },
  twitter: { card: 'summary_large_image', title: 'Franchise | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee', description: 'Learn investment tiers and submit your Momoyo franchise application.', images: ['/images/og-franchise.svg'] },
};

const benefits = [
  { icon: Briefcase, text: 'Training Program' },
  { icon: Megaphone, text: 'Marketing Support' },
  { icon: Truck, text: 'Supply Chain' },
  { icon: Monitor, text: 'POS System' },
  { icon: Palette, text: 'Brand Materials' },
  { icon: Handshake, text: 'Ongoing Mentoring' },
];

export default function FranchisePage() {
  return (
    <div>
      <section className='mx-auto max-w-7xl px-4 py-16 md:px-6'>
        <p className='text-sm font-semibold uppercase tracking-widest text-[#3E1F00]/70'>Franchise Opportunity</p>
        <h1 className='mt-3 font-display text-5xl font-black text-[#3E1F00]'>Build Your Future with Momoyo</h1>
        <p className='mt-4 max-w-xl text-lg text-[#3E1F00]/80'>Low investment. High returns. Full support.</p>
        <Button asChild className='mt-7'>
          <a href='#franchise-form'>Apply Now</a>
        </Button>
      </section>

      <PricingTiers />

      <section className='mx-auto max-w-7xl px-4 py-10 md:px-6'>
        <h2 className='font-display text-4xl font-bold text-[#3E1F00]'>Franchise Benefits</h2>
        <div className='mt-8 grid gap-4 md:grid-cols-3'>
          {benefits.map((item) => (
            <div key={item.text} className='rounded-2xl bg-white p-5'>
              <item.icon className='h-6 w-6 text-[#FF6B6B]' />
              <p className='mt-3 font-semibold text-[#3E1F00]'>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 py-12 md:px-6'>
        <ApplicationForm />
      </section>

      <section className='mx-auto max-w-7xl px-4 pb-16 md:px-6'>
        <h2 className='font-display text-3xl font-bold text-[#3E1F00]'>Franchisee Stories</h2>
        <div className='mt-6 grid gap-4 md:grid-cols-3'>
          {[
            ['Jessa M.', 'Quezon City', 'Monthly gross: 420k+ (equivalent shown by package pricing above)'],
            ['Ron C.', 'Cebu', 'ROI reached in 11 months'],
            ['Ana P.', 'Davao', 'Top branch in launch quarter'],
          ].map(([name, loc, earning]) => (
            <div key={name} className='rounded-2xl bg-white p-5'>
              <div className='h-12 w-12 rounded-full bg-gradient-to-r from-[#FFD93D] to-[#FF6B6B]' />
              <p className='mt-3 font-semibold text-[#3E1F00]'>{name}</p>
              <p className='text-sm text-[#3E1F00]/70'>{loc}</p>
              <p className='mt-2 text-sm font-semibold text-[#6BCB77]'>{earning}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


