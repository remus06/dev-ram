import type { Metadata } from 'next';
import { AboutContent } from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Ramy MAHDJOUBI — ingénieur freelance à Toulouse, entre expertise data/BI et parcours en aquaculture et environnement.'
};

export default function AboutPage() {
  return <AboutContent />;
}
