import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { getPortfolioData, getBaseUrl } from '@/lib/data';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export function generateMetadata(): Metadata {
  const data = getPortfolioData();
  const baseUrl = getBaseUrl();
  const title = `${data.profile.name} | ${data.profile.title}`;
  const description = data.profile.tagline;

  return {
    title: {
      default: title,
      template: `%s | ${data.profile.name}`,
    },
    description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: data.profile.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: '/favicon.svg',
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
