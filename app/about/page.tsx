import type { Metadata } from 'next';
import Image from 'next/image';
import { Sparkles, Users, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee',
  description: 'Learn how Momoyo started as a Filipino brand and the values behind every sip and scoop.',
  openGraph: { title: 'About | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee', description: 'Our Filipino brand story, mission, and values.', images: ['/images/og-about.svg'] },
  twitter: { card: 'summary_large_image', title: 'About | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee', description: 'Our Filipino brand story, mission, and values.', images: ['/images/og-about.svg'] },
};

const milestones = ['Founded 2019', 'First 5 branches 2021', '20 branches 2023', '30+ branches 2024'];
const team = ['Ari Santos', 'Mika Cruz', 'Noel Ramos', 'Lara Ong', 'Tim Reyes', 'Bea Lim'];

export default function AboutPage() {
  return (
    <div>
      <section className='relative h-[420px]'>
        <Image src='/images/about-hero.svg' alt='Momoyo cafe interior' fill priority className='object-cover' />
        <div className='absolute inset-0 bg-black/40' />
        <div className='relative mx-auto flex h-full max-w-7xl items-end px-4 pb-12 md:px-6'>
          <h1 className='font-display text-4xl font-bold text-white md:text-5xl'>Born from a Love of Good Drinks</h1>
        </div>
      </section>

      <section className='mx-auto max-w-5xl px-4 py-14 md:px-6'>
        <p className='text-lg leading-8 text-[#3E1F00]/85'>Momoyo began as a small neighborhood concept in Metro Manila, built by Filipino founders who wanted better everyday drinks: fruit tea made with real ingredients, local-style ice cream, and coffee that actually tastes premium but stays affordable.</p>
        <p className='mt-5 text-lg leading-8 text-[#3E1F00]/85'>From one counter to branches across major cities, our growth came from one simple promise: every sip and scoop should feel fresh, joyful, and proudly Filipino. Today, Momoyo continues to innovate flavors while staying rooted in community and quality.</p>
      </section>

      <section className='mx-auto max-w-7xl px-4 py-10 md:px-6'>
        <h2 className='font-display text-4xl font-bold text-[#3E1F00]'>Mission & Values</h2>
        <div className='mt-8 grid gap-5 md:grid-cols-3'>
          <div className='rounded-3xl bg-white p-6'><Sparkles className='h-7 w-7 text-[#FF6B6B]' /><h3 className='mt-3 font-bold'>Mission</h3><p className='mt-2 text-sm text-[#3E1F00]/75'>To bring joy through every sip and scoop.</p></div>
          <div className='rounded-3xl bg-white p-6'><Users className='h-7 w-7 text-[#6BCB77]' /><h3 className='mt-3 font-bold'>Community</h3><p className='mt-2 text-sm text-[#3E1F00]/75'>Quality drinks that create shared moments across neighborhoods.</p></div>
          <div className='rounded-3xl bg-white p-6'><Heart className='h-7 w-7 text-[#FFD93D]' /><h3 className='mt-3 font-bold'>Creativity</h3><p className='mt-2 text-sm text-[#3E1F00]/75'>Constantly crafting flavor ideas inspired by Filipino taste.</p></div>
        </div>
      </section>

      <section className='mx-auto max-w-4xl px-4 py-14 text-center md:px-6'>
        <Image src='/images/founder.svg' alt='Founder' width={200} height={200} className='mx-auto rounded-full' />
        <p className='mt-4 text-xl font-semibold text-[#3E1F00]'>Patricia Dela Cruz, Founder</p>
        <p className='mt-3 text-[#3E1F00]/80'>&ldquo;I started Momoyo to prove local brands can deliver world-class cafe quality while staying warm, approachable, and proudly Filipino.&rdquo;</p>
      </section>

      <section className='mx-auto max-w-7xl px-4 py-10 md:px-6'>
        <h2 className='font-display text-3xl font-bold text-[#3E1F00]'>Timeline</h2>
        <div className='mt-6 flex gap-4 overflow-x-auto md:grid md:grid-cols-4'>
          {milestones.map((item) => (
            <div key={item} className='min-w-[220px] rounded-2xl bg-white p-5 font-semibold text-[#3E1F00]'>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 py-14 md:px-6'>
        <h2 className='font-display text-3xl font-bold text-[#3E1F00]'>Team</h2>
        <div className='mt-6 grid grid-cols-2 gap-6 md:grid-cols-3'>
          {team.map((name, i) => (
            <div key={name} className='text-center'>
              <Image src={`/images/team-${(i % 3) + 1}.svg`} alt={name} width={180} height={180} className='mx-auto rounded-full' />
              <p className='mt-3 font-semibold text-[#3E1F00]'>{name}</p>
              <p className='text-sm text-[#3E1F00]/70'>Team Member</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


