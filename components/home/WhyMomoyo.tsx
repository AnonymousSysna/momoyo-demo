'use client';

import { Coffee, IceCreamBowl, Leaf, HeartHandshake } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const data = [
  { icon: Leaf, title: 'Real Fruit Ingredients', text: 'No artificial flavors. Ever.' },
  { icon: Coffee, title: 'Premium Coffee Blends', text: 'Ethically sourced beans roasted locally.' },
  { icon: IceCreamBowl, title: 'Handcrafted Ice Cream', text: 'Made fresh in-store, every single day.' },
  { icon: HeartHandshake, title: 'Filipino-Owned & Proud', text: 'Born and brewed in the Philippines.' },
];

export function WhyMomoyo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className='bg-[#FFFDE7] py-20'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <h2 className='font-display text-4xl font-bold text-[#3E1F00]'>Why Customers Love Us</h2>
        <div className='mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {data.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: i * 0.1, duration: 0.35 }}
              className='rounded-2xl bg-white p-6'
            >
              <item.icon className='h-8 w-8 text-[#FF6B6B]' />
              <h3 className='mt-4 font-semibold text-[#3E1F00]'>{item.title}</h3>
              <p className='mt-2 text-sm text-[#3E1F00]/75'>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

