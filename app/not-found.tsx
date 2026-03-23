import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='mx-auto grid min-h-[70vh] max-w-4xl place-items-center px-4 text-center'>
      <div>
        <Image src='/images/spilled-drink.svg' alt='Spilled drink illustration' width={320} height={320} priority className='mx-auto' />
        <h1 className='mt-4 font-display text-4xl font-bold text-[#3E1F00]'>Oops! Looks like this page melted.</h1>
        <Button asChild className='mt-6'>
          <Link href='/'>Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}

