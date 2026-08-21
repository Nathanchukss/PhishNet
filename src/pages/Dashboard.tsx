import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, Filter } from 'lucide-react'
import StatsOverview from '../components/dashboard/StatsOverview'
import CampaignCard from '../components/dashboard/CampaignCard'
import type { Campaign } from '../lib/supabase'

type CampaignWithStats = Campaign & { sent: number; clicked: number; reported: number }

const MOCK_CAMPAIGNS: CampaignWithStats[] = [
  {
    id: '1',
    org_id: 'org1',
    name: 'Q3 IT Reset Simulation',
    sender_name: 'IT Support',
    sender_email: 'it-support@company-secure.net',
    subject: 'URGENT: Your password expires in 24 hours',
    body: '',
    status: 'completed',
    created_at: '2026-07-15T10:00:00Z',
    sent: 120,
    clicked: 34,
    reported: 76,
  },
  {
    id: '2',
    org_id: 'org1',
    name: 'Invoice Phishing Test',
    sender_name: 'Accounts Payable',
    sender_email: 'billing@invoicing-portal.com',
    subject: 'Action Required: Invoice #4892 overdue',
    body: '',
    status: 'sent',
    created_at: '2026-08-01T09:00:00Z',
    sent: 85,
    clicked: 18,
    reported: 51,
  },
  {
    id: '3',
    org_id: 'org1',
    name: 'HR Benefits Simulation',
    sender_name: 'HR Department',
    sender_email: 'hr-benefits@hrportal-update.net',
    subject: 'Update your benefits before open enrollment closes',
    body: '',
    status: 'draft',
    created_at: '2026-08-18T14:00:00Z',
    sent: 0,
    clicked: 0,
    reported: 0,
  },
]

export default function Dashboard() {
  useEffect(() => {
    document.title = 'Dashboard — PhishNet'
  }, [])

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<'all' | Campaign['status']>('all')

  const totalSent = MOCK_CAMPAIGNS.reduce((s, c) => s + c.sent, 0)
  const totalClicked = MOCK_CAMPAIGNS.reduce((s, c) => s + c.clicked, 0)
  const totalReported = MOCK_CAMPAIGNS.reduce((s, c) => s + c.reported, 0)

  const filtered = MOCK_CAMPAIGNS.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === 'all' || c.status === filter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black text-white">Dashboard</h1>
            <p className="text-slate-400 mt-1 text-sm">Track your phishing awareness campaigns</p>
          </div>
          <Link to="/campaigns/new" className="btn-primary">
            <Plus size={17} /> New Campaign
          </Link>
        </div>

        {/* Stats */}
        <div className="mb-10">
          <StatsOverview
            totalSent={totalSent}
            totalClicked={totalClicked}
            totalReported={totalReported}
          />
        </div>

        {/* Campaigns */}
        <div>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                className="input pl-9"
                placeholder="Search campaigns…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={15} className="text-slate-500 flex-shrink-0" />
              {(['all', 'draft', 'sent', 'completed'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium capitalize transition-colors min-h-[36px] ${
                    filter === f
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="card text-center py-16">
              <p className="text-slate-500 mb-4">No campaigns found</p>
              <Link to="/campaigns/new" className="btn-primary inline-flex">
                <Plus size={16} /> Create your first campaign
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((campaign) => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
