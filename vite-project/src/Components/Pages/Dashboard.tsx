import { GraduationCap, Shield, Building2 } from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Line,
  Legend,
  Area,
  AreaChart,
} from 'recharts'

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Students',
      value: 4,
      icon: <GraduationCap className="text-blue-600" size={26} />,
      color: 'bg-blue-100',
    },
    {
      title: 'Total Admins',
      value: 2,
      icon: <Shield className="text-green-600" size={26} />,
      color: 'bg-green-100',
    },
    {
      title: 'Total Centers',
      value: 1,
      icon: <Building2 className="text-purple-600" size={26} />,
      color: 'bg-purple-100',
    },
  ]
  const weeklySales = [
    { week: '18/2023', sales: 1.7 },
    { week: '19/2023', sales: 2.0 },
    { week: '20/2023', sales: 2.0 },
    { week: '21/2023', sales: 1.0 },
    { week: '22/2023', sales: 1.0 },
  ]
  const totalSalesTrend = [
    { date: '1/1', netSales: 1.2, returns: 0.1, discounts: 0.05 },
    { date: '1/8', netSales: 0.9, returns: 0.09, discounts: 0.03 },
    { date: '1/15', netSales: 1.5, returns: 0.12, discounts: 0.05 },
    { date: '1/22', netSales: 1.1, returns: 0.08, discounts: 0.04 },
    { date: '1/29', netSales: 1.8, returns: 0.1, discounts: 0.05 },
    { date: '2/5', netSales: 1.3, returns: 0.1, discounts: 0.04 },
    { date: '2/12', netSales: 1.6, returns: 0.12, discounts: 0.05 },
  ]

  return (
    <div className="min-h-screen bg-transparent px-4 sm:px-6 py-12 animate-fade-in text-white/90">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Dashboard Overview
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {stats.map((item, i) => (
          <div
            key={i}
            className="glass-panel p-6 flex flex-col justify-between animate-slide-up"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="flex items-center justify-between">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center p-3
                ${i === 0
                    ? 'bg-blue-500/10 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                    : i === 1
                      ? 'bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                      : 'bg-purple-500/10 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  }`}
              >
                {item.icon}
              </div>
              <span className="text-xs font-semibold bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
                Active
              </span>
            </div>
            <div className="mt-8">
              <p className="text-sm font-medium text-white/60 mb-1">{item.title}</p>
              <h2 className="text-4xl font-bold text-white tracking-tight">
                {item.value}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold text-white/90 mb-6 drop-shadow-sm">System Analytics</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-panel p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-md font-medium text-white/80 mb-6">Weekly Acceptances</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklySales}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="week" stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.6)' }} axisLine={false} tickLine={false} />
              <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.6)' }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Bar dataKey="sales" fill="#3B82F6" radius={[6, 6, 0, 0]} barSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="glass-panel p-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-md font-medium text-white/80 mb-6">Reception Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={totalSalesTrend}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="date" stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.6)' }} axisLine={false} tickLine={false} />
              <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.6)' }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Area
                type="monotone"
                dataKey="netSales"
                stroke="#8b5cf6"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorSales)"
              />
              <Line type="monotone" dataKey="returns" stroke="#ef4444" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="discounts" stroke="#f97316" strokeWidth={2} dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
