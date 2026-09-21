import type { Metadata } from 'next';
import { PrivacyContent } from '@/components/PrivacyContent';

export const metadata: Metadata = {
  title: 'Confidentialité'
};

export default function ConfidentialitePage() {
  return <PrivacyContent />;
}
