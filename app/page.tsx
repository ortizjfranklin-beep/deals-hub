'use client';

import { useState } from 'react';

export default function GlobalDealsHub() {
  const [searchTerm, setSearchTerm] = useState('');

  const hotDeals = [
    { title: "Amazon Prime Day Early Access", store: "Amazon", discount: "Up to 70% OFF", code: "PRIME70", expires: "48h" },
    { title: "Shein Summer Mega Sale", store: "Shein", discount: "60% OFF Everything", code: "SUMMER60", expires: "24h" },
    { title: "Nike BOGO Sale", store: "Nike", discount: "Buy 1 Get 1 50%", code: "BOGO50", expires: "5d" },
    { title: "Fashion Nova Extra 30%", store: "Fashion Nova", discount: "30% OFF Sitewide", code: "FN30", expires: "3d" },
    { title: "Adidas Summer Clearance", store: "Adidas", discount: "Up to 50% OFF", code: "ADIDAS50", expires: "7d" },
  ];

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`✅ Code copied: ${code}`);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl">🌍</div>
            <h1 className="text-2xl font-bold tracking-tight">Global Deals Hub</h1>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#deals" className="hover:text-blue-400 transition">Deals</a>
            <a href="#propfirms" className="hover:text-blue-400 transition">Prop Firms</a>
            <a href="#fashion" className="hover:text-blue-400 transition">Fashion</a>
          </div>
          <div className="text-sm text-zinc-400">2,347 deals live</div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-28 pb-20 bg-gradient-to-br from-zinc-900 to-black text-center px-6">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
          Save More.<br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Shop Smarter.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          Verified discounts, promo codes &amp; exclusive deals from around the world
        </p>

        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search stores or deals..."
            className="w-full bg-zinc-900 border border-white/20 rounded-3xl py-5 px-6 text-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Hot Deals */}
      <div id="deals" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-4xl">🔥</span>
          <h2 className="text-4xl font-bold">Hot Deals Right Now</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotDeals.map((deal, i) => (
            <div key={i} className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition-all group">
              <div className="text-4xl font-bold text-green-400 mb-4">{deal.discount}</div>
              <h3 className="text-2xl font-semibold mb-1">{deal.title}</h3>
              <p className="text-zinc-400 mb-6">{deal.store}</p>
              
              <button 
                onClick={() => copyCode(deal.code)}
                className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-green-400 transition mb-3"
              >
                Copy Code
              </button>
              <p className="text-xs text-zinc-500 text-center">Expires in {deal.expires}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}