import { Mail, BookOpen, Bell, BarChart3, Shield, Users } from 'lucide-react'

const FEATURES = [
  {
    icon: Mail,
    color: 'blue',
    title: 'Realistic Email Simulations',
    description:
      'Send convincing phishing emails from pre-built templates — fake IT alerts, HR notices, invoice scams, and more.',
  },
  {
    icon: BookOpen,
    color: 'purple',
    title: 'Instant Education',
    description:
      'When an employee clicks a phishing link, they immediately see a detailed breakdown of every red flag in the email.',
  },
  {
    icon: Bell,
    color: 'emerald',
    title: 'Report & Reward',
    description:
      'Employees who report suspicious emails get instant positive reinforcement — building a culture of security vigilance.',
  },
  {
    icon: BarChart3,
    color: 'orange',
    title: 'Detailed Analytics',
    description:
      'Track click rates, report rates, and progress over time. Identify your most vulnerable teams and target training.',
  },
  {
    icon: Users,
    color: 'pink',
    title: 'Team Management',
    description:
      'Import employees via CSV, organize by department, and run targeted campaigns for specific groups.',
  },
  {
    icon: Shield,
    color: 'cyan',
    title: 'Safe & Authorized',
    description:
      'Built for authorized security awareness programs. No real credentials are ever collected or stored.',
  },
]

const COLOR_MAP = {
  blue:   { bg: 'bg-blue-500/10',   border: 'border-blue-500/20',   icon: 'text-blue-400',   glow: 'group-hover:shadow-blue-500/10' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', icon: 'text-purple-400', glow: 'group-hover:shadow-purple-500/10' },
  emerald:{ bg: 'bg-emerald-500/10',border: 'border-emerald-500/20',icon: 'text-emerald-400',glow: 'group-hover:shadow-emerald-500/10' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', icon: 'text-orange-400', glow: 'group-hover:shadow-orange-500/10' },
  pink:   { bg: 'bg-pink-500/10',   border: 'border-pink-500/20',   icon: 'text-pink-400',   glow: 'group-hover:shadow-pink-500/10' },
  cyan:   { bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20',   icon: 'text-cyan-400',   glow: 'group-hover:shadow-cyan-500/10' },
}

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag mb-4">Features</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-5">
            Everything you need to build a
            <span className="gradient-text"> human firewall</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A complete security awareness training platform designed to change behavior, not just check a compliance box.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            const colors = COLOR_MAP[feature.color as keyof typeof COLOR_MAP]
            return (
              <div
                key={feature.title}
                className={`card card-hover group cursor-default hover:shadow-xl ${colors.glow}`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={colors.icon} />
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
