import { Mail, MousePointerClick, Flag, TrendingDown } from 'lucide-react'

type Props = {
  totalSent: number
  totalClicked: number
  totalReported: number
}

export default function StatsOverview({ totalSent, totalClicked, totalReported }: Props) {
  const clickRate = totalSent > 0 ? ((totalClicked / totalSent) * 100).toFixed(1) : '0'
  const reportRate = totalSent > 0 ? ((totalReported / totalSent) * 100).toFixed(1) : '0'

  const cards = [
    {
      icon: Mail,
      label: 'Emails Sent',
      value: totalSent.toLocaleString(),
      sub: 'Total simulations',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
    },
    {
      icon: MousePointerClick,
      label: 'Click Rate',
      value: `${clickRate}%`,
      sub: `${totalClicked} employees clicked`,
      color: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500/20',
    },
    {
      icon: Flag,
      label: 'Report Rate',
      value: `${reportRate}%`,
      sub: `${totalReported} employees reported`,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
    },
    {
      icon: TrendingDown,
      label: 'Risk Score',
      value: clickRate > '30' ? 'High' : clickRate > '15' ? 'Medium' : 'Low',
      sub: 'Based on click rate',
      color: Number(clickRate) > 30 ? 'text-red-400' : Number(clickRate) > 15 ? 'text-orange-400' : 'text-emerald-400',
      bg: Number(clickRate) > 30 ? 'bg-red-500/10' : Number(clickRate) > 15 ? 'bg-orange-500/10' : 'bg-emerald-500/10',
      border: Number(clickRate) > 30 ? 'border-red-500/20' : Number(clickRate) > 15 ? 'border-orange-500/20' : 'border-emerald-500/20',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => {
        const Icon = card.icon
        return (
          <div key={card.label} className={`card border ${card.border}`}>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-slate-400 font-medium">{card.label}</p>
              <div className={`w-8 h-8 rounded-lg ${card.bg} flex items-center justify-center`}>
                <Icon size={16} className={card.color} />
              </div>
            </div>
            <p className={`text-3xl font-black ${card.color} mb-1`}>{card.value}</p>
            <p className="text-xs text-slate-500">{card.sub}</p>
          </div>
        )
      })}
    </div>
  )
}
