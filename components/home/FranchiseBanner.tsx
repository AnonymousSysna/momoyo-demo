import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function FranchiseBanner() {
  return (
    <section className='bg-gradient-to-r from-[#FF6B6B] to-[#ff8f8f] py-14 text-white'>
      <div className='mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 md:flex-row md:items-center md:px-6'>
        <div>
          <h2 className='font-display text-3xl font-bold'>Own a Momoyo Franchise</h2>
          <p className='mt-2 text-white/90'>Join 30+ successful branch owners across the Philippines.</p>
        </div>
        <Button asChild variant='secondary'>
          <Link href='/franchise'>Learn More</Link>
        </Button>
      </div>
    </section>
  );
}

