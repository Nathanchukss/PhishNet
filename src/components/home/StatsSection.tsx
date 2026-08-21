import { TrendingUp, Users, ShieldCheck, AlertTriangle } from 'lucide-react'

const STATS = [
  { icon: AlertTriangle, value: '91%', label: 'of cyberattacks start with phishing', color: 'text-red-400' },
  { icon: Users, value: '3.4B', label: 'phishing emails sent every day', color: 'text-orange-400' },
  { icon: TrendingUp, value: '72%', label: 'reduction in click rate after training', color: 'text-emerald-400' },
  { icon: ShieldCheck, value: '5×', label: 'more likely to report after awareness training', color: 'text-emerald-400' },
]

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{borderTop:'1px solid #2a2a38', borderBottom:'1px solid #2a2a38', background:'rgba(26,26,34,0.3)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">By the numbers</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Why phishing training matters
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="card text-center group card-hover">
                <Icon size={24} className={`${stat.color} mx-auto mb-4`} />
                <div className={`text-4xl font-black ${stat.color} mb-2`}>{stat.value}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
