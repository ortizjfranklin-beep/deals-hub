'use client';

import { useState } from 'react';
import { Copy, ExternalLink, Flame } from 'lucide-react';

export default function GlobalDealsHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Fashion', 'Tech', 'Beauty', 'Sports', 'Travel', 'Home', 'Prop Firms'];

  const allDeals = [
    // Fashion
    { category: 'Fashion', store: "Shein", title: "Summer Mega Sale", discount: "60% OFF Everything", code: "SUMMER60", affiliate: "https://shein.com" },
    { category: 'Fashion', store: "Fashion Nova", title: "30% Off Sitewide", discount: "30% OFF + Free Shipping", code: "FN30", affiliate: "https://fashionnova.com" },
    { category: 'Fashion', store: "Nike", title: "BOGO 50% Off", discount: "Buy 1 Get 1 50%", code: "BOGO50", affiliate: "https://nike.com" },
    { category: 'Fashion', store: "Zara", title: "Mid-Season Sale", discount: "Up to 50% OFF", code: "ZARA50", affiliate: "https://zara.com" },
    { category: 'Fashion', store: "PrettyLittleThing", title: "Flash Sale", discount: "Up to 70% OFF", code: "PLT70", affiliate: "https://prettylittlething.com" },

    // Tech
    { category: 'Tech', store: "Amazon", title: "Prime Day Early Access", discount: "Up to 70% OFF", code: "PRIME70", affiliate: "https://amazon.com" },
    { category: 'Tech', store: "Best Buy", title: "Tech Clearance", discount: "Up to 60% OFF", code: "BB60", affiliate: "https://bestbuy.com" },
    { category: 'Tech', store: "Apple", title: "Back to School Deals", discount: "Up to $200 OFF", code: "APPLE200", affiliate: "https://apple.com" },

    // Beauty
    { category: 'Beauty', store: "Sephora", title: "VIB Sale", discount: "20% OFF + Gifts", code: "SEPH20", affiliate: "https://sephora.com" },
    { category: 'Beauty', store: "Ulta", title: "Beauty Steals", discount: "Buy 1 Get 1 50%", code: "ULTA50", affiliate: "https://ulta.com" },

    // Sports & Home
    { category: 'Sports', store: "Adidas", title: "Summer Clearance", discount: "Up to 50% OFF", code: "ADIDAS50", affiliate: "https://adidas.com" },
    { category: 'Home', store: "IKEA", title: "Summer Home Sale", discount: "Up to 40% OFF", code: "IKEA40", affiliate: "https://ikea.com" },
    { category: 'Travel', store: "Booking.com", title: "Summer Getaways", discount: "Up to 30% OFF", code: "TRAVEL30", affiliate: "https://booking.com" },
  ];

  const propFirms = [
    { name: "FTMO", maxFunding: "$200,000", profitSplit: "80-90%", fee: "$155-$999", rating: "4.9", bestFor: "Serious Traders", link: "https://ftmo.com" },
    { name: "The Funded Trader", maxFunding: "$400,000", profitSplit: "80-90%", fee: "$65-$999", rating: "4.7", bestFor: "High Capital", link: "https://thefundedtrader.com" },
    { name: "FundedNext", maxFunding: "$200,000", profitSplit: "80-95%", fee: "$99-$999", rating: "4.8", bestFor: "Beginners", link: "https://fundednext.com" },
    { name: "My Forex Funds", maxFunding: "$400,000", profitSplit: "85%", fee: "$49-$999", rating: "4.6", bestFor: "Aggressive Traders", link: "https://myforexfunds.com" },
    { name: "AquaFunded", maxFunding: "$250,000", profitSplit: "80-90%", fee: "$97-$997", rating: "4.5", bestFor: "Scalpers", link: "https://aquafunded.com" },
    { name: "Eagle Funded", maxFunding: "$250,000", profitSplit: "80-85%", fee: "$99-$999", rating: "4.4", bestFor: "Consistency", link: "https://eaglefunded.com" },
  ];

  const filteredDeals = allDeals.filter(deal => {
    const matchesCategory = activeCategory === 'All' || deal.category === activeCategory;
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
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="#" className="flex items-center gap-4 hover:opacity-80 transition">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-3xl">🌍</div>
            <h1 className="text-3xl font-bold tracking-tight">Global Deals Hub</h1>
          </a>
          <div className="text-emerald-400 font-medium">5,247 deals live</div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-zinc-900 to-black text-center px-6">
        <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-6">
          <Flame className="text-orange-400" size={22} /> Trending Worldwide
        </div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
          Save More.<br />
          <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Shop Smarter.</span>
        </h1>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto px-6 -mt-8 mb-12 relative z-10">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search stores or deals..."
          className="w-full bg-zinc-900 border border-white/20 rounded-3xl py-6 pl-8 pr-6 text-lg focus:outline-none focus:border-violet-500 placeholder:text-zinc-500"
        />
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-6 pb-8 flex gap-3 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-2xl text-sm font-medium transition-all ${
              activeCategory === cat ? 'bg-white text-black shadow-xl' : 'bg-zinc-900 hover:bg-zinc-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Deals Grid */}
      {activeCategory !== 'Prop Firms' && (
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDeals.map((deal, i) => (
              <div key={i} className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-fuchsia-500 transition-all hover:-translate-y-1">
                <div className="text-5xl font-bold text-emerald-400 mb-6">{deal.discount}</div>
                <h3 className="text-2xl font-semibold mb-2">{deal.title}</h3>
                <p className="text-zinc-400 mb-8">{deal.store}</p>

                <div className="flex gap-3">
                  <button 
                    onClick={() => copyCode(deal.code)}
                    className="flex-1 bg-white text-black py-4 rounded-2xl font-semibold hover:bg-emerald-400 transition flex items-center justify-center gap-2"
                  >
                    <Copy size={20} /> Copy Code
                  </button>
                  <a 
                    href={deal.affiliate} 
                    target="_blank"
                    className="flex-1 border border-white/30 hover:bg-white/10 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition"
                  >
                    Go to Store <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Prop Firms */}
      {activeCategory === 'Prop Firms' && (
        <div className="max-w-7xl mx-auto px-6 pb-24">
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
                  <th className="p-6"></th>
                </tr>
              </thead>
              <tbody>
                {propFirms.map((firm, i) => (
                  <tr key={i} className="border-t border-white/10 hover:bg-zinc-800 transition">
                    <td className="p-6 font-bold">{firm.name}</td>
                    <td className="p-6 text-emerald-400 font-medium">{firm.maxFunding}</td>
                    <td className="p-6">{firm.profitSplit}</td>
                    <td className="p-6">{firm.fee}</td>
                    <td className="p-6">⭐ {firm.rating}</td>
                    <td className="p-6 text-zinc-400">{firm.bestFor}</td>
                    <td className="p-6">
                      <a href={firm.link} target="_blank" className="bg-violet-600 hover:bg-violet-500 px-8 py-3 rounded-2xl text-sm font-medium inline-block">
                        Visit & Sign Up →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black py-16 text-center text-sm text-zinc-500 border-t border-white/10">
        This site is supported by affiliate links. We may earn a commission when you shop through our links — at no extra cost to you. Thank you for supporting us!
      </footer>
    </div>
  );
}