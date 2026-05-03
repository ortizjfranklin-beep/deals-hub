import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Deals Hub",
  description: "Best discounts, coupons & prop firms comparison",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        <nav className="fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl">🌍</div>
              <h1 className="text-2xl font-bold tracking-tight">Global Deals Hub</h1>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="/" className="hover:text-blue-400 transition">Home</a>
              <a href="/prop-firms" className="hover:text-blue-400 transition">Prop Firms</a>
              <a href="#deals" className="hover:text-blue-400 transition">Deals</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}