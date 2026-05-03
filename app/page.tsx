'use client';

import { useState } from 'react';

export default function GlobalDealsHub() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Deals' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'tech', label: 'Tech & Electronics' },
    { id: 'beauty', label: 'Beauty & Lifestyle' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const deals = [
    // Fashion
    { category: 'fashion', store: "Shein", title: "Summer Mega Sale", discount: "60% OFF Everything", code: "SUMMER60", expires: "24h" },
    { category: 'fashion', store: "Fashion Nova", title: "Sitewide Sale", discount: "30% OFF + Free Shipping", code: "FN30", expires: "3d" },
    { category: 'fashion', store: "Nike", title: "BOGO Deal", discount: "Buy 1 Get 1 50% Off", code: "BOGO50", expires: "5d" },
    
    // Tech
    { category: 'tech', store: "Amazon", title: "Prime Day Early Deals", discount: "Up to 70% OFF", code: "PRIME70", expires: "48h" },
    { category: 'tech', store: "Best Buy", title: "Tech Clearance", discount: "Up to 50% OFF", code: "BB50", expires: "7d" },
    
    // Beauty
    { category: 'beauty', store: "Sephora", title: "VIB Sale", discount: "20% OFF + Gifts", code: "SEPHORA20", expires: "2d" },
  ];

  const filteredDeals = deals.filter(deal => {
    const matchesSearch = deal.store.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         deal.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || deal.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`✅ Code copied: ${code}`);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🌍</div>
            <h1 className="text-2xl font-bold">Global Deals Hub</h1>
          </div>
          <div className="text-sm text-emerald-400">2,847 deals live • Updated May 2026</div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-28 pb-16 bg-gradient-to-br from-zinc-900 to-black text-center px-6">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
          Save More.<br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Shop Smarter.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Verified deals from around the world</p>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 pb-8 flex gap-3 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.id 
                ? 'bg-white text-black' 
                : 'bg-zinc-900 hover:bg-zinc-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Deals Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeals.map((deal, i) => (
            <div key={i} className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition-all group">
              <div className="text-4xl font-bold text-green-400 mb-4">{deal.discount}</div>
              <h3 className="text-2xl font-semibold mb-1">{deal.title}</h3>
              <p className="text-zinc-400 mb-8">{deal.store}</p>
              
              <button 
                onClick={() => copyCode(deal.code)}
                className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-emerald-400 transition mb-3"
              >
                Copy Code
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Support the Site Disclaimer */}
      <div className="bg-zinc-900 py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-zinc-500">
          <p>
            This site is supported by affiliate links. When you use our links or codes to shop, 
            we may earn a small commission at <span className="text-emerald-400">no extra cost to you</span>. 
            Thank you for supporting independent deal hunters!
          </p>
        </div>
      </div>
    </div>
  );
}