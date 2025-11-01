import { DollarSign, Users, CreditCard, Activity } from 'lucide-react';
import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MetricCard } from './components/MetricCard';
import { LineChart } from './components/LineChart';
import { DoughnutChart } from './components/DoughnutChart';
import { BarChart } from './components/BarChart';
import { TransactionTable } from './components/TransactionTable';
import { QuickStatsPanel } from './components/QuickStatsPanel';

function App() {
  const [] = useState(true);

  const metrics = [
    {
      title: 'Total Revenue',
      value: '$2,847,392',
      change: '+12.5%',
      trending: 'up' as const,
      icon: DollarSign,
    },
    {
      title: 'Net Profit',
      value: '$1,234,567',
      change: '+8.3%',
      trending: 'up' as const,
      icon: Activity,
    },
    {
      title: 'Active Users',
      value: '24,581',
      change: '-2.4%',
      trending: 'down' as const,
      icon: Users,
    },
    {
      title: 'Avg. Transaction',
      value: '$3,892',
      change: '+5.1%',
      trending: 'up' as const,
      icon: CreditCard,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <Sidebar />

      <nav className="bg-slate-900/40 backdrop-blur-lg border-b border-slate-700/30 sticky top-0 z-40">
        
      </nav>

      <main className="ml-64 px-6 py-8 relative z-10">
        <div className="mb-12">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Financial Overview
              </h2>
              <p className="text-slate-400">Track your business performance across all metrics</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 rounded-lg bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 transition-all text-sm font-medium">
                This Month
              </button>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-400 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all text-sm font-medium">
                Export
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <LineChart />
          </div>
          <div>
            <QuickStatsPanel />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <DoughnutChart />
          <BarChart />
        </div>

        <TransactionTable />
      </main>
    </div>
  );
}

export default App;
