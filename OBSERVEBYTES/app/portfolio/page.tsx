import type { Metadata } from 'next';
import { PortfolioContent } from '@/components/PortfolioContent';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Projets data, BI et web réalisés par Ramy MAHDJOUBI : qualité de l'air, e-commerce, offshore BI, SEO local, impact environnemental."
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
