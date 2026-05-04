'use client';

import { useState } from 'react';
import { Copy, ExternalLink, Flame } from 'lucide-react';

export default function GlobalDealsHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Fashion', 'Tech', 'Beauty', 'Home', 'Sports', 'Travel', 'Electronics', 'Prop Firms'];

  const allDeals = [
    // Fashion
    { category: 'Fashion', store: "Shein", title: "Summer Mega Sale", discount: "60% OFF Everything", code: "SUMMER60", affiliate: "https://shein.com" },
    { category: 'Fashion', store: "Fashion Nova", title: "30% Off Sitewide", discount: "30% OFF + Free Ship", code: "FN30", affiliate: "https://fashionnova.com" },
    { category: 'Fashion', store: "PrettyLittleThing", title: "Flash Sale", discount: "Up to 70% OFF", code: "PLT70", affiliate: "https://prettylittlething.com" },
    { category: 'Fashion', store: "Zara", title: "Mid-Season Sale", discount: "Up to 50% OFF", code: "ZARA50", affiliate: "https://zara.com" },

    // Tech
    { category: 'Tech', store: "Amazon", title: "Prime Day Deals", discount: "Up to 70% OFF", code: "PRIME70", affiliate: "https://amazon.com" },
    { category: 'Tech', store: "Best Buy", title: "Tech Clearance", discount: "Up to 60% OFF", code: "BB60", affiliate: "https://bestbuy.com" },

    // Beauty
    { category: 'Beauty', store: "Sephora", title: "VIB Sale", discount: "20% OFF + Gifts", code: "SEPH20", affiliate: "https://sephora.com" },
    { category: 'Beauty', store: "Ulta", title: "Beauty Steals", discount: "Buy 1 Get 1 50%", code: "ULTA50", affiliate: "https://ulta.com" },

    // Home & Others
    { category: 'Home', store: "IKEA", title: "Summer Home Sale", discount: "Up to 40% OFF", code: "IKEA40", affiliate: "https://ikea.com" },
    { category: 'Sports', store: "Nike", title: "BOGO 50% Off", discount: "Buy 1 Get 1 50%", code: "BOGO50", affiliate: "https://nike.com" },
    { category: 'Travel', store: "Booking.com", title: "Summer Getaways", discount: "Up to 30% OFF", code: "TRAVEL30", affiliate: "https://booking.com" },
    { category: 'Electronics', store: "Apple", title: "Back to School Deals", discount: "Up to $200 OFF", code: "APPLE200", affiliate: "https://apple.com" },

    // Prop Firms
    { category: 'Prop Firms', store: "FTMO", title: "Challenge Funding", discount: "$200,000 Max", code: "", affiliate: "https://ftmo.com" },
    { category: 'Prop Firms', store: "The Funded Trader", title: "Up to $400K", discount: "80-90% Split", code: "", affiliate: "https://thefundedtrader.com" },
    { category: 'Prop Firms', store: "FundedNext", title: "Fast Funding", discount: "80-95% Split", code: "", affiliate: "https://fundednext.com" },
  ];

  const filteredDeals = allDeals.filter(deal => {
    const matchesCategory = activeCategory === 'All' || deal.category === activeCategory;
    const matchesSearch = deal.store.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         deal.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const copyCode = (code: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    alert(`✅ Code copied: ${code}`);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-3xl">🌍</div>
            <h1 className="text-3xl font-bold tracking-tight">Global Deals Hub</h1>
          </div>
          <div className="text-emerald-400 font-medium">4,872 deals live</div>
        </div>
      </nav>

      <div className="pt-32 pb-16 bg-gradient-to-br from-zinc-900 to-black text-center px-6">
        <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-6">
          <Flame className="text-orange-400" size={22} /> Trending Worldwide
        </div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
          Save More.<br />
          <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Shop Smarter.</span>
        </h1>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-6 pb-8 flex gap-3 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-7 py-3 rounded-2xl text-sm font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-white text-black shadow-xl' 
                : 'bg-zinc-900 hover:bg-zinc-800'
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
            <div key={i} className="group bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-violet-500 transition-all hover:-translate-y-2">
              <div className="text-5xl font-bold text-emerald-400 mb-5">{deal.discount}</div>
              <h3 className="text-2xl font-semibold mb-2">{deal.title}</h3>
              <p className="text-zinc-400 mb-8 text-lg">{deal.store}</p>

              <div className="flex gap-3">
                {deal.code && (
                  <button onClick={() => copyCode(deal.code)} className="flex-1 bg-white text-black py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-400">
                    <Copy size={20} /> Copy Code
                  </button>
                )}
                <a
                  href={deal.affiliate}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 border border-white/30 hover:bg-white/10 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
                >
                  Visit Deal <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}