import type { Metadata } from 'next';
import Script from 'next/script';
import { Nunito, DM_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers/Providers';
import { AnnouncementBanner } from '@/components/layout/AnnouncementBanner';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ExitIntentModal } from '@/components/shared/ExitIntentModal';
import { StickyOrderCTA } from '@/components/shared/StickyOrderCTA';
import { LiveChatWidget } from '@/components/shared/LiveChatWidget';
import { ScrollDepthTracker } from '@/components/shared/ScrollDepthTracker';

const nunito = Nunito({ subsets: ['latin'], variable: '--font-display', weight: ['700', '800', '900'] });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500', '700'] });

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Momoyo Philippines - Fruit Tea, Ice Cream & Coffee',
  description: 'Taste fruit tea, ice cream, and coffee made fresh in the Philippines.',
  openGraph: {
    title: 'Momoyo Philippines - Fruit Tea, Ice Cream & Coffee',
    description: 'Taste fruit tea, ice cream, and coffee made fresh in the Philippines.',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
    siteName: 'Momoyo Philippines',
    images: [{ url: '/images/og-home.svg', width: 1200, height: 630 }],
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momoyo Philippines - Fruit Tea, Ice Cream & Coffee',
    description: 'Taste fruit tea, ice cream, and coffee made fresh in the Philippines.',
    images: ['/images/og-home.svg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={`${nunito.variable} ${dmSans.variable}`}>
      <body className='bg-[#FFFDE7] text-[#3E1F00]'>
        <Providers>
          <AnnouncementBanner />
          <Navbar />
          <main className='min-h-screen pt-[104px]'>{children}</main>
          <Footer />
          <StickyOrderCTA />
          <ExitIntentModal />
          <LiveChatWidget />
          <ScrollDepthTracker />
        </Providers>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy='afterInteractive' />
            <Script id='ga-init' strategy='afterInteractive'>
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
