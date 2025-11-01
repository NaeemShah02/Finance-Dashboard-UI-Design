import { useState } from 'react';
import { LayoutGrid, TrendingUp, PieChart, Wallet, BarChart3, Settings, LogOut, ChevronRight, Zap } from 'lucide-react';

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutGrid },
    { id: 'portfolio', label: 'Portfolio', icon: TrendingUp },
    { id: 'transactions', label: 'Transactions', icon: Wallet },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'reports', label: 'Reports', icon: PieChart },
  ];

  return (
    <>
      <div className={`${
        isExpanded ? 'w-64' : 'w-20'
      } bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700/50 backdrop-blur-xl transition-all duration-300 fixed h-screen flex flex-col z-40`}>

        <div className="p-6 flex items-center justify-between border-b border-slate-700/30">
          {isExpanded && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 rounded-lg flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Hub</span>
            </div>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors ml-auto"
          >
            <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group relative ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30'
                    : 'hover:bg-slate-700/30'
                }`}
              >
                <div className={`relative ${isActive ? 'text-cyan-400' : 'text-slate-400 group-hover:text-slate-300'}`}>
                  <Icon className="w-5 h-5 transition-all" />
                  {isActive && (
                    <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                  )}
                </div>
                {isExpanded && (
                  <>
                    <span className={`flex-1 text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                      {item.label}
                    </span>
                    {isActive && (
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
                    )}
                  </>
                )}
              </button>
            );
          })}
        </nav>

        <div className="px-3 py-6 border-t border-slate-700/30 space-y-2">
          <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-400 hover:text-slate-300 hover:bg-slate-700/30 transition-all ${!isExpanded && 'justify-center'}`}>
            <Settings className="w-5 h-5" />
            {isExpanded && <span className="text-sm font-medium">Settings</span>}
          </button>
          <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all ${!isExpanded && 'justify-center'}`}>
            <LogOut className="w-5 h-5" />
            {isExpanded && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </div>

      <div className={`${isExpanded ? 'ml-64' : 'ml-20'} transition-all duration-300`} />
    </>
  );
}
