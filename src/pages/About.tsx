import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Shield, Eye, BookOpen, Target, ArrowRight,
  TrendingDown, DollarSign, Users, AlertTriangle, CheckCircle, Zap,
} from 'lucide-react'

const THREAT_STATS = [
  {
    value: '3.4B',
    label: 'Phishing emails sent every single day',
    source: 'AAG IT, 2025',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    icon: AlertTriangle,
  },
  {
    value: '91%',
    label: 'Of all cyberattacks start with a phishing email',
    source: 'StationX, 2026',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    icon: Zap,
  },
  {
    value: '$4.88M',
    label: 'Average cost of a single phishing-related breach',
    source: 'IBM Security, 2025',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    icon: DollarSign,
  },
  {
    value: '$17.4B',
    label: 'Total global financial losses from phishing in 2024',
    source: 'GetAstra, 2026',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    icon: TrendingDown,
  },
]

const TRAINING_STATS = [
  {
    before: '33.1%',
    after: '4.1%',
    label: 'Phishing click rate',
    desc: 'Before vs. after 12 months of continuous simulation-based training',
    highlight: '86% reduction',
    source: 'KnowBe4 Phishing by Industry Benchmarking Report, 2025 — based on 67.7M simulations across 14.5M users at 62,400 organizations',
  },
  {
    before: '33%',
    after: '~5%',
    label: 'Phishing susceptibility',
    desc: 'Untrained employees vs. those enrolled in behavior-based training programs',
    highlight: '85%+ improvement',
    source: 'Brightside AI Security Awareness Training Statistics, 2025',
  },
]

const MISSION_POINTS = [
  {
    icon: Eye,
    title: 'Make the invisible visible',
    desc: 'Phishing emails are designed to look legitimate. We train employees to spot the subtle signs — spoofed domains, urgency tactics, mismatched links — before they click.',
  },
  {
    icon: BookOpen,
    title: 'Education at the moment that matters',
    desc: 'Traditional annual training is forgettable. PhishNet delivers targeted education at the exact moment an employee falls for a simulation — when the lesson is most impactful.',
  },
  {
    icon: Target,
    title: 'Reward vigilance, not just compliance',
    desc: 'Employees who correctly report suspicious emails get instant positive reinforcement. We build a culture where security is something people want to participate in.',
  },
  {
    icon: Shield,
    title: 'Measure real behavior change',
    desc: 'We track click rates and report rates over time across departments, so you can see exactly where your human firewall is strongest — and where it needs more work.',
  },
]

const APPROACH_STEPS = [
  {
    number: '01',
    title: 'Simulate',
    desc: 'Send realistic phishing scenarios crafted to match the tactics attackers actually use: fake IT alerts, invoice scams, executive impersonation.',
  },
  {
    number: '02',
    title: 'Catch & Educate',
    desc: 'When an employee clicks, they immediately see a detailed breakdown of every red flag in the email — turning a mistake into a lasting lesson.',
  },
  {
    number: '03',
    title: 'Reward & Reinforce',
    desc: 'Employees who report the simulation get instant positive recognition. Small wins build strong instincts over time.',
  },
  {
    number: '04',
    title: 'Measure & Improve',
    desc: "Analytics track your organization's click rate and report rate over time. Watch your human firewall strengthen with every campaign.",
  },
]

export default function About() {
  useEffect(() => {
    document.title = 'About — PhishNet'
  }, [])

  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <img src="/logo.svg" alt="PhishNet" className="w-20 h-20 rounded-2xl shadow-2xl shadow-blue-900/50" />
          </div>
          <span className="section-tag mb-5">About PhishNet</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mt-4 mb-6 leading-tight">
            Your people are your
            <br />
            <span className="gradient-text">last line of defence.</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Firewalls block machines. PhishNet trains humans. We build a
            <strong className="text-white"> human firewall</strong> — an organization of people who
            recognize, resist, and report phishing attacks before they cause damage.
          </p>
        </div>
      </section>

      {/* Threat landscape */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">The threat is real</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-4">
              Phishing is the #1 cyber threat facing organizations today
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              These aren't theoretical risks. Every business — regardless of size or industry — is a target.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {THREAT_STATS.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.value} className={`card border ${stat.border} text-center group card-hover`}>
                  <div className={`w-11 h-11 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center mx-auto mb-4`}>
                    <Icon size={20} className={stat.color} />
                  </div>
                  <p className={`text-4xl font-black ${stat.color} mb-3`}>{stat.value}</p>
                  <p className="text-slate-300 text-sm font-medium leading-snug mb-3">{stat.label}</p>
                  <p className="text-xs text-slate-600 italic">{stat.source}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Training effectiveness */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">The evidence</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-4">
              Training works. The data proves it.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              KnowBe4's 2025 Phishing by Industry Benchmarking Report — the largest study of its kind,
              covering <strong className="text-slate-300">67.7 million phishing simulations</strong> across
              14.5 million users at 62,400 organizations — confirms that security awareness training
              is one of the most effective defences against phishing attacks.
            </p>
          </div>

          {/* Before/After comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {TRAINING_STATS.map((stat) => (
              <div key={stat.label} className="card border-slate-700">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-5">{stat.label}</p>
                <div className="flex items-center gap-3 sm:gap-4 mb-5">
                  <div className="flex-1 bg-slate-800/60 rounded-xl p-3 sm:p-4 text-center border border-red-500/10">
                    <p className="text-2xl sm:text-3xl font-black text-red-400 mb-1">{stat.before}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Untrained</p>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <ArrowRight size={18} className="text-blue-500" />
                    <span className="text-[10px] text-blue-400 font-bold text-center leading-tight w-16">{stat.highlight}</span>
                  </div>
                  <div className="flex-1 bg-slate-800/60 rounded-xl p-3 sm:p-4 text-center border border-emerald-500/10">
                    <p className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">{stat.after}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">After Training</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">{stat.desc}</p>
                <p className="text-[11px] text-slate-600 italic leading-relaxed">{stat.source}</p>
              </div>
            ))}
          </div>

          {/* Big callout */}
          <div className="card border-blue-500/20 bg-blue-500/5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-shrink-0">
                <Users size={36} className="text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-lg mb-2">
                  1 in 3 untrained employees will click a phishing link.
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The global average Phish-prone Percentage sits at <strong className="text-white">33.1%</strong> for
                  organizations without awareness training — meaning one third of your workforce is one click
                  away from a breach. After just <strong className="text-white">90 days</strong> of simulation-based
                  training that number drops by <strong className="text-white">40%</strong>. After
                  <strong className="text-white"> 12 months</strong>, it falls to just <strong className="text-emerald-400">4.1%</strong>.
                </p>
              </div>
              <div className="text-center flex-shrink-0 bg-slate-800/60 rounded-2xl p-4 min-w-[100px]">
                <p className="text-4xl sm:text-5xl font-black text-emerald-400">8.8×</p>
                <p className="text-xs text-slate-500 mt-1 leading-tight">more likely to click if untrained</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Our Mission</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-4">
              Why we built <span className="gradient-text">PhishNet</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Technology alone can't stop phishing. Attackers are social engineers — they exploit
              human psychology, not software vulnerabilities. The only sustainable defence
              is an educated, vigilant workforce.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {MISSION_POINTS.map((point) => {
              const Icon = point.icon
              return (
                <div key={point.title} className="card card-hover group">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">{point.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">How It Works</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-4">
              A four-step cycle that builds lasting habits
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              One training session doesn't change behaviour. PhishNet is designed as a continuous
              cycle that reinforces good instincts every time it runs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPROACH_STEPS.map((step, i) => (
              <div key={step.number} className="relative card card-hover text-center group">
                {i < APPROACH_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-blue-500/30 z-10" />
                )}
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-5 text-sm font-black text-white shadow-lg shadow-blue-600/30">
                  {step.number}
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="card border-emerald-500/20 bg-emerald-500/5 text-center py-12 px-6 sm:px-12">
            <CheckCircle size={40} className="text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
              Education over punishment.
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Clicking a phishing link doesn't make someone a bad employee — it makes them human.
              PhishNet never shames or penalizes. We deliver clear, calm, immediate education the
              moment it's needed most, turning every mistake into an opportunity to build a
              stronger, smarter human firewall.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {[
                'No blame, only learning',
                'Instant in-context feedback',
                'Positive reinforcement for reporters',
                'Continuous improvement loop',
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-xs sm:text-sm">
                  <CheckCircle size={12} /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <Shield size={40} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to build your human firewall?
          </h2>
          <p className="text-slate-400 mb-8 text-lg max-w-xl mx-auto">
            Launch your first phishing simulation in minutes and start turning your team
            into your strongest security asset.
          </p>
          <div className="flex flex-col xs:flex-row items-center justify-center gap-4">
            <Link to="/campaigns/new" className="btn-primary text-base px-8 py-4 w-full xs:w-auto justify-center">
              Start a Campaign <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-secondary text-base px-8 py-4 w-full xs:w-auto justify-center">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
