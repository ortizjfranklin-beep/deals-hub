'use client';

import { useState } from 'react';

export default function GlobalDealsHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'tech', label: 'Tech' },
    { id: 'beauty', label: 'Beauty' },
    { id: 'propfirms', label: 'Prop Firms' },
  ];

  const deals = [
    { category: 'fashion', store: "Shein", title: "Summer Mega Sale", discount: "60% OFF", code: "SUMMER60", expires: "24h" },
    { category: 'fashion', store: "Fashion Nova", title: "Sitewide + Free Shipping", discount: "30% OFF", code: "FN30", expires: "3d" },
    { category: 'fashion', store: "Nike", title: "BOGO Sale", discount: "Buy 1 Get 1 50%", code: "BOGO50", expires: "5d" },
    { category: 'tech', store: "Amazon", title: "Prime Early Access", discount: "Up to 70% OFF", code: "PRIME70", expires: "48h" },
    { category: 'tech', store: "Best Buy", title: "Tech Clearance", discount: "Up to 50% OFF", code: "BB50", expires: "7d" },
    { category: 'beauty', store: "Sephora", title: "VIB Rouge Sale", discount: "20% OFF + Gifts", code: "SEPH20", expires: "2d" },
  ];

  const propFirms = [
    { name: "FTMO", maxFunding: "$200,000", profitSplit: "80-90%", fee: "$155-$999", rating: "4.9", bestFor: "Serious Traders" },
    { name: "The Funded Trader", maxFunding: "$400,000", profitSplit: "80-90%", fee: "$65-$999", rating: "4.7", bestFor: "High Capital" },
    { name: "FundedNext", maxFunding: "$200,000", profitSplit: "80-95%", fee: "$99-$999", rating: "4.8", bestFor: "Beginners" },
    { name: "My Forex Funds", maxFunding: "$400,000", profitSplit: "85%", fee: "$49-$999", rating: "4.6", bestFor: "Aggressive" },
    { name: "AquaFunded", maxFunding: "$250,000", profitSplit: "80-90%", fee: "$97-$997", rating: "4.5", bestFor: "Scalpers" },
    { name: "Eagle Funded", maxFunding: "$250,000", profitSplit: "80-85%", fee: "$99-$999", rating: "4.4", bestFor: "Consistency" },
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
          <div className="text-sm text-emerald-400">2,847 deals live • May 2026</div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-28 pb-16 bg-gradient-to-br from-zinc-900 to-black text-center px-6">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
          Save More.<br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Shop Smarter.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Verified deals &amp; prop firm comparisons</p>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 pb-6 flex gap-3 flex-wrap justify-center">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.id ? 'bg-white text-black' : 'bg-zinc-900 hover:bg-zinc-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Deals Grid */}
      {activeCategory !== 'propfirms' && (
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDeals.map((deal, i) => (
              <div key={i} className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition-all">
                <div className="text-4xl font-bold text-green-400 mb-4">{deal.discount}</div>
                <h3 className="text-2xl font-semibold mb-1">{deal.title}</h3>
                <p className="text-zinc-400 mb-8">{deal.store}</p>
                <button 
                  onClick={() => copyCode(deal.code)}
                  className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-emerald-400 transition"
                >
                  Copy Code
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Prop Firms Table */}
      {activeCategory === 'all' || activeCategory === 'propfirms' && (
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Prop Firms Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-zinc-900 rounded-3xl overflow-hidden">
              <thead>
                <tr className="bg-zinc-800">
                  <th className="p-6 text-left">Firm</th>
                  <th className="p-6 text-left">Max Funding</th>
                  <th className="p-6 text-left">Profit Split</th>
                  <th className="p-6 text-left">Fee</th>
                  <th className="p-6 text-left">Rating</th>
                  <th className="p-6 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                {propFirms.map((firm, i) => (
                  <tr key={i} className="border-t border-white/10 hover:bg-zinc-800 transition">
                    <td className="p-6 font-bold">{firm.name}</td>
                    <td className="p-6 text-green-400 font-medium">{firm.maxFunding}</td>
                    <td className="p-6">{firm.profitSplit}</td>
                    <td className="p-6">{firm.fee}</td>
                    <td className="p-6">⭐ {firm.rating}</td>
                    <td className="p-6 text-zinc-400">{firm.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Monetization Disclaimer */}
      <div className="bg-zinc-900 py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-zinc-500">
          This site is supported by affiliate links. When you shop or sign up through our links, 
          we may earn a small commission at <span className="text-emerald-400">no extra cost to you</span>. 
          Thank you for supporting this project!
        </div>
      </div>
    </div>
  );
}