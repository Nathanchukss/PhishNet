import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Mail, MousePointerClick, Flag, Users } from 'lucide-react'

const MOCK_LOGS = [
  { name: 'Alice Johnson', email: 'alice@company.com', dept: 'Engineering', outcome: 'reported' },
  { name: 'Bob Martinez', email: 'bob@company.com', dept: 'Finance', outcome: 'clicked' },
  { name: 'Carol White', email: 'carol@company.com', dept: 'HR', outcome: 'reported' },
  { name: 'David Kim', email: 'david@company.com', dept: 'Marketing', outcome: 'clicked' },
  { name: 'Emma Brown', email: 'emma@company.com', dept: 'Engineering', outcome: 'pending' },
  { name: 'Frank Lee', email: 'frank@company.com', dept: 'Finance', outcome: 'reported' },
]

const OUTCOME_CONFIG = {
  reported: { label: 'Reported', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  clicked: { label: 'Clicked', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
  pending: { label: 'Pending', color: 'text-slate-400', bg: 'bg-slate-700/40', border: 'border-slate-700' },
}

export default function CampaignDetail() {
  const { id } = useParams()

  useEffect(() => {
    document.title = `Campaign — PhishNet`
  }, [])

  const clicked = MOCK_LOGS.filter(l => l.outcome === 'clicked').length
  const reported = MOCK_LOGS.filter(l => l.outcome === 'reported').length
  const total = MOCK_LOGS.length

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 text-sm mb-8 transition-colors">
          <ArrowLeft size={15} /> Back to Dashboard
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-black text-white">Q3 IT Reset Simulation</h1>
            <p className="text-slate-500 text-sm mt-1">Campaign ID: {id}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            Active
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Users, label: 'Total Sent', value: total, color: 'text-blue-400', bg: 'bg-blue-500/10' },
            { icon: MousePointerClick, label: 'Clicked', value: clicked, color: 'text-red-400', bg: 'bg-red-500/10' },
            { icon: Flag, label: 'Reported', value: reported, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
            { icon: Mail, label: 'Pending', value: total - clicked - reported, color: 'text-slate-400', bg: 'bg-slate-700/40' },
          ].map((s) => {
            const Icon = s.icon
            return (
              <div key={s.label} className="card">
                <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
                  <Icon size={17} className={s.color} />
                </div>
                <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </div>
            )
          })}
        </div>

        {/* Progress bar */}
        <div className="card mb-8">
          <h3 className="text-sm font-semibold text-slate-300 mb-4">Response Breakdown</h3>
          <div className="h-3 rounded-full bg-slate-800 overflow-hidden flex">
            <div
              className="bg-emerald-500 transition-all duration-700"
              style={{ width: `${(reported / total) * 100}%` }}
            />
            <div
              className="bg-red-500 transition-all duration-700"
              style={{ width: `${(clicked / total) * 100}%` }}
            />
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Reported ({Math.round((reported/total)*100)}%)</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500 inline-block" /> Clicked ({Math.round((clicked/total)*100)}%)</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-600 inline-block" /> Pending</span>
          </div>
        </div>

        {/* Employee table */}
        <div className="card overflow-hidden !p-0">
          <div className="px-4 sm:px-6 py-4 border-b border-slate-800">
            <h3 className="font-semibold text-white">Employee Results</h3>
          </div>
          <div className="overflow-x-auto -webkit-overflow-scrolling-touch">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/50">
                  {['Employee', 'Email', 'Dept', 'Outcome'].map(h => (
                    <th key={h} className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 sm:px-6 py-3 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MOCK_LOGS.map((log, i) => {
                  const config = OUTCOME_CONFIG[log.outcome as keyof typeof OUTCOME_CONFIG]
                  return (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm font-medium text-slate-200 whitespace-nowrap">{log.name}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs text-slate-500 font-mono whitespace-nowrap">{log.email}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-slate-400 whitespace-nowrap">{log.dept}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap ${config.color} ${config.bg} ${config.border}`}>
                          {config.label}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
