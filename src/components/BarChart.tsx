export function BarChart() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const profits = [85, 92, 78, 105, 118, 112, 135, 145, 160, 148, 172, 185];
  const maxProfit = Math.max(...profits);

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-1">Monthly Profit</h2>
        <p className="text-slate-400 text-sm">Net profit per month (in thousands)</p>
      </div>

      <div className="h-64 flex items-end justify-between space-x-2 mb-4">
        {profits.map((profit, index) => {
          const height = (profit / maxProfit) * 100;
          return (
            <div key={index} className="flex-1 flex flex-col items-center group">
              <div className="w-full relative">
                <div
                  className="w-full bg-gradient-to-t from-cyan-500 to-blue-600 rounded-t-lg transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 cursor-pointer relative overflow-hidden"
                  style={{ height: `${height * 2}px` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/20" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-white/10 to-white/30" />
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  ${profit}K
                </div>
              </div>
              <span className="text-xs text-slate-500 mt-2">{months[index]}</span>
            </div>
          );
        })}
      </div>

      <div className="pt-4 border-t border-slate-700/50 grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-slate-400 mb-1">Highest</p>
          <p className="text-lg font-semibold text-emerald-400">$185K</p>
        </div>
        <div>
          <p className="text-xs text-slate-400 mb-1">Average</p>
          <p className="text-lg font-semibold text-white">$128K</p>
        </div>
        <div>
          <p className="text-xs text-slate-400 mb-1">Total</p>
          <p className="text-lg font-semibold text-white">$1.54M</p>
        </div>
      </div>
    </div>
  );
}
