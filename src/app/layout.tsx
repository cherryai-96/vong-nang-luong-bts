import type { Metadata } from 'next';
import { Be_Vietnam_Pro, Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/data/siteContent';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-vietnam',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://btsglobal.vn'),
  title: SITE_CONFIG.metaTitle,
  description: SITE_CONFIG.metaDescription,
  keywords: [
    'Vòng Năng Lượng Vô Hướng',
    'BTS Global',
    'Vòng Đeo Chân',
    'Vòng Sức Mạnh',
    'Vòng Thư Giãn',
    'Vòng Trẻ Hóa',
    'Scalar Energy Wristband',
    'Phụ kiện chăm sóc sức khỏe',
  ],
  authors: [{ name: 'BTS Global' }],
  openGraph: {
    title: SITE_CONFIG.metaTitle,
    description: SITE_CONFIG.metaDescription,
    url: 'https://btsglobal.vn',
    siteName: 'BTS Global',
    images: [
      {
        url: '/images/hero-banner-full.jpg',
        width: 1500,
        height: 1500,
        alt: 'Vòng Năng Lượng Vô Hướng BTS Global - 4 Dòng Vòng',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.metaTitle,
    description: SITE_CONFIG.metaDescription,
    images: ['/images/hero-banner-full.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-brand-dark bg-white selection:bg-brand-sky-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
