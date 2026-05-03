'use client';

import { useState } from 'react';

export default function GlobalDealsHub() {
  const [searchTerm, setSearchTerm] = useState('');

  const hotDeals = [
    { store: "Amazon", title: "Prime Day Early Access", discount: "Up to 70% OFF", code: "PRIME70", expires: "48h", affiliate: "https://amazon.com" },
    { store: "Shein", title: "Summer Mega Sale", discount: "60% OFF Everything", code: "SUMMER60", expires: "24h", affiliate: "https://shein.com" },
    { store: "Nike", title: "BOGO 50% Off", discount: "Buy 1 Get 1 50%", code: "BOGO50", expires: "5d", affiliate: "https://nike.com" },
  ];

  const propFirms = [
    { name: "FTMO", maxFunding: "$200,000", profitSplit: "80-90%", fee: "$155-$999", rating: "4.9", bestFor: "Serious Traders", link: "https://ftmo.com/?ref=yourref" },
    { name: "The Funded Trader", maxFunding: "$400,000", profitSplit: "80-90%", fee: "$65-$999", rating: "4.7", bestFor: "High Capital", link: "https://thefundedtrader.com/?ref=yourref" },
    { name: "FundedNext", maxFunding: "$200,000", profitSplit: "80-95%", fee: "$99-$999", rating: "4.8", bestFor: "Beginners", link: "https://fundednext.com/?ref=yourref" },
    { name: "My Forex Funds", maxFunding: "$400,000", profitSplit: "85%", fee: "$49-$999", rating: "4.6", bestFor: "Aggressive", link: "https://myforexfunds.com/?ref=yourref" },
    { name: "AquaFunded", maxFunding: "$250,000", profitSplit: "80-90%", fee: "$97-$997", rating: "4.5", bestFor: "Scalpers", link: "https://aquafunded.com/?ref=yourref" },
    { name: "Eagle Funded", maxFunding: "$250,000", profitSplit: "80-85%", fee: "$99-$999", rating: "4.4", bestFor: "Consistency", link: "https://eaglefunded.com/?ref=yourref" },
  ];

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
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Verified deals + Prop Firm comparisons</p>
      </div>

      {/* Hot Deals */}
      <div id="deals" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">🔥 Hot Deals Right Now</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotDeals.map((deal, i) => (
            <div key={i} className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition-all">
              <div className="text-4xl font-bold text-green-400 mb-4">{deal.discount}</div>
              <h3 className="text-2xl font-semibold mb-1">{deal.title}</h3>
              <p className="text-zinc-400 mb-6">{deal.store}</p>
              <button onClick={() => copyCode(deal.code)} className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-green-400">
                Copy Code
              </button>
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
                  <tr key={i} className="border-t border-white/10 hover:bg-zinc-800/70 transition">
                    <td className="p-6 font-semibold text-lg">{firm.name}</td>
                    <td className="p-6 text-green-400 font-medium">{firm.maxFunding}</td>
                    <td className="p-6 text-lg">{firm.profitSplit}</td>
                    <td className="p-6">{firm.fee}</td>
                    <td className="p-6">⭐ {firm.rating}</td>
                    <td className="p-6 text-zinc-400">{firm.bestFor}</td>
                    <td className="p-6">
                      <a
                        href={firm.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-2xl text-sm font-medium transition inline-block"
                      >
                        Visit Site →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-zinc-500 mt-12 text-sm">
            Last updated May 2026 • Always verify current rules directly on their websites
          </p>
        </div>
      </div>
    </div>
  );
}