'use client';

import React, { useState, useEffect } from 'react';
import { Copy, ExternalLink, Flame, Clock, Search, Share2, Heart } from 'lucide-react';

interface Deal {
  id: number;
  category: string;
  store: string;
  logo: string;
  title: string;
  discount: string;
  code: string;
  affiliate: string;
}

const allDeals: Deal[] = [
  { id: 1, category: 'Food', store: 'Uber Eats', logo: 'https://logo.clearbit.com/ubereats.com', title: 'First Order Discount', discount: '$10 OFF', code: 'UBER10FIRST', affiliate: 'https://www.ubereats.com/' },
  { id: 2, category: 'Fashion', store: "Victoria's Secret", logo: 'https://logo.clearbit.com/victoriassecret.com', title: 'Semi-Annual Sale', discount: 'Up to 70% OFF', code: 'VS70', affiliate: 'https://www.victoriassecret.com/' },
  { id: 3, category: 'Beauty', store: 'Bath & Body Works', logo: 'https://logo.clearbit.com/bathandbodyworks.com', title: 'Buy 3 Get 3 Free', discount: 'Buy 3 Get 3 Free', code: 'BBB3FOR3', affiliate: 'https://www.bathandbodyworks.com/' },
  { id: 4, category: 'Fashion', store: 'Fashion Nova', logo: 'https://logo.clearbit.com/fashionnova.com', title: 'Sitewide Sale', discount: 'Up to 45% OFF', code: 'NOVA45', affiliate: 'https://www.fashionnova.com/' },
  { id: 5, category: 'Fashion', store: 'Zara', logo: 'https://logo.clearbit.com/zara.com', title: 'Mid-Season Sale', discount: 'Up to 50% OFF', code: 'ZARA50', affiliate: 'https://www.zara.com/' },
  { id: 6, category: 'Fashion', store: 'Shein', logo: 'https://logo.clearbit.com/shein.com', title: 'Summer Mega Sale', discount: 'Up to 60% OFF', code: 'SHEIN60', affiliate: 'https://us.shein.com/' },
];

const propFirms = [
  { name: 'FundedNext', profit: '80-90%', payout: 'Weekly', link: 'https://fundednext.com/' },
  { name: 'The5ers', profit: '80%', payout: 'Bi-weekly', link: 'https://the5ers.com/' },
];

export default function GlobalDealsHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [savedDeals, setSavedDeals] = useState<number[]>([]);
  const [timeLeft] = useState(48 * 3600);

  const categories = ['All', 'Fashion', 'Tech', 'Beauty', 'Sports', 'Travel', 'Electronics', 'Home', 'Food', 'Prop Firms'];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedDeals') || '[]');
    setSavedDeals(saved);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return `${h}h ${m}m`;
  };

  const filteredDeals = allDeals.filter((deal) => {
    const matchesCategory = activeCategory === 'All' || deal.category === activeCategory;
    const matchesSearch = deal.store.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          deal.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleSave = (id: number) => {
    const newSaved = savedDeals.includes(id) ? savedDeals.filter(d => d !== id) : [...savedDeals, id];
    setSavedDeals(newSaved);
    localStorage.setItem('savedDeals', JSON.stringify(newSaved));
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`✅ Copied: ${code}`);
  };

  const shareDeal = (deal: Deal) => {
    const shareText = `🔥 ${deal.discount} at ${deal.store}!\n${deal.title}\nCode: ${deal.code}\n\nMore hot deals & coupons 👇\nhttps://globaldealshub.org`;

    if (navigator.share) {
      navigator.share({
        title: `${deal.discount} at ${deal.store}`,
        text: shareText,
        url: 'https://globaldealshub.org',
      }).catch(() => {
        navigator.clipboard.writeText(shareText);
        alert('✅ Copied! Paste in WhatsApp, Instagram, Facebook, etc.');
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert('✅ Share text copied! Paste in WhatsApp, Instagram, etc.');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="bg-black/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tighter flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl" />
            Global Deals Hub
          </h1>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-950 py-24 text-center">
        <h2 className="text-7xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent">
          Save More.<br />Shop Smarter.
        </h2>
        <p className="text-xl text-zinc-400">Hand-picked deals • Real codes • Updated daily</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-5 top-4 text-zinc-500" size={22} />
          <input
            type="text"
            placeholder="Search any brand... (e.g. Victoria's Secret)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-900/80 border border-white/10 pl-14 py-4 rounded-3xl text-lg focus:outline-none focus:border-white/30 placeholder:text-zinc-500"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-10 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-2xl font-medium whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-white text-black shadow-lg' : 'bg-zinc-900 hover:bg-zinc-800'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Deals Grid */}
        {activeCategory !== 'Prop Firms' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDeals.map(deal => (
              <div key={deal.id} className="group bg-zinc-900/70 border border-white/10 backdrop-blur-md rounded-3xl overflow-hidden hover:border-white/30 transition-all hover:shadow-2xl hover:-translate-y-1">
                <div className="h-52 bg-zinc-800 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={deal.logo} 
                    alt={deal.store} 
                    className="h-24 object-contain group-hover:scale-110 transition-transform duration-300" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-28 h-28 rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-7xl font-bold text-white';
                      fallback.textContent = deal.store[0];
                      target.parentElement?.appendChild(fallback);
                    }} 
                  />
                  <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Clock size={14} /> {formatTime(timeLeft)}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-4xl font-bold text-emerald-400 tracking-tight">{deal.discount}</h3>
                      <p className="text-2xl font-semibold mt-1">{deal.store}</p>
                    </div>
                    <button onClick={() => toggleSave(deal.id)} className="p-2 hover:scale-110 transition">
                      <Heart className={savedDeals.includes(deal.id) ? "fill-red-500 text-red-500" : "text-white/40"} size={28} />
                    </button>
                  </div>

                  <p className="text-zinc-400 mb-8 line-clamp-2">{deal.title}</p>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => copyCode(deal.code)} 
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition"
                    >
                      <Copy size={20} /> Copy Code
                    </button>
                    <a 
                      href={deal.affiliate} 
                      target="_blank" 
                      className="flex-1 bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition"
                    >
                      Go to Store <ExternalLink size={20} />
                    </a>
                    <button 
                      onClick={() => shareDeal(deal)} 
                      className="border border-white/30 hover:bg-white/10 p-4 rounded-2xl transition"
                    >
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Prop Firms */}
        {activeCategory === 'Prop Firms' && (
          <div className="bg-zinc-900/70 backdrop-blur-md rounded-3xl border border-white/10 p-8">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3"><Flame className="text-orange-500" /> Prop Firms Comparison</h2>
            <table className="w-full text-left">
              <thead className="bg-black">
                <tr>
                  <th className="p-6">Prop Firm</th>
                  <th className="p-6">Profit Split</th>
                  <th className="p-6">Payout</th>
                  <th className="p-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {propFirms.map((firm, i) => (
                  <tr key={i}>
                    <td className="p-6 font-semibold">{firm.name}</td>
                    <td className="p-6 text-emerald-400">{firm.profit}</td>
                    <td className="p-6">{firm.payout}</td>
                    <td className="p-6 text-right">
                      <a href={firm.link} target="_blank" className="text-emerald-400 hover:underline">Apply →</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black py-16 text-center text-sm text-zinc-500 border-t border-white/10">
        <p className="max-w-2xl mx-auto">
          This site is supported by affiliate links. We may earn a commission when you shop through our links — at no extra cost to you.
        </p>
        <p className="mt-6">© 2026 Global Deals Hub • All Rights Reserved</p>
        <div className="flex justify-center gap-8 mt-8 text-xs">
          <span>Affiliate Disclosure</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
        <div className="flex justify-center gap-8 mt-8 text-lg">
          🔒 Secure &nbsp; ⭐ Trusted Deals &nbsp; ✅ Verified Offers
        </div>
      </footer>
    </div>
  );
}