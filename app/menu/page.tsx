import type { Metadata } from 'next';
import MenuClient from './MenuClient';

export const metadata: Metadata = {
  title: 'Menu | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee',
  description: 'Explore Momoyo menu: fruit tea, ice cream, coffee, and add-ons with prices and sizes.',
  openGraph: { title: 'Menu | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee', description: 'Explore Momoyo menu categories with latest bestsellers.', images: ['/images/og-menu.svg'] },
  twitter: { card: 'summary_large_image', title: 'Menu | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee', description: 'Explore Momoyo menu categories with latest bestsellers.', images: ['/images/og-menu.svg'] },
};

export default function MenuPage() {
  return <MenuClient />;
}

