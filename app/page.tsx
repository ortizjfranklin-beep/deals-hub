'use client';

import { useState, useEffect } from 'react';
import { Copy, ExternalLink, Flame, Clock, Users, Award, Search } from 'lucide-react';

export default function GlobalDealsHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [timeLeft, setTimeLeft] = useState(48 * 3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;

  const categories = ['All', 'Fashion', 'Tech', 'Beauty', 'Sports', 'Travel', 'Prop Firms'];

  const allDeals = [
    // Fashion
    { category: 'Fashion', store: "Shein", logo: "https://logo.clearbit.com/shein.com", title: "Summer Mega Sale", discount: "60% OFF Everything", code: "SUMMER60", affiliate: "https://shein.com" },
    { category: 'Fashion', store: "Fashion Nova", logo: "https://logo.clearbit.com/fashionnova.com", title: "30% Off Sitewide", discount: "30% OFF + Free Shipping", code: "FN30", affiliate: "https://fashionnova.com" },
    { category: 'Fashion', store: "Zara", logo: "https://logo.clearbit.com/zara.com", title: "Mid-Season Sale", discount: "Up to 50% OFF", code: "ZARA50", affiliate: "https://zara.com" },
    { category: 'Fashion', store: "H&M", logo: "https://logo.clearbit.com/hm.com", title: "Summer Sale", discount: "Up to 50% OFF", code: "HM50", affiliate: "https://hm.com" },
    { category: 'Fashion', store: "Zalando", logo: "https://logo.clearbit.com/zalando.nl", title: "Summer Fashion Sale", discount: "Up to 60% OFF", code: "ZALANDO60", affiliate: "https://zalando.nl" },
    { category: 'Fashion', store: "Mango", logo: "https://logo.clearbit.com/mango.com", title: "Summer Collection", discount: "Up to 40% OFF", code: "MANGO40", affiliate: "https://mango.com" },

    // Sports
    { category: 'Sports', store: "Nike", logo: "https://logo.clearbit.com/nike.com", title: "BOGO 50% Off", discount: "Buy 1 Get 1 50%", code: "BOGO50", affiliate: "https://nike.com" },
    { category: 'Sports', store: "Adidas", logo: "https://logo.clearbit.com/adidas.com", title: "Summer Clearance", discount: "Up to 50% OFF", code: "ADIDAS50", affiliate: "https://adidas.com" },
    { category: 'Sports', store: "Foot Locker", logo: "https://logo.clearbit.com/footlocker.com", title: "Big Sale", discount: "Up to 60% OFF Shoes", code: "FL60", affiliate: "https://footlocker.com" },
    { category: 'Sports', store: "Puma", logo: "https://logo.clearbit.com/puma.com", title: "Summer Collection", discount: "Up to 40% OFF", code: "PUMA40", affiliate: "https://puma.com" },

    // Tech
    { category: 'Tech', store: "Amazon", logo: "https://logo.clearbit.com/amazon.com", title: "Prime Day Early Access", discount: "Up to 70% OFF", code: "PRIME70", affiliate: "https://amazon.com" },
    { category: 'Tech', store: "Coolblue", logo: "https://logo.clearbit.com/coolblue.nl", title: "Tech & Electronics Deals", discount: "Up to 40% OFF", code: "COOL40", affiliate: "https://coolblue.nl" },

    // Beauty
    { category: 'Beauty', store: "Sephora", logo: "https://logo.clearbit.com/sephora.com", title: "VIB Sale", discount: "20% OFF + Gifts", code: "SEPH20", affiliate: "https://sephora.com" },
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
          <div className="text-emerald-400 font-medium">5,247 deals live • Updated today</div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-zinc-900 to-black text-center px-6">
        <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-6">
          <Flame className="text-orange-400" /> Trending Worldwide
        </div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
          Save More.<br />
          <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Shop Smarter.</span>
        </h1>
      </div>

      {/* Smart Search */}
      <div className="max-w-2xl mx-auto px-6 -mt-8 mb-12 relative z-10">
        <div className="relative">
          <Search className="absolute left-6 top-7 text-zinc-500" size={24} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search any brand... (e.g. Victoria's Secret)"
            className="w-full bg-zinc-900 border border-white/20 rounded-3xl py-6 pl-16 pr-6 text-lg focus:outline-none focus:border-violet-500 placeholder:text-zinc-500"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-6 pb-8 flex gap-3 flex-wrap justify-center">
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
          {filteredDeals.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDeals.map((deal, i) => (
                <div key={i} className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-fuchsia-500 transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={deal.logo} 
                      alt={deal.store} 
                      className="w-12 h-12 object-contain bg-white rounded-xl p-1"
                      onError={(e) => e.currentTarget.src = 'https://via.placeholder.com/48x48/ffffff/000000?text=' + deal.store[0]}
                    />
                    <div>
                      <h3 className="text-2xl font-semibold">{deal.title}</h3>
                      <p className="text-zinc-400">{deal.store}</p>
                    </div>
                  </div>

                  <div className="text-5xl font-bold text-emerald-400 mb-8">{deal.discount}</div>

                  <div className="flex gap-3">
                    <button onClick={() => copyCode(deal.code)} className="flex-1 bg-white text-black py-4 rounded-2xl font-semibold hover:bg-emerald-400 transition flex items-center justify-center gap-2">
                      <Copy size={20} /> Copy Code
                    </button>
                    <a href={deal.affiliate} target="_blank" className="flex-1 border border-white/30 hover:bg-white/10 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition">
                      Go to Store <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : searchTerm ? (
            <div className="text-center py-20 bg-zinc-900/50 rounded-3xl p-12">
              <Search size={64} className="mx-auto text-zinc-500 mb-6" />
              <h3 className="text-3xl font-semibold mb-4">No deal found for <span className="text-violet-400">"{searchTerm}"</span></h3>
              <p className="text-zinc-400 mb-10 max-w-md mx-auto">
                We don't have a pre-listed deal for this brand yet, but here are the fastest ways to find working coupons:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <a href={`https://www.retailmenot.com/search/?q=${encodeURIComponent(searchTerm)}`} target="_blank" className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-400 transition">
                  Search RetailMeNot
                </a>
                <a href={`https://www.joinhoney.com/?q=${encodeURIComponent(searchTerm)}`} target="_blank" className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-400 transition">
                  Try Honey
                </a>
              </div>
            </div>
          ) : null}
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
                {[
                  { name: "FTMO", maxFunding: "$200,000", profitSplit: "80-90%", fee: "$155-$999", rating: "4.9", bestFor: "Serious Traders", link: "https://ftmo.com" },
                  { name: "The Funded Trader", maxFunding: "$400,000", profitSplit: "80-90%", fee: "$65-$999", rating: "4.7", bestFor: "High Capital", link: "https://thefundedtrader.com" },
                  { name: "FundedNext", maxFunding: "$200,000", profitSplit: "80-95%", fee: "$99-$999", rating: "4.8", bestFor: "Beginners", link: "https://fundednext.com" },
                ].map((firm, i) => (
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

      {/* Trust Signals + Footer */}
      <div className="bg-black py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
          <div className="flex items-center gap-2"><Users size={20} /> 10,000+ Happy Shoppers</div>
          <div className="flex items-center gap-2"><Award size={20} /> Deals Verified Daily</div>
          <div className="flex items-center gap-2"><Flame size={20} /> Updated Today</div>
        </div>
      </div>

      <footer className="bg-black py-16 text-center text-sm text-zinc-500 border-t border-white/10">
        This site is supported by affiliate links. We may earn a commission when you shop through our links — at no extra cost to you. Thank you for supporting us!
      </footer>
    </div>
  );
}