import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee',
  description: 'Browse Momoyo product shots, cafe vibes, and community moments from branches across the Philippines.',
  openGraph: { title: 'Gallery | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee', description: 'Browse Momoyo product shots and cafe vibes.', images: ['/images/og-gallery.svg'] },
  twitter: { card: 'summary_large_image', title: 'Gallery | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee', description: 'Browse Momoyo product shots and cafe vibes.', images: ['/images/og-gallery.svg'] },
};

const photos = Array.from({ length: 12 }, (_, i) => `/images/gallery-${(i % 6) + 1}.svg`);

export default function GalleryPage() {
  return (
    <section className='mx-auto max-w-7xl px-4 py-10 md:px-6'>
      <h1 className='font-display text-4xl font-bold text-[#3E1F00]'>Gallery</h1>
      <p className='mt-2 text-[#3E1F00]/75'>Instagram-style moments from our stores and signature products.</p>
      <div className='mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {photos.map((src, idx) => (
          <Image key={`${src}-${idx}`} src={src} alt='Momoyo gallery item' width={400} height={400} className='h-full w-full rounded-2xl object-cover' />
        ))}
      </div>
    </section>
  );
}

