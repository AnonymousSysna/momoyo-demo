import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className='bg-[#3E1F00] text-[#FFFDE7]'>
      <div className='mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6'>
        <div>
          <p className='font-display text-2xl font-bold'>Momoyo Philippines</p>
          <p className='mt-2 text-sm text-[#FFFDE7]/80'>Fruit Tea, Ice Cream, Coffee. Made fresh every day.</p>
        </div>
        <div>
          <p className='font-semibold'>Explore</p>
          <div className='mt-3 space-y-2 text-sm'>
            <Link href='/menu' className='block hover:text-white'>Menu</Link>
            <Link href='/about' className='block hover:text-white'>About</Link>
            <Link href='/locations' className='block hover:text-white'>Locations</Link>
            <Link href='/franchise' className='block hover:text-white'>Franchise</Link>
            <Link href='/contact' className='block hover:text-white'>Contact</Link>
          </div>
        </div>
        <div>
          <p className='font-semibold'>Follow Us</p>
          <div className='mt-3 flex gap-3'>
            <a href='#' aria-label='Facebook' className='rounded-full bg-white/10 p-2'><Facebook className='h-4 w-4' /></a>
            <a href='#' aria-label='Instagram' className='rounded-full bg-white/10 p-2'><Instagram className='h-4 w-4' /></a>
            <a href='#' aria-label='Twitter' className='rounded-full bg-white/10 p-2'><Twitter className='h-4 w-4' /></a>
          </div>
        </div>
        <div className='space-y-2 text-sm'>
          <p className='flex items-center gap-2'><Mail className='h-4 w-4' /> hello@momoyoph.com</p>
          <p className='flex items-center gap-2'><Phone className='h-4 w-4' /> +63 XXX XXX XXXX</p>
          <p className='flex items-center gap-2'><MapPin className='h-4 w-4' /> Makati City, Philippines</p>
        </div>
      </div>
      <p className='border-t border-white/10 py-4 text-center text-xs text-[#FFFDE7]/70'>© 2024 Momoyo Philippines. All rights reserved.</p>
    </footer>
  );
}

