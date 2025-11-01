import { TrendingUp, TrendingDown } from 'lucide-react';

export function QuickStatsPanel() {
  const stats = [
    { name: 'S&P 500', value: '4,783.45', change: '+0.8%', trending: 'up' },
    { name: 'NASDAQ', value: '15,095.14', change: '+1.2%', trending: 'up' },
    { name: 'DOW', value: '37,305.16', change: '-0.3%', trending: 'down' },
    { name: 'BTC/USD', value: '43,892.50', change: '+2.4%', trending: 'up' },
    { name: 'ETH/USD', value: '2,347.18', change: '+1.9%', trending: 'up' },
    { name: 'EUR/USD', value: '1.0842', change: '-0.1%', trending: 'down' },
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 h-full">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-1">Market Overview</h2>
        <p className="text-slate-400 text-sm">Live market indices</p>
      </div>

      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900/70 transition-all border border-slate-700/30 hover:border-slate-600/50 group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{stat.name}</span>
              <div className={`flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                stat.trending === 'up' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
              }`}>
                {stat.trending === 'up' ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span>{stat.change}</span>
              </div>
            </div>
            <p className="text-lg font-semibold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-slate-700/50">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Last updated</span>
          <span>2 minutes ago</span>
        </div>
      </div>
    </div>
  );
}
