import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Eye, BookOpen, Target, ArrowRight, AlertTriangle } from 'lucide-react'

const MISSION_POINTS = [
  {
    icon: Eye,
    title: 'Awareness First',
    desc: 'Most breaches happen because employees don\'t recognize threats. We change that with realistic simulations.',
  },
  {
    icon: BookOpen,
    title: 'Education Over Punishment',
    desc: 'Clicking a phishing link is a learning moment, not a failure. We deliver instant, helpful education — not shame.',
  },
  {
    icon: Target,
    title: 'Behavior Change',
    desc: 'We measure real behavior change: fewer clicks, more reports, stronger instincts across your entire organization.',
  },
]

const RED_FLAGS = [
  { flag: 'Sender domain mismatch', desc: 'The email appears to be from your IT dept but the actual domain is company-secure-login.net — not company.com.' },
  { flag: 'Urgency & pressure tactics', desc: 'Phrases like "your account will be suspended in 24 hours" are designed to make you act without thinking.' },
  { flag: 'Generic greeting', desc: 'Legitimate internal emails use your name. "Dear User" or no greeting is a red flag.' },
  { flag: 'Suspicious link URL', desc: 'Hovering over the link reveals it points to a completely different domain than shown.' },
  { flag: 'Unusual request', desc: 'IT departments never ask you to click a link to verify credentials. They\'d contact you directly.' },
]

export default function About() {
  useEffect(() => {
    document.title = 'About — PhishNet'
  }, [])

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <img src="/logo.svg" alt="PhishNet" className="w-20 h-20 rounded-2xl shadow-2xl shadow-blue-900/50" />
          </div>
          <span className="section-tag mb-4">About PhishNet</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mt-4 mb-6">
            Building a <span className="gradient-text">human firewall</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            PhishNet is a security awareness training platform that helps organizations reduce phishing risk through realistic simulations and instant education.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">Our Mission</span>
              <h2 className="text-4xl font-bold text-white mt-4 mb-6">
                Security awareness that actually works
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Traditional security training is boring, forgettable, and doesn't change behavior. PhishNet takes a different approach — we put employees in realistic situations and give them immediate, actionable feedback when they need it most.
              </p>
              <div className="space-y-6">
                {MISSION_POINTS.map((point) => {
                  const Icon = point.icon
                  return (
                    <div key={point.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{point.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="card border-slate-700">
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle size={18} className="text-red-400" />
                <h3 className="font-semibold text-white">What we teach employees to spot</h3>
              </div>
              <div className="space-y-4">
                {RED_FLAGS.map((item, i) => (
                  <div key={item.flag} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] font-bold text-red-400">{i + 1}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-200">{item.flag}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <Shield size={40} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to start training your team?
          </h2>
          <p className="text-slate-400 mb-8">
            Launch your first simulation in under 5 minutes.
          </p>
          <Link to="/campaigns/new" className="btn-primary text-base px-8 py-4">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
