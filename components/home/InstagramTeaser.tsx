import Image from 'next/image';
import { Button } from '@/components/ui/button';

const images = [
  '/images/gallery-1.svg',
  '/images/gallery-2.svg',
  '/images/gallery-3.svg',
  '/images/gallery-4.svg',
  '/images/gallery-5.svg',
  '/images/gallery-6.svg',
];

const blurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjRkZGREU3Ii8+PC9zdmc+';

export function InstagramTeaser() {
  return (
    <section className='mx-auto max-w-7xl px-4 py-20 md:px-6'>
      <h2 className='font-display text-4xl font-bold text-[#3E1F00]'>Follow Our Vibes @momoyoph</h2>
      <div className='mt-8 grid grid-cols-2 gap-4 md:grid-cols-3'>
        {images.map((src) => (
          <Image
            key={src}
            src={src}
            alt='Momoyo social post'
            width={360}
            height={360}
            placeholder='blur'
            blurDataURL={blurDataURL}
            className='h-full w-full rounded-2xl object-cover'
          />
        ))}
      </div>
      <Button className='mt-8' asChild>
        <a href='#'>Follow on Instagram</a>
      </Button>
    </section>
  );
}

