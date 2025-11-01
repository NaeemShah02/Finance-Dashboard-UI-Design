import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trending: 'up' | 'down';
  icon: LucideIcon;
}

export function MetricCard({ title, value, change, trending, icon: Icon }: MetricCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl group">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-slate-900/50 backdrop-blur-sm border border-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute -inset-px bg-gradient-to-br from-cyan-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="relative w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-cyan-400/20 to-transparent transition-opacity duration-300" />
            <Icon className="w-6 h-6 text-cyan-400 relative z-10 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
            trending === 'up'
              ? 'bg-emerald-500/20 text-emerald-300 group-hover:bg-emerald-500/30 group-hover:shadow-lg group-hover:shadow-emerald-500/20'
              : 'bg-red-500/20 text-red-300 group-hover:bg-red-500/30 group-hover:shadow-lg group-hover:shadow-red-500/20'
          }`}>
            {trending === 'up' ? (
              <TrendingUp className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
            ) : (
              <TrendingDown className="w-3.5 h-3.5 group-hover:-rotate-12 transition-transform duration-300" />
            )}
            <span>{change}</span>
          </div>
        </div>
        <h3 className="text-slate-400 text-sm font-normal mb-3 group-hover:text-slate-300 transition-colors">{title}</h3>
        <div className="flex items-baseline space-x-3">
          <p className="text-white text-3xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">{value}</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}
