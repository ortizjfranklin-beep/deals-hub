'use client';

import { useState } from 'react';
import { Copy, ExternalLink, Star, Flame } from 'lucide-react';

export default function GlobalDealsHub() {
  const [searchTerm, setSearchTerm] = useState('');

  const hotDeals = [
    { store: "Amazon", title: "Prime Day Early Access", discount: "Up to 70% OFF", code: "PRIME70", affiliate: "https://amazon.com" },
    { store: "Shein", title: "Summer Mega Sale", discount: "60% OFF Everything", code: "SUMMER60", affiliate: "https://shein.com" },
    { store: "Nike", title: "BOGO 50% Off", discount: "Buy 1 Get 1 50%", code: "BOGO50", affiliate: "https://nike.com" },
    { store: "Fashion Nova", title: "Extra 30% Off", discount: "30% OFF Sitewide", code: "FN30", affiliate: "https://fashionnova.com" },
  ];

  const propFirms = [
    { name: "FTMO", maxFunding: "$200,000", profitSplit: "80-90%", fee: "$155-$999", rating: "4.9", bestFor: "Serious Traders", link: "https://ftmo.com" },
    { name: "The Funded Trader", maxFunding: "$400,000", profitSplit: "80-90%", fee: "$65-$999", rating: "4.7", bestFor: "High Capital", link: "https://thefundedtrader.com" },
    { name: "FundedNext", maxFunding: "$200,000", profitSplit: "80-95%", fee: "$99-$999", rating: "4.8", bestFor: "Beginners", link: "https://fundednext.com" },
  ];

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`✅ Code copied: ${code}`);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-rose-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">🌍</div>
            <h1 className="text-3xl font-bold tracking-tighter">Global Deals Hub</h1>
          </div>
          <div className="flex gap-10 text-sm font-medium">
            <a href="#deals" className="hover:text-fuchsia-400 transition">Hot Deals</a>
            <a href="#propfirms" className="hover:text-fuchsia-400 transition">Prop Firms</a>
            <a href="#fashion" className="hover:text-fuchsia-400 transition">Fashion</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-32 pb-24 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-center px-6">
        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-6">
          <Flame className="text-orange-400" /> Trending Right Now
        </div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
          The Best Deals.<br />
          <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">One Place.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Verified discounts, promo codes &amp; prop firm comparisons</p>
      </div>

      {/* Hot Deals */}
      <div id="deals" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
          🔥 Hottest Deals Right Now
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotDeals.map((deal, i) => (
            <div key={i} className="group bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-fuchsia-500 transition-all hover:scale-[1.02]">
              <div className="text-5xl font-bold text-emerald-400 mb-6">{deal.discount}</div>
              <h3 className="text-2xl font-semibold mb-1">{deal.title}</h3>
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

      {/* Prop Firms */}
      <div id="propfirms" className="bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Prop Firms Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-zinc-950 rounded-3xl overflow-hidden">
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
                  <tr key={i} className="border-t border-white/10 hover:bg-zinc-900 transition">
                    <td className="p-6 font-bold">{firm.name}</td>
                    <td className="p-6 text-emerald-400 font-medium">{firm.maxFunding}</td>
                    <td className="p-6">{firm.profitSplit}</td>
                    <td className="p-6">{firm.fee}</td>
                    <td className="p-6">⭐ {firm.rating}</td>
                    <td className="p-6 text-zinc-400">{firm.bestFor}</td>
                    <td className="p-6">
                      <a href={firm.link} target="_blank" className="bg-violet-600 hover:bg-violet-500 px-8 py-3 rounded-2xl text-sm font-medium inline-block">
                        Sign Up →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-16 text-center text-sm text-zinc-500 border-t border-white/10">
        This site earns commissions from affiliate links. Thank you for supporting us!
      </footer>
    </div>
  );
}