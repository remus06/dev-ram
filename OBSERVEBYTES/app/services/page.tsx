import type { Metadata } from 'next';
import { ServicesContent } from '@/components/ServicesContent';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Dashboards BI (Power BI), automatisation Python/SQL et sites vitrines optimisés SEO pour indépendants et PME.'
};

export default function ServicesPage() {
  return <ServicesContent />;
}
