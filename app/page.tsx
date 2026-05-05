'use client';

import { useState, useEffect } from 'react';
import { Copy, Flame, Clock, Search, Share2, Heart, Sun, Moon } from 'lucide-react';
import ShopButton from './components/ShopButton';

export default function GlobalDealsHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('discount');
  const [timeLeft, setTimeLeft] = useState(48 * 3600);
  const [savedDeals, setSavedDeals] = useState<string[]>([]);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('savedDeals');
    if (saved) setSavedDeals(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;

  const categories = ['All', 'Fashion', 'Tech', 'Beauty', 'Sports', 'Travel', 'Electronics', 'Home', 'Food', 'Prop Firms'];

  const allDeals = [
    { category: 'Fashion', store: "Victoria's Secret", title: "Semi-Annual Sale", discount: "Up to 70% OFF", code: "VS70", affiliate: "https://www.victoriassecret.com" },
    { category: 'Fashion', store: "Bath & Body Works", title: "Buy 3 Get 3 Free", discount: "Buy 3 Get 3 Free", code: "BBB3", affiliate: "https://www.bathandbodyworks.com" },
    { category: 'Fashion', store: "Shein", title: "Summer Mega Sale", discount: "60% OFF Everything", code: "SUMMER60", affiliate: "https://us.shein.com" },
    { category: 'Fashion', store: "Fashion Nova", title: "30% Off Sitewide", discount: "30% OFF + Free Shipping", code: "FN30", affiliate: "https://www.fashionnova.com" },
    { category: 'Fashion', store: "Zara", title: "Mid-Season Sale", discount: "Up to 50% OFF", code: "ZARA50", affiliate: "https://www.zara.com" },
    { category: 'Fashion', store: "H&M", title: "Summer Sale", discount: "Up to 50% OFF", code: "HM50", affiliate: "https://www.hm.com" },
    { category: 'Fashion', store: "Zalando", title: "Summer Fashion Sale", discount: "Up to 60% OFF", code: "ZALANDO60", affiliate: "https://www.zalando.nl" },

    { category: 'Sports', store: "Nike", title: "BOGO 50% Off", discount: "Buy 1 Get 1 50%", code: "BOGO50", affiliate: "https://www.nike.com" },
    { category: 'Sports', store: "Adidas", title: "Summer Clearance", discount: "Up to 50% OFF", code: "ADIDAS50", affiliate: "https://www.adidas.com" },
    { category: 'Sports', store: "Foot Locker", title: "Big Sale", discount: "Up to 60% OFF Shoes", code: "FL60", affiliate: "https://www.footlocker.com" },
    { category: 'Sports', store: "Puma", title: "Summer Collection", discount: "Up to 40% OFF", code: "PUMA40", affiliate: "https://www.puma.com" },

    { category: 'Tech', store: "Amazon", title: "Prime Day Early Access", discount: "Up to 70% OFF", code: "PRIME70", affiliate: "https://amazon.com" },
    { category: 'Electronics', store: "Coolblue", title: "Tech & Electronics Deals", discount: "Up to 40% OFF", code: "COOL40", affiliate: "https://www.coolblue.nl" },

    { category: 'Beauty', store: "Sephora", title: "VIB Sale", discount: "20% OFF + Gifts", code: "SEPH20", affiliate: "https://www.sephora.com" },

    { category: 'Home', store: "IKEA", title: "Summer Home Sale", discount: "Up to 40% OFF", code: "IKEA40", affiliate: "https://www.ikea.com" },
    { category: 'Home', store: "Bol.com", title: "Home & Garden Sale", discount: "Up to 50% OFF", code: "BOL50", affiliate: "https://www.bol.com" },

    { category: 'Food', store: "Uber Eats", title: "First Order Discount", discount: "$10 OFF", code: "EATS10", affiliate: "https://www.ubereats.com" },
  ];

  let filteredDeals = allDeals.filter(deal => {
    const matchesCategory = activeCategory === 'All' || deal.category === activeCategory;
    const matchesSearch = deal.store.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         deal.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (sortOption === 'discount') {
    filteredDeals.sort((a, b) => parseFloat(b.discount) - parseFloat(a.discount) || 0);
  }

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`✅ Code copied: ${code}`);
  };

  const shareDeal = (deal: any) => {
    const text = `🔥 ${deal.discount} at ${deal.store} - ${deal.title}`;
    navigator.share?.({ title: deal.title, text }) || alert(text);
  };

  const toggleSave = (store: string) => {
    let newSaved = savedDeals.includes(store) 
      ? savedDeals.filter(s => s !== store) 
      : [...savedDeals, store];
    setSavedDeals(newSaved);
    localStorage.setItem('savedDeals', JSON.stringify(newSaved));
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'}`}>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="#" className="flex items-center gap-4 hover:opacity-80 transition">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-3xl">🌍</div>
            <h1 className="text-3xl font-bold tracking-tight">Global Deals Hub</h1>
          </a>
          <button onClick={toggleTheme} className="p-3 rounded-xl hover:bg-zinc-800 transition">
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
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

      {/* Search + Sort */}
      <div className="max-w-4xl mx-auto px-6 -mt-8 mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-6 top-7 text-zinc-500" size={24} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search any brand... (e.g. Victoria's Secret)"
            className="w-full bg-zinc-900 border border-white/20 rounded-3xl py-6 pl-16 pr-6 text-lg focus:outline-none focus:border-violet-500 placeholder:text-zinc-500"
          />
        </div>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="bg-zinc-900 border border-white/20 rounded-3xl px-6 py-6 text-lg">
          <option value="discount">Highest Discount</option>
          <option value="ending">Ending Soon</option>
        </select>
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
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold">{deal.title}</h3>
                    <p className="text-zinc-400">{deal.store}</p>
                  </div>
                  <button onClick={() => toggleSave(deal.store)} className="text-red-500">
                    <Heart className={savedDeals.includes(deal.store) ? 'fill-current' : ''} size={24} />
                  </button>
                </div>

                <div className="flex justify-between items-start mb-8">
                  <div className="text-5xl font-bold text-emerald-400">{deal.discount}</div>
                  <div className="flex items-center gap-1 text-orange-400 text-sm font-medium">
                    <Clock size={18} /> {formatTime(timeLeft)}
                  </div>
                </div>

                <div className="flex gap-3">
                  {/* Copy Code Button */}
                  <button 
                    onClick={() => copyCode(deal.code)} 
                    className="flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 text-black py-4 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <Copy size={20} /> Copy Code
                  </button>

                  {/* Go to Store Button */}
                  <ShopButton brand={deal.store} url={deal.affiliate}>
                    Go to Store
                  </ShopButton>

                  {/* Share Button */}
                  <button 
                    onClick={() => shareDeal(deal)} 
                    className="border border-white/30 hover:bg-white/10 p-4 rounded-2xl transition-all hover:scale-105 active:scale-95"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Prop Firms Section (unchanged) */}
      {activeCategory === 'Prop Firms' && (
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Prop Firms Comparison</h2>
          {/* Your existing table code here */}
        </div>
      )}

      <footer className="bg-black py-16 text-center text-sm text-zinc-500 border-t border-white/10">
        This site is supported by affiliate links. We may earn a commission when you shop through our links — at no extra cost to you.<br />
        © 2026 Global Deals Hub • All Rights Reserved
      </footer>
    </div>
  );
}
<footer className="bg-black py-16 text-center text-sm text-zinc-500 border-t border-white/10">
  <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
      <a href="/affiliate-disclosure" className="hover:text-white transition">Affiliate Disclosure</a>
      <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
      <a href="/terms" className="hover:text-white transition">Terms of Service</a>
    </div>

    <div className="text-xs opacity-70">
      This site is supported by affiliate links. We may earn a commission when you shop through our links — at no extra cost to you.<br />
      © 2026 Global Deals Hub • All Rights Reserved
    </div>

    {/* Trust Signals */}
    <div className="flex items-center gap-8 text-xs opacity-60 mt-4">
      <div>🔒 Secure Checkout</div>
      <div>⭐ Trusted by Thousands</div>
      <div>✅ Verified Deals</div>
    </div>
  </div>
</footer>