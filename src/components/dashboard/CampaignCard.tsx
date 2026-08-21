import { Link } from 'react-router-dom'
import { Mail, BarChart2, ChevronRight, Clock, CheckCircle, Send } from 'lucide-react'
import { cn } from '../../lib/utils'
import type { Campaign } from '../../lib/supabase'

type Props = {
  campaign: Campaign & {
    sent: number
    clicked: number
    reported: number
  }
}

const STATUS_CONFIG = {
  draft: { label: 'Draft', color: 'text-slate-400', bg: 'bg-slate-700/40', icon: Clock },
  sent: { label: 'Active', color: 'text-blue-400', bg: 'bg-blue-500/10', icon: Send },
  completed: { label: 'Completed', color: 'text-emerald-400', bg: 'bg-emerald-500/10', icon: CheckCircle },
}

export default function CampaignCard({ campaign }: Props) {
  const config = STATUS_CONFIG[campaign.status]
  const StatusIcon = config.icon
  const clickRate = campaign.sent > 0 ? Math.round((campaign.clicked / campaign.sent) * 100) : 0
  const reportRate = campaign.sent > 0 ? Math.round((campaign.reported / campaign.sent) * 100) : 0

  return (
    <Link
      to={`/campaigns/${campaign.id}`}
      className="card card-hover block group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <Mail size={18} className="text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
              {campaign.name}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">{campaign.subject}</p>
          </div>
        </div>
        <span className={cn('flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full', config.color, config.bg)}>
          <StatusIcon size={11} />
          {config.label}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-slate-800/50 rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-white">{campaign.sent}</p>
          <p className="text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">Sent</p>
        </div>
        <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-red-400">{clickRate}%</p>
          <p className="text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">Clicked</p>
        </div>
        <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-emerald-400">{reportRate}%</p>
          <p className="text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">Reported</p>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <BarChart2 size={12} />
          {new Date(campaign.created_at).toLocaleDateString()}
        </span>
        <span className="flex items-center gap-1 text-blue-400 group-hover:gap-2 transition-all">
          View details <ChevronRight size={13} />
        </span>
      </div>
    </Link>
  )
}
