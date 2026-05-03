'use client';

import { useState } from 'react';

export default function GlobalDealsHub() {
  const [searchTerm, setSearchTerm] = useState('');

  const hotDeals = [
    { 
      store: "Amazon", 
      title: "Prime Day Early Access", 
      discount: "Up to 70% OFF", 
      code: "PRIME70", 
      expires: "48h", 
      affiliate: "https://www.amazon.com/?tag=YOURTAG-20" 
    },
    { 
      store: "Shein", 
      title: "Summer Mega Sale", 
      discount: "60% OFF Everything", 
      code: "SUMMER60", 
      expires: "24h", 
      affiliate: "https://shein.com" 
    },
    { 
      store: "Nike", 
      title: "BOGO 50% Off", 
      discount: "Buy 1 Get 1 50%", 
      code: "BOGO50", 
      expires: "5d", 
      affiliate: "https://www.nike.com" 
    },
    { 
      store: "Fashion Nova", 
      title: "Extra 30% Off", 
      discount: "30% OFF Sitewide", 
      code: "FN30", 
      expires: "3d", 
      affiliate: "https://www.fashionnova.com" 
    },
  ];

  const propFirms = [
    { 
      name: "FTMO", 
      maxFunding: "$200,000", 
      profitSplit: "80-90%", 
      fee: "$155-$999", 
      rating: "4.9", 
      bestFor: "Serious Traders", 
      affiliate: "https://ftmo.com/?ref=YOURREF" 
    },
    { 
      name: "The Funded Trader", 
      maxFunding: "$400,000", 
      profitSplit: "80-90%", 
      fee: "$65-$999", 
      rating: "4.7", 
      bestFor: "High Capital", 
      affiliate: "https://thefundedtrader.com/?ref=YOURREF" 
    },
    { 
      name: "FundedNext", 
      maxFunding: "$200,000", 
      profitSplit: "80-95%", 
      fee: "$99-$999", 
      rating: "4.8", 
      bestFor: "Beginners", 
      affiliate: "https://fundednext.com/?ref=YOURREF" 
    },
    { 
      name: "My Forex Funds", 
      maxFunding: "$400,000", 
      profitSplit: "85%", 
      fee: "$49-$999", 
      rating: "4.6", 
      bestFor: "Aggressive", 
      affiliate: "https://myforexfunds.com/?ref=YOURREF" 
    },
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
            <div className="text-3xl">🌍</div>
            <h1 className="text-2xl font-bold">Global Deals Hub</h1>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#deals" className="hover:text-blue-400">Deals</a>
            <a href="#propfirms" className="hover:text-blue-400">Prop Firms</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-28 pb-16 bg-gradient-to-br from-zinc-900 to-black text-center px-6">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
          Save More.<br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Shop Smarter.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Verified deals that pay me when you use them</p>
      </div>

      {/* Hot Deals */}
      <div id="deals" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">🔥 Hot Deals Right Now</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotDeals.map((deal, i) => (
            <div key={i} className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition-all">
              <div className="text-4xl font-bold text-green-400 mb-4">{deal.discount}</div>
              <h3 className="text-2xl font-semibold mb-1">{deal.title}</h3>
              <p className="text-zinc-400 mb-6">{deal.store}</p>
              <button 
                onClick={() => copyCode(deal.code)}
                className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-green-400 mb-3"
              >
                Copy Code
              </button>
              <a href={deal.affiliate} target="_blank" className="block text-center text-blue-400 text-sm hover:underline">
                Shop on {deal.store} →
              </a>
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
                    <td className="p-6 text-green-400 font-medium">{firm.maxFunding}</td>
                    <td className="p-6">{firm.profitSplit}</td>
                    <td className="p-6">{firm.fee}</td>
                    <td className="p-6">⭐ {firm.rating}</td>
                    <td className="p-6 text-zinc-400">{firm.bestFor}</td>
                    <td className="p-6">
                      <a href={firm.affiliate} target="_blank" className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-2xl text-sm font-medium">
                        Sign Up (I earn commission)
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}