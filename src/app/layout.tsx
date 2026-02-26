import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Providers } from '@/components/Providers';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Willow.Prints',
  description: 'Handcrafted prints, minimal & timeless.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Providers>
          <Navbar />
          <main className="flex-1 bg-gradient-to-b from-pastel-cream to-pastel-tan min-h-full">
          {children}
        </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
