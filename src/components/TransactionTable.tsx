import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function TransactionTable() {
  const transactions = [
    { date: '2025-10-28', description: 'Subscription Payment', category: 'Revenue', amount: 2499, type: 'income' },
    { date: '2025-10-28', description: 'Cloud Infrastructure', category: 'Operations', amount: -845, type: 'expense' },
    { date: '2025-10-27', description: 'Client Project Alpha', category: 'Revenue', amount: 15000, type: 'income' },
    { date: '2025-10-27', description: 'Marketing Campaign', category: 'Marketing', amount: -3200, type: 'expense' },
    { date: '2025-10-26', description: 'Software Licenses', category: 'Technology', amount: -1250, type: 'expense' },
    { date: '2025-10-26', description: 'Consulting Services', category: 'Revenue', amount: 8500, type: 'income' },
    { date: '2025-10-25', description: 'Office Supplies', category: 'Operations', amount: -420, type: 'expense' },
    { date: '2025-10-25', description: 'Product Sales', category: 'Revenue', amount: 5680, type: 'income' },
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white mb-1">Recent Transactions</h2>
          <p className="text-slate-400 text-sm">Latest financial activities</p>
        </div>
        <button className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg text-sm font-medium transition-colors">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700/50">
              <th className="text-left py-3 px-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Date</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Description</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Category</th>
              <th className="text-right py-3 px-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/30">
            {transactions.map((transaction, index) => (
              <tr key={index} className="hover:bg-slate-700/20 transition-colors group">
                <td className="py-4 px-4">
                  <span className="text-sm text-slate-300">{transaction.date}</span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      transaction.type === 'income'
                        ? 'bg-emerald-500/20 group-hover:bg-emerald-500/30'
                        : 'bg-red-500/20 group-hover:bg-red-500/30'
                    } transition-colors`}>
                      {transaction.type === 'income' ? (
                        <ArrowDownRight className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-red-400" />
                      )}
                    </div>
                    <span className="text-sm text-white font-medium">{transaction.description}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs">
                    {transaction.category}
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <span className={`text-sm font-semibold ${
                    transaction.type === 'income' ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {transaction.type === 'income' ? '+' : ''}{transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
