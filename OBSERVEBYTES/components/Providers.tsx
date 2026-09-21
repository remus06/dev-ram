'use client';

import { ReactNode } from 'react';
import { LanguageProvider } from '@/lib/language-context';
import { Header } from './Header';
import { Footer } from './Footer';
import { MaintenanceBanner } from './MaintenanceBanner';
import { PageTransition } from './PageTransition';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-paper">
        <MaintenanceBanner />
        <Header />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
