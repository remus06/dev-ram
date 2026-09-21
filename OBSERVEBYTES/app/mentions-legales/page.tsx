import type { Metadata } from 'next';
import { LegalContent } from '@/components/LegalContent';

export const metadata: Metadata = {
  title: 'Mentions légales'
};

export default function MentionsLegalesPage() {
  return <LegalContent />;
}
