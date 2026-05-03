export default function PropFirms() {
    const firms = [
      {
        name: "FTMO",
        maxFunding: "$200,000",
        profitSplit: "80-90%",
        fee: "$155 - $999",
        rating: "4.9",
        bestFor: "Serious Traders",
        link: "https://ftmo.com",
      },
      {
        name: "The Funded Trader",
        maxFunding: "$400,000",
        profitSplit: "80-90%",
        fee: "$65 - $999",
        rating: "4.7",
        bestFor: "High Capital",
        link: "https://thefundedtrader.com",
      },
      {
        name: "FundedNext",
        maxFunding: "$200,000",
        profitSplit: "80-95%",
        fee: "$99 - $999",
        rating: "4.8",
        bestFor: "Beginners",
        link: "https://fundednext.com",
      },
      {
        name: "My Forex Funds",
        maxFunding: "$400,000",
        profitSplit: "85%",
        fee: "$49 - $999",
        rating: "4.6",
        bestFor: "Aggressive Traders",
        link: "https://myforexfunds.com",
      },
    ];
  
    return (
      <div className="pt-24 pb-20 bg-zinc-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-4">Prop Firms Comparison</h1>
          <p className="text-xl text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Compare the best proprietary trading firms — find the right one for you
          </p>
  
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-zinc-900 rounded-3xl overflow-hidden">
              <thead>
                <tr className="bg-zinc-800">
                  <th className="p-6 text-left">Prop Firm</th>
                  <th className="p-6 text-left">Max Funding</th>
                  <th className="p-6 text-left">Profit Split</th>
                  <th className="p-6 text-left">Challenge Fee</th>
                  <th className="p-6 text-left">Rating</th>
                  <th className="p-6 text-left">Best For</th>
                  <th className="p-6"></th>
                </tr>
              </thead>
              <tbody>
                {firms.map((firm, i) => (
                  <tr key={i} className="border-t border-white/10 hover:bg-zinc-800/50 transition">
                    <td className="p-6 font-semibold">{firm.name}</td>
                    <td className="p-6 text-green-400 font-medium">{firm.maxFunding}</td>
                    <td className="p-6">{firm.profitSplit}</td>
                    <td className="p-6">{firm.fee}</td>
                    <td className="p-6">⭐ {firm.rating}</td>
                    <td className="p-6 text-zinc-400">{firm.bestFor}</td>
                    <td className="p-6">
                      <a
                        href={firm.link}
                        target="_blank"
                        className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-2xl text-sm font-medium transition"
                      >
                        Visit →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          <p className="text-center text-zinc-500 mt-12 text-sm">
            Last updated: May 2026 • Always verify current rules on their websites
          </p>
        </div>
      </div>
    );
  }