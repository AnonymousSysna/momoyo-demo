import type { Metadata } from 'next';
import Script from 'next/script';
import { HeroSection } from '@/components/home/HeroSection';
import { SocialProofTicker } from '@/components/home/SocialProofTicker';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { WhyMomoyo } from '@/components/home/WhyMomoyo';
import { BestsellerSpotlight } from '@/components/home/BestsellerSpotlight';
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel';
import { FranchiseBanner } from '@/components/home/FranchiseBanner';
import { InstagramTeaser } from '@/components/home/InstagramTeaser';

export const metadata: Metadata = {
  title: 'Home | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee',
  description: 'Fresh fruit tea, handcrafted ice cream, and coffee in the Philippines. Explore menu, stores, and franchise opportunities.',
  openGraph: {
    title: 'Home | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee',
    description: 'Fresh fruit tea, handcrafted ice cream, and coffee in the Philippines. Explore menu and stores.',
    images: ['/images/og-home.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee',
    description: 'Fresh fruit tea, handcrafted ice cream, and coffee in the Philippines.',
    images: ['/images/og-home.svg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Momoyo Philippines',
      url: 'https://momoyoph.vercel.app',
      logo: 'https://momoyoph.vercel.app/images/logo-mark.svg',
      sameAs: ['https://instagram.com/momoyoph'],
    },
    {
      '@type': 'LocalBusiness',
      name: 'Momoyo Philippines',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Ayala Avenue',
        addressLocality: 'Makati',
        addressRegion: 'Metro Manila',
        postalCode: '1226',
        addressCountry: 'PH',
      },
      telephone: '+63XXX XXX XXXX',
      servesCuisine: 'Fruit Tea, Ice Cream, Coffee',
    },
    {
      '@type': 'FoodEstablishment',
      name: 'Momoyo Philippines',
      hasMenu: 'https://momoyoph.vercel.app/menu',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Script id='home-jsonld' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <SocialProofTicker />
      <FeaturedProducts />
      <WhyMomoyo />
      <BestsellerSpotlight />
      <TestimonialsCarousel />
      <FranchiseBanner />
      <InstagramTeaser />
    </>
  );
}

