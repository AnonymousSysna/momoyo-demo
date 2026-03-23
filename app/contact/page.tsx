import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee',
  description: 'Get in touch with Momoyo Philippines for customer support, partnerships, and branch inquiries.',
  openGraph: { title: 'Contact | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee', description: 'Send us your message and we will get back soon.', images: ['/images/og-contact.svg'] },
  twitter: { card: 'summary_large_image', title: 'Contact | Momoyo Philippines — Fruit Tea, Ice Cream & Coffee', description: 'Send us your message and we will get back soon.', images: ['/images/og-contact.svg'] },
};

export default function ContactPage() {
  return <ContactClient />;
}

