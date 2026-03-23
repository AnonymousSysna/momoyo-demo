'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { trackCtaClick } from '@/lib/analytics';
import { CurrencyToggle } from '@/components/shared/CurrencyToggle';

const links = [
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/locations', label: 'Locations' },
  { href: '/franchise', label: 'Franchise' },
  { href: '/contact', label: 'Contact' },
];

function LogoMark() {
  return (
    <svg viewBox='0 0 120 72' className='h-10 w-16' aria-label='Momoyo logo'>
      <defs>
        <linearGradient id='momoyo-grad' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#FF6B6B' />
          <stop offset='50%' stopColor='#FFD93D' />
          <stop offset='100%' stopColor='#6BCB77' />
        </linearGradient>
      </defs>
      <path d='M10 60V12h16l18 24 18-24h16v48H62V35L44 58 26 35v25z' fill='url(#momoyo-grad)' />
      <circle cx='101' cy='21' r='7' fill='#6BCB77' />
      <circle cx='101' cy='39' r='7' fill='#FFD93D' />
      <circle cx='101' cy='57' r='7' fill='#FF6B6B' />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-[40px] z-40 transition-all',
        scrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-transparent'
      )}
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6'>
        <Link href='/' className='flex items-center gap-2'>
          <LogoMark />
          <div>
            <p className='font-display text-lg font-bold text-[#3E1F00]'>Momoyo</p>
            <p className='-mt-1 text-xs text-[#3E1F00]/70'>Philippines</p>
          </div>
        </Link>

        <nav className='hidden items-center gap-6 md:flex'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-semibold text-[#3E1F00] transition hover:text-[#FF6B6B]',
                pathname === link.href && 'underline decoration-[#FF6B6B] underline-offset-8'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='hidden items-center gap-3 md:flex'>
          <CurrencyToggle />
          <Button
            onClick={() => trackCtaClick('order_now_nav', pathname)}
            asChild
          >
            <Link href='/menu'>Order Now</Link>
          </Button>
        </div>

        <button className='md:hidden' onClick={() => setOpen((v) => !v)} aria-label='Open menu'>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden bg-white transition-all md:hidden',
          open ? 'max-h-[320px] border-t border-[#3E1F00]/10' : 'max-h-0'
        )}
      >
        <div className='space-y-3 px-4 py-4'>
          <CurrencyToggle />
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='block font-semibold text-[#3E1F00]'
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button className='w-full' asChild>
            <Link href='/menu'>Order Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

