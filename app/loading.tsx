import { LoaderCircle } from 'lucide-react';

export default function Loading() {
  return (
    <div className='grid min-h-[70vh] place-items-center'>
      <div className='text-center'>
        <p className='font-display text-4xl font-black text-[#3E1F00]'>Momoyo</p>
        <div className='mt-4 flex items-center justify-center gap-2'>
          {['#FF6B6B', '#FFD93D', '#6BCB77'].map((color) => (
            <span key={color} className='h-3 w-3 animate-pulse rounded-full' style={{ backgroundColor: color }} />
          ))}
          <LoaderCircle className='ml-1 h-4 w-4 animate-spin text-[#3E1F00]' />
        </div>
      </div>
    </div>
  );
}

