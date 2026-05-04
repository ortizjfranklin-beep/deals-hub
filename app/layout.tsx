import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Global Deals Hub - Best Coupons & Discounts Worldwide',
  description: 'Save money with hand-picked deals, promo codes, and discounts from top brands. Victoria\'s Secret, Nike, Shein, Zalando & more.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Global Deals Hub - Best Coupons & Discounts',
    description: 'Save big with verified deals and promo codes.',
    images: [{ url: 'https://yourdomain.com/og-image.jpg' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}