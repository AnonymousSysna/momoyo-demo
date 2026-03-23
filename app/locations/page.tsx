import type { Metadata } from 'next';
import LocationsClient from './LocationsClient';

export const metadata: Metadata = {
  title: 'Locations | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee',
  description: 'Find Momoyo branches across Metro Manila, Cebu, Davao, Iloilo, Bacolod, and Pampanga.',
  openGraph: { title: 'Locations | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee', description: 'Find nearby Momoyo branches and store hours.', images: ['/images/og-locations.svg'] },
  twitter: { card: 'summary_large_image', title: 'Locations | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee', description: 'Find nearby Momoyo branches and store hours.', images: ['/images/og-locations.svg'] },
};

export default function LocationsPage() {
  return <LocationsClient />;
}

