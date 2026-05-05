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
  expires?: number;
}

const allDeals: Deal[] = [
  { id: 1, category: 'Food', store: 'Uber Eats', logo: 'https://logo.clearbit.com/ubereats.com', title: 'First Order Discount', discount: '$10 OFF', code: 'UBER10FIRST', affiliate: 'https://www.ubereats.com/' },
  { id: 2, category: 'Fashion', store: 'Shein', logo: 'https://logo.clearbit.com/shein.com', title: 'Up to 70% OFF Everything', discount: '70% OFF', code: 'SHEIN70', affiliate: 'https://us.shein.com/' },
  { id: 3, category: 'Fashion', store: 'Fashion Nova', logo: 'https://logo.clearbit.com/fashionnova.com', title: '30% OFF + Free Shipping', discount: '30% OFF', code: 'NOVA30', affiliate: 'https://www.fashionnova.com/' },
  { id: 4, category: 'Fashion', store: "Victoria's Secret", logo: 'https://logo.clearbit.com/victoriassecret.com', title: 'Up to 70% OFF Sale', discount: '70% OFF', code: 'VS70', affiliate: 'https://www.victoriassecret.com/' },
  { id: 5, category: 'Beauty', store: 'Bath & Body Works', logo: 'https://logo.clearbit.com/bathandbodyworks.com', title: '$15 OFF $50+', discount: '$15 OFF', code: 'BBB15', affiliate: 'https://www.bathandbodyworks.com/' },
  { id: 6, category: 'Sports', store: 'Nike', logo: 'https://logo.clearbit.com/nike.com', title: 'Extra 25% OFF Sale', discount: '25% OFF', code: 'NIKE25', affiliate: 'https://www.nike.com/' },
  { id: 7, category: 'Sports', store: 'Adidas', logo: 'https://logo.clearbit.com/adidas.com', title: '20% OFF First Order', discount: '20% OFF', code: 'ADIDAS20', affiliate: 'https://www.adidas.com/' },
  { id: 8, category: 'Tech', store: 'Coolblue', logo: 'https://logo.clearbit.com/coolblue.nl', title: 'Free Shipping Over €50', discount: 'Free Shipping', code: 'COOLFREE', affiliate: 'https://www.coolblue.nl/' },
  // Add more deals here anytime...
];

const propFirms = [
  { name: 'FundedNext', profit: '80-90%', payout: 'Weekly', link: 'https://fundednext.com/' },
  { name: 'The5ers', profit: '80%', payout: 'Bi-weekly', link: 'https://the5ers.com/' },
  // Add more...
];

export default function GlobalDealsHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [savedDeals, setSavedDeals] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(48 * 3600);

  const categories = ['All', 'Fashion', 'Tech', 'Beauty', 'Sports', 'Food', 'Prop Firms'];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedDeals') || '[]');
    setSavedDeals(saved);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
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
    const newSaved = savedDeals.includes(id)
      ? savedDeals.filter((d) => d !== id)
      : [...savedDeals, id];
    setSavedDeals(newSaved);
    localStorage.setItem('savedDeals', JSON.stringify(newSaved));
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`✅ Copied: ${code}`);
  };

  const shareDeal = async (deal: Deal) => {
    const shareText = `🔥 ${deal.discount} at ${deal.store} - ${deal.title}\nCode: ${deal.code}\n\nGrab it here 👇\nhttps://globaldealshub.org`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${deal.discount} at ${deal.store}`,
          text: shareText,
          url: 'https://globaldealshub.org',
        });
      } catch (err) {
        // Fallback
        navigator.clipboard.writeText(shareText);
        alert('✅ Share text copied! Paste it in WhatsApp, Instagram, etc.');
      }
    } else {
      navigator.clipboard.writeText(shareText);
      alert('✅ Share text copied! Paste it in WhatsApp, Instagram, Facebook...');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white pb-20">
      {/* Navbar */}
      <nav className="bg-black border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tighter">Global Deals Hub</h1>
          <div className="flex items-center gap-6 text-sm">
            <a href="#deals" className="hover:text-emerald-400 transition">Deals</a>
            <a href="#propfirms" className="hover:text-emerald-400 transition">Prop Firms</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-br from-zinc-900 to-black py-20 text-center">
        <h2 className="text-6xl font-bold mb-4 tracking-tighter">Shop Smarter.<br />Save Bigger.</h2>
        <p className="text-xl text-zinc-400 max-w-md mx-auto">Hand-picked deals • Real codes • Updated daily</p>
      </div>

      {/* Search & Categories */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="relative mb-8">
          <Search className="absolute left-5 top-4 text-zinc-500" size={22} />
          <input
            type="text"
            placeholder="Search brands or deals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-900 border border-white/10 pl-14 py-4 rounded-3xl text-lg focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-white text-black'
                  : 'bg-zinc-900 hover:bg-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Deals Grid */}
        <div id="deals" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeals.map((deal) => (
            <div key={deal.id} className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden group">
              <div className="h-48 bg-zinc-800 flex items-center justify-center relative">
                <img
                  src={deal.logo}
                  alt={deal.store}
                  className="h-20 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'text-5xl font-bold text-white/30';
                    fallback.textContent = deal.store[0];
                    e.currentTarget.parentElement?.appendChild(fallback);
                  }}
                />
                <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Clock size={14} /> {formatTime(timeLeft)}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{deal.discount}</h3>
                    <p className="text-emerald-400 font-semibold">{deal.store}</p>
                  </div>
                  <button onClick={() => toggleSave(deal.id)} className="p-2 hover:bg-white/10 rounded-full transition">
                    <Heart className={savedDeals.includes(deal.id) ? 'fill-red-500 text-red-500' : ''} />
                  </button>
                </div>

                <p className="text-zinc-400 mb-6 line-clamp-2">{deal.title}</p>

                <div className="flex gap-3">
                  <button
                    onClick={() => copyCode(deal.code)}
                    className="flex-1 bg-white hover:bg-emerald-400 text-black py-4 rounded-2xl font-semibold transition flex items-center justify-center gap-2"
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

        {/* Prop Firms Section */}
        <div id="propfirms" className="mt-20">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Flame className="text-orange-500" /> Prop Firms Comparison
          </h2>
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10">
            <table className="w-full">
              <thead className="bg-black">
                <tr>
                  <th className="text-left p-6">Prop Firm</th>
                  <th className="text-left p-6">Profit Split</th>
                  <th className="text-left p-6">Payout Speed</th>
                  <th></th>
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
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-16 text-center text-sm text-zinc-500 border-t border-white/10 mt-20">
        This site is supported by affiliate links. We may earn a commission when you shop through our links — at no extra cost to you.<br />
        © 2026 Global Deals Hub • 
        Affiliate Disclosure • Privacy Policy • Terms of Service
      </footer>
    </div>
  );
}