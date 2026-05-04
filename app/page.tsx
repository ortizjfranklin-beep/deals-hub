'use client';

import { useState, useEffect } from 'react';
import { Copy, ExternalLink, Flame, Clock, Users, Award } from 'lucide-react';

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

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return `${h}h ${m}m`;
  };

  const categories = ['All', 'Fashion', 'Tech', 'Beauty', 'Sports', 'Travel', 'Netherlands', 'Prop Firms'];

  const allDeals = [
    // Original Deals
    { category: 'Fashion', store: "Shein", title: "Summer Mega Sale", discount: "60% OFF Everything", code: "SUMMER60", affiliate: "https://shein.com", expires: "2d left" },
    { category: 'Fashion', store: "Fashion Nova", title: "30% Off Sitewide", discount: "30% OFF + Free Shipping", code: "FN30", affiliate: "https://fashionnova.com", expires: "18h left" },
    { category: 'Fashion', store: "Nike", title: "BOGO 50% Off", discount: "Buy 1 Get 1 50%", code: "BOGO50", affiliate: "https://nike.com", expires: "3d left" },
    { category: 'Tech', store: "Amazon", title: "Prime Day Early Access", discount: "Up to 70% OFF", code: "PRIME70", affiliate: "https://amazon.com", expires: "5d left" },

    // Netherlands + Extra Clothing Brands
    { category: 'Netherlands', store: "Bol.com", title: "Summer Sale", discount: "Up to 50% OFF", code: "BOL50", affiliate: "https://bol.com", expires: "1d left" },
    { category: 'Netherlands', store: "Coolblue", title: "Tech & Electronics Deals", discount: "Up to 40% OFF", code: "COOL40", affiliate: "https://coolblue.nl", expires: "12h left" },
    { category: 'Netherlands', store: "Zalando", title: "Summer Fashion Sale", discount: "Up to 60% OFF", code: "ZALANDO60", affiliate: "https://zalando.nl", expires: "4d left" },
    { category: 'Netherlands', store: "HEMA", title: "Weekly Deals", discount: "Up to 30% OFF", code: "HEMA30", affiliate: "https://hema.nl", expires: "6h left" },
    { category: 'Netherlands', store: "Wehkamp", title: "Big Summer Sale", discount: "Up to 50% OFF", code: "WEHKAMP50", affiliate: "https://wehkamp.nl", expires: "2d left" },

    // Extra Popular Clothing Brands
    { category: 'Fashion', store: "H&M", title: "Summer Sale", discount: "Up to 50% OFF", code: "HM50", affiliate: "https://hm.com", expires: "1d left" },
    { category: 'Fashion', store: "Zara", title: "Mid-Season Sale", discount: "Up to 50% OFF", code: "ZARA50", affiliate: "https://zara.com", expires: "36h left" },
    { category: 'Fashion', store: "Mango", title: "Summer Collection", discount: "Up to 40% OFF", code: "MANGO40", affiliate: "https://mango.com", expires: "48h left" },
    { category: 'Fashion', store: "Bershka", title: "Flash Sale", discount: "Up to 60% OFF", code: "BERSHKA60", affiliate: "https://bershka.com", expires: "8h left" },
  ];

  const propFirms = [
    { name: "FTMO", maxFunding: "$200,000", profitSplit: "80-90%", fee: "$155-$999", rating: "4.9", bestFor: "Serious Traders", link: "https://ftmo.com" },
    { name: "The Funded Trader", maxFunding: "$400,000", profitSplit: "80-90%", fee: "$65-$999", rating: "4.7", bestFor: "High Capital", link: "https://thefundedtrader.com" },
    { name: "FundedNext", maxFunding: "$200,000", profitSplit: "80-95%", fee: "$99-$999", rating: "4.8", bestFor: "Beginners", link: "https://fundednext.com" },
    { name: "My Forex Funds", maxFunding: "$400,000", profitSplit: "85%", fee: "$49-$999", rating: "4.6", bestFor: "Aggressive", link: "https://myforexfunds.com" },
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
          <Flame className="text-orange-400" /> Trending Worldwide & Netherlands
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDeals.map((deal, i) => (
              <div key={i} className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-fuchsia-500 transition-all hover:-translate-y-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-5xl font-bold text-emerald-400">{deal.discount}</div>
                  <div className="flex items-center gap-1 text-orange-400 text-sm">
                    <Clock size={16} /> {deal.expires}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{deal.title}</h3>
                <p className="text-zinc-400 mb-8">{deal.store}</p>

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

      {/* Trust Signals */}
      <div className="bg-black py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
          <div className="flex items-center gap-2"><Users size={20} /> 10,000+ Happy Shoppers</div>
          <div className="flex items-center gap-2"><Award size={20} /> Deals Verified Daily</div>
          <div className="flex items-center gap-2"><Flame size={20} /> Updated Today</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-16 text-center text-sm text-zinc-500 border-t border-white/10">
        This site is supported by affiliate links. We may earn a commission when you shop through our links — at no extra cost to you. Thank you for supporting us!
      </footer>
    </div>
  );
}