import type { Metadata } from 'next';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Providers } from '@/components/providers';

import './globals.css';

export const metadata: Metadata = {
  title: 'Rene B. Villondo Jr. | Full-Stack Developer',
  description: 'Full-Stack Developer portfolio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />

          <main id='top'>{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
