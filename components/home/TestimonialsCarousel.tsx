'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { name: 'Maria, Quezon City', quote: 'Super fresh and perfect after school. Mango Yakult is my go-to!', rating: 5 },
  { name: 'Carlo, Cebu', quote: 'Coffee quality surprised me. Legit cafe-level brew.', rating: 5 },
  { name: 'Alyssa, Davao', quote: 'Love the vibe and the ice cream portions are generous.', rating: 5 },
  { name: 'Jared, Iloilo', quote: 'Affordable and premium taste. Worth it every time.', rating: 5 },
  { name: 'Tricia, Bacolod', quote: 'Best fruit tea chain for me right now.', rating: 5 },
  { name: 'Paolo, Pampanga', quote: 'Staff are friendly and drinks are always consistent.', rating: 5 },
];

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 3000);
    return () => clearInterval(timer);
  }, [paused]);

  const current = useMemo(() => testimonials[index], [index]);

  return (
    <section className='mx-auto max-w-5xl px-4 py-20 md:px-6'>
      <h2 className='text-center font-display text-4xl font-bold text-[#3E1F00]'>What the People Are Saying</h2>
      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className='mt-10'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='rounded-3xl bg-white p-8 text-center shadow-sm'
          >
            <p className='text-2xl text-[#FFD93D]'>{'★'.repeat(current.rating)}</p>
            <p className='mt-4 text-lg text-[#3E1F00]'>&ldquo;{current.quote}&rdquo;</p>
            <div className='mt-4 flex items-center justify-center gap-3'>
              <div className='h-10 w-10 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#6BCB77]' />
              <p className='font-semibold text-[#3E1F00]'>{current.name}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className='mt-6 flex justify-center gap-2'>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-[#FF6B6B]' : 'bg-[#3E1F00]/25'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
