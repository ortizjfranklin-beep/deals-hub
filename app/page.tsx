'use client';

import { useState } from 'react';
import { Copy, ExternalLink, Clock } from 'lucide-react';

export default function GlobalDealsHub() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm] = useState('');

  const categories = [
    "All",
    "Fashion",
    "Tech",
    "Beauty",
    "Home",
    "Sports",
    "Travel",
    "Prop Firms",
  ];

  const deals = [
    { category: "Fashion", store: "Shein", title: "Summer Mega Sale", discount: "60% OFF Everything", code: "SUMMER60", expires: "24h", affiliate: "https://shein.com" },
    { category: "Fashion", store: "Fashion Nova", title: "Sitewide Sale", discount: "30% OFF + Free Shipping", code: "FN30", expires: "3d", affiliate: "https://fashionnova.com" },
    { category: "Fashion", store: "Nike", title: "BOGO 50% Off", discount: "Buy 1 Get 1 50%", code: "BOGO50", expires: "5d", affiliate: "https://nike.com" },
    { category: "Tech", store: "Amazon", title: "Prime Day Early Access", discount: "Up to 70% OFF", code: "PRIME70", expires: "48h", affiliate: "https://amazon.com" },
    { category: "Beauty", store: "Sephora", title: "VIB Sale", discount: "20% OFF + Gifts", code: "SEPH20", expires: "2d", affiliate: "https://sephora.com" },
    { category: "Sports", store: "Adidas", title: "Summer Clearance", discount: "Up to 50% OFF", code: "ADIDAS50", expires: "7d", affiliate: "https://adidas.com" },
    { category: "Home", store: "IKEA", title: "Summer Sale", discount: "Up to 40% OFF", code: "IKEA40", expires: "6d", affiliate: "https://ikea.com" },
    { category: "Prop Firms", store: "FTMO", title: "New Trader Challenge", discount: "Up to $200K Funding", code: "FTMO200K", expires: "30d", affiliate: "https://ftmo.com" },
  ];

  const filteredDeals = deals.filter(deal => {
    const matchesCategory = activeCategory === "All" || deal.category === activeCategory;
    const matchesSearch = deal.store.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deal.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          <div className="text-emerald-400 font-medium">3,241 deals live • Updated today</div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-28 pb-20 bg-gradient-to-br from-zinc-900 to-black text-center px-6">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
          Save More.<br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Shop Smarter.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">The world's best verified discounts and promo codes</p>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-6 pb-6 flex gap-3 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-full font-medium transition-all text-sm ${
              activeCategory === cat 
                ? 'bg-white text-black shadow-lg' 
                : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Deals Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDeals.map((deal, i) => (
            <div key={i} className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="text-5xl font-bold text-green-400">{deal.discount}</div>
                <div className="flex items-center gap-1 text-orange-400 text-sm font-medium">
                  <Clock size={16} /> {deal.expires}
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-2">{deal.title}</h3>
              <p className="text-zinc-400 mb-8">{deal.store}</p>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => copyCode(deal.code)}
                  className="w-full bg-white text-black py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-400 transition"
                >
                  <Copy size={18} /> Copy Code
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

      {/* Footer */}
      <div className="bg-black py-12 border-t border-white/10 text-center text-sm text-zinc-500">
        This site is supported by affiliate links. We may earn a small commission when you shop through our links — at no extra cost to you.
      </div>
    </div>
  );
}