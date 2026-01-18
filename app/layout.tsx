import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButton';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const viewport: Viewport = {
  themeColor: '#FF5722', // Warna Shopee Orange di browser mobile
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.homesembako.com'), // Ganti dengan domain asli nanti
  title: {
    default: 'Home Sembako | Pusat Toko Sembako Murah & Terpercaya',
    template: '%s | Home Sembako', // Jika di halaman lain ada title berbeda
  },
  description:
    'Pusat Toko Sembako Murah & Terpercaya dan terpercaya di Indonesia. Melayani pengiriman beras, minyak, gula, dan kebutuhan pokok lainnya.',

  keywords: [
    'Toko sembako',
    'toko sembako murah',
    'Toko sembako terpercaya',
    'gratis ongkir Toko sembako',
  ],
  authors: [{ name: 'Home Sembako Admin' }],
  creator: 'Home Sembako',
  publisher: 'Home Sembako',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Home Sembako | Pusat Toko Sembako Murah & Terpercaya',
    description:
      'Pusat Toko Sembako Murah & Terpercaya dan terpercaya di Indonesia. Melayani pengiriman beras, minyak, gula, dan kebutuhan pokok lainnya.',

    url: 'https://www.homesembako.com',
    siteName: 'Home Sembako',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.webp', // Pastikan buat gambar ini (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Home Sembako',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Set bahasa ke Malay (Malaysia)
    <html
      lang='id'
      className='scroll-smooth'>
      <body className={inter.className}>
        <Navbar />
        <main className='min-h-screen flex flex-col'>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
