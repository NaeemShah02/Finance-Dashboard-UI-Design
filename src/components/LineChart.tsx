import { useState } from 'react';

export function LineChart() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = [180, 220, 195, 280, 310, 290, 350, 380, 420, 395, 450, 480];
  const maxValue = Math.max(...data);
  const points = data.map((value, index) => ({
    x: (index / (data.length - 1)) * 100,
    y: 100 - (value / maxValue) * 80,
  }));

  const pathData = points.map((point, index) =>
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ');

  const gradientPathData = `${pathData} L 100 100 L 0 100 Z`;

  return (
    <div className="relative overflow-hidden rounded-xl group h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-slate-900/50 backdrop-blur-sm border border-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Revenue Trend</h2>
            <p className="text-slate-400 text-sm">Last 12 months performance</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-300 rounded-lg hover:from-cyan-500/50 hover:to-blue-500/50 transition-all border border-cyan-400/20">
              12M
            </button>
            <button className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:bg-slate-700/50 rounded-lg transition-colors">
              6M
            </button>
            <button className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:bg-slate-700/50 rounded-lg transition-colors">
              3M
            </button>
          </div>
        </div>

        <div className="relative h-64 flex-1">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(6, 182, 212)" />
                <stop offset="50%" stopColor="rgb(59, 130, 246)" />
                <stop offset="100%" stopColor="rgb(37, 99, 235)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d={gradientPathData}
              fill="url(#lineGradient)"
              className="transition-all duration-300 group-hover:opacity-100"
              opacity="0.7"
            />

            <path
              d={pathData}
              fill="none"
              stroke="url(#strokeGradient)"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300 group-hover:stroke-width-1 group-hover:drop-shadow-lg"
              filter="url(#glow)"
            />

            {points.map((point, index) => (
              <g key={index} onMouseEnter={() => setHoveredPoint(index)} onMouseLeave={() => setHoveredPoint(null)}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={hoveredPoint === index ? 1.5 : 0.8}
                  fill="rgb(6, 182, 212)"
                  className="transition-all duration-200 cursor-pointer"
                  opacity={hoveredPoint === index ? 1 : 0.6}
                />
                {hoveredPoint === index && (
                  <>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="3"
                      fill="none"
                      stroke="rgb(6, 182, 212)"
                      strokeWidth="0.3"
                      opacity="0.4"
                      className="animate-pulse"
                    />
                    <text x={point.x} y={point.y - 4} textAnchor="middle" fill="white" fontSize="2" fontWeight="600">
                      ${data[index]}K
                    </text>
                  </>
                )}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={hoveredPoint === index ? 0.8 : 0.3}
                  fill="white"
                  className="transition-all duration-200"
                />
              </g>
            ))}
          </svg>

          <div className="absolute -bottom-8 left-0 right-0 flex justify-between px-2">
            {months.map((month, index) => (
              <span key={index} className={`text-xs transition-colors ${hoveredPoint === index ? 'text-cyan-400 font-semibold' : 'text-slate-500'}`}>
                {month}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-700/30 flex items-center justify-between">
          <div className="group/stat hover:bg-slate-700/30 px-3 py-2 rounded-lg transition-colors">
            <p className="text-xs text-slate-400 mb-1">Average Monthly Revenue</p>
            <p className="text-lg font-semibold text-white group-hover/stat:text-cyan-400 transition-colors">$237,283</p>
          </div>
          <div className="group/stat hover:bg-slate-700/30 px-3 py-2 rounded-lg transition-colors">
            <p className="text-xs text-slate-400 mb-1">Total Revenue</p>
            <p className="text-lg font-semibold text-white group-hover/stat:text-cyan-400 transition-colors">$2,847,392</p>
          </div>
          <div className="group/stat hover:bg-slate-700/30 px-3 py-2 rounded-lg transition-colors">
            <p className="text-xs text-slate-400 mb-1">Growth Rate</p>
            <p className="text-lg font-semibold text-emerald-400 group-hover/stat:text-emerald-300 transition-colors">+18.7%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
