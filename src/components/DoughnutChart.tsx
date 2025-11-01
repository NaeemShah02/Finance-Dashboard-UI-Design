export function DoughnutChart() {
  const expenses = [
    { label: 'Operations', value: 35, color: 'from-cyan-500 to-cyan-600', fill: 'rgb(6, 182, 212)' },
    { label: 'Marketing', value: 25, color: 'from-blue-500 to-blue-600', fill: 'rgb(37, 99, 235)' },
    { label: 'Salaries', value: 20, color: 'from-emerald-500 to-emerald-600', fill: 'rgb(16, 185, 129)' },
    { label: 'Technology', value: 15, color: 'from-violet-500 to-violet-600', fill: 'rgb(139, 92, 246)' },
    { label: 'Other', value: 5, color: 'from-slate-500 to-slate-600', fill: 'rgb(100, 116, 139)' },
  ];

  let currentAngle = -90;
  const segments = expenses.map(expense => {
    const angle = (expense.value / 100) * 360;
    const start = currentAngle;
    currentAngle += angle;
    return { ...expense, startAngle: start, endAngle: currentAngle, angle };
  });

  const createArc = (startAngle: number, endAngle: number) => {
    const start = polarToCartesian(50, 50, 40, endAngle);
    const end = polarToCartesian(50, 50, 40, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return [
      `M ${start.x} ${start.y}`,
      `A 40 40 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
    ].join(' ');
  };

  function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-1">Expense Breakdown</h2>
        <p className="text-slate-400 text-sm">Monthly expense distribution</p>
      </div>

      <div className="flex items-center justify-center mb-6">
        <div className="relative w-64 h-64">
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            <defs>
              {segments.map((segment, index) => (
                <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={segment.fill} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={segment.fill} stopOpacity="1" />
                </linearGradient>
              ))}
            </defs>

            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(51, 65, 85, 0.3)" strokeWidth="20" />

            {segments.map((segment, index) => (
              <path
                key={index}
                d={createArc(segment.startAngle, segment.endAngle)}
                fill="none"
                stroke={`url(#gradient-${index})`}
                strokeWidth="20"
                className="hover:opacity-80 transition-opacity cursor-pointer"
                strokeLinecap="round"
              />
            ))}
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">$842K</p>
              <p className="text-sm text-slate-400">Total Expenses</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {expenses.map((expense, index) => (
          <div key={index} className="flex items-center justify-between group hover:bg-slate-700/30 rounded-lg p-2 transition-colors">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${expense.color}`} />
              <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{expense.label}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-white">{expense.value}%</span>
              <span className="text-xs text-slate-400">${(expense.value * 8.42).toFixed(0)}K</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
