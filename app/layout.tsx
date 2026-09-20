import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/languageContext';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'IRON FIT — Club Sportif Professionnel à Khemis Miliana',
  description:
    'IRON FIT — club sportif professionnel à Khemis Miliana. Musculation, CrossFit, Workout, Kick Boxing et Judo. Découvrez nos tarifs et entraînez-vous dans un environnement dédié à la performance.',
  icons: {
    icon: '/images/746648698_18032783372827003_5003944210144930484_n.jpg',
    shortcut: '/images/746648698_18032783372827003_5003944210144930484_n.jpg',
    apple: '/images/746648698_18032783372827003_5003944210144930484_n.jpg',
  },
  openGraph: {
    title: 'IRON FIT — Club Sportif Professionnel',
    description:
      'Club sportif professionnel à Khemis Miliana. Musculation, CrossFit, Workout, Kick Boxing et Judo. Ta force, ton mental, ton résultat !',
    images: ['/images/746648698_18032783372827003_5003944210144930484_n.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IRON FIT — Club Sportif Professionnel',
    description:
      'Club sportif professionnel à Khemis Miliana. Musculation, CrossFit, Workout, Kick Boxing et Judo. Ta force, ton mental, ton résultat !',
    images: ['/images/746648698_18032783372827003_5003944210144930484_n.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#fafafa] text-[#111111] antialiased selection:bg-[#ff6000] selection:text-white" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

