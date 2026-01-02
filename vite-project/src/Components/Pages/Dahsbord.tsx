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
    <div className="min-h-screen from-gray-50 to-gray-100 px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
  {stats.map((item, i) => (
    <div
      key={i}
      className="relative bg-linear-to-br from-emerald-600 to-green-700 text-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 p-6 flex flex-col justify-between border border-green-500/20"
    >
      <div className="flex items-center justify-between">
        <div
          className={`w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-inner`}
        >
          {item.icon}
        </div>
        <span className="text-sm font-semibold bg-white/10 px-3 py-1 rounded-full">
          Active
        </span>
      </div>
      <div className="mt-6">
        <p className="text-sm font-medium text-white/80">{item.title}</p>
        <h2 className="text-4xl font-bold text-white mt-1 drop-shadow-sm">
          {item.value}
        </h2>
      </div>

      <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ${
            i === 0
              ? 'bg-blue-400 w-4/5'
              : i === 1
              ? 'bg-green-300 w-3/5'
              : 'bg-purple-300 w-3/4'
          } rounded-full`}
        ></div>
      </div>

      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 shadow-[0_0_20px_rgba(16,185,129,0.3)]"></div>
    </div>
  ))}
</div>

      <h2 className="text-xl font-semibold text-gray-800 mb-6">Our Total</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-md font-semibold text-gray-700 mb-4">New week of acceptance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklySales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#3B82F6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-md font-semibold text-gray-700 mb-4">
            The week before the reception
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={totalSalesTrend}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="netSales"
                stroke="#3B82F6"
                fillOpacity={1}
                fill="url(#colorSales)"
              />
              <Line type="monotone" dataKey="returns" stroke="#EF4444" />
              <Line type="monotone" dataKey="discounts" stroke="#F97316" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
