import type { Metadata } from 'next';
import { ContactContent } from '@/components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Ramy MAHDJOUBI (ObserveByte) pour un projet data, BI, automatisation ou site web — réponse sous 48h.'
};

export default function ContactPage() {
  return <ContactContent />;
}
