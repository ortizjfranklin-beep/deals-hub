'use client';

import { useState } from 'react';
import { Copy, ExternalLink, Heart } from 'lucide-react';

export default function GlobalDealsHub() {
  const [searchTerm, setSearchTerm] = useState('');

  const deals = [
    { store: "Amazon", title: "Prime Day Early Access", discount: "Up to 70% OFF", code: "PRIME70", expires: "48h", affiliate: "https://amazon.com" },
    { store: "Shein", title: "Summer Mega Sale", discount: "60% OFF Everything", code: "SUMMER60", expires: "24h", affiliate: "https://shein.com" },
    { store: "Nike", title: "BOGO 50% Off", discount: "Buy 1 Get 1 50%", code: "BOGO50", expires: "5d", affiliate: "https://nike.com" },
    { store: "Fashion Nova", title: "Extra 30% Off", discount: "30% OFF Sitewide", code: "FN30", expires: "3d", affiliate: "https://fashionnova.com" },
    { store: "Adidas", title: "Summer Clearance", discount: "Up to 50% OFF", code: "ADIDAS50", expires: "7d", affiliate: "https://adidas.com" },
  ];

  const filteredDeals = deals.filter(deal =>
    deal.store.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deal.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`✅ Code copied: ${code}`);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl">🌍</div>
            <h1 className="text-3xl font-bold tracking-tight">Global Deals Hub</h1>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#deals" className="hover:text-blue-400 transition">Deals</a>
            <a href="#propfirms" className="hover:text-blue-400 transition">Prop Firms</a>
          </div>
          <div className="text-sm text-emerald-400 font-medium">2,847 deals live</div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-28 pb-20 bg-gradient-to-br from-zinc-900 to-black text-center px-6">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
          Save More.<br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Shop Smarter.</span>
        </h1>
        <p className="text-2xl text-zinc-400 max-w-3xl mx-auto mb-10">
          Hand-curated, verified discounts and promo codes from the world’s best brands
        </p>

        <div className="max-w-2xl mx-auto relative mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search stores or deals..."
            className="w-full bg-zinc-900 border border-white/20 rounded-full py-6 pl-8 pr-6 text-lg focus:outline-none focus:border-blue-500 placeholder:text-zinc-500"
          />
        </div>

        <a 
          href="https://instagram.com/yourusername" 
          target="_blank"
          className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 border border-white/20 px-8 py-4 rounded-full text-lg font-medium transition"
        >
          <Heart size={28} /> Follow for daily deals
        </a>
      </div>

      {/* Deals Section */}
      <div id="deals" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold mb-4 text-center">🔥 Trending Deals</h2>
        <p className="text-center text-zinc-400 mb-12">Updated daily • Verified offers</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDeals.map((deal, i) => (
            <div key={i} className="group bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition-all hover:-translate-y-1">
              <div className="text-5xl font-bold text-green-400 mb-6">{deal.discount}</div>
              <h3 className="text-2xl font-semibold mb-2">{deal.title}</h3>
              <p className="text-xl text-zinc-400 mb-8">{deal.store}</p>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => copyCode(deal.code)}
                  className="w-full bg-white hover:bg-emerald-400 text-black py-4 rounded-2xl font-semibold transition flex items-center justify-center gap-2"
                >
                  <Copy size={20} /> Copy Code
                </button>
                <a 
                  href={deal.affiliate} 
                  target="_blank"
                  className="w-full border border-white/30 hover:bg-white/10 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition"
                >
                  Go to Store <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / Disclaimer */}
      <footer className="bg-black py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-zinc-500 text-sm max-w-2xl mx-auto">
            This site is supported by affiliate links. When you shop through our links, we may earn a small commission at no extra cost to you. 
            Thank you for supporting independent deal curation ❤️
          </p>
          <p className="text-xs text-zinc-600 mt-8">
            © 2026 Global Deals Hub • All deals are verified at time of posting
          </p>
        </div>
      </footer>
    </div>
  );
}