'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Product } from '@/lib/products';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';

export function ProductGrid({
  products,
  onReset,
}: {
  products: Product[];
  onReset: () => void;
}) {
  return (
    <AnimatePresence mode='wait'>
      {products.length ? (
        <motion.div
          key='products'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          key='no-products'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='rounded-3xl bg-white p-10 text-center'
        >
          <p className='text-lg font-semibold text-[#3E1F00]'>No drinks found in this category yet.</p>
          <Button className='mt-4' onClick={onReset}>See All</Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

