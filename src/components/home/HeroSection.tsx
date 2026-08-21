import { Link } from 'react-router-dom'
import { ArrowRight, Play, ShieldCheck, AlertTriangle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-up">
          <ShieldCheck size={14} />
          Security Awareness Training Platform
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none mb-6 animate-fade-up animate-delay-100">
          Train Your Team.
          <br />
          <span className="gradient-text">Stop Phishing Attacks.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 animate-fade-up animate-delay-200">
          Simulate real-world phishing attacks, educate employees who fall for them, and reward those who report suspicious emails — all from one powerful dashboard.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-300">
          <Link to="/campaigns/new" className="btn-primary text-base px-8 py-4">
            Launch a Campaign
            <ArrowRight size={18} />
          </Link>
          <Link to="/about" className="btn-secondary text-base px-8 py-4">
            <Play size={16} className="text-blue-400" />
            See How It Works
          </Link>
        </div>

        {/* Floating email mockup */}
        <div className="relative mt-20 animate-fade-up animate-delay-400">
          <div className="max-w-2xl mx-auto glass rounded-2xl p-1 shadow-2xl shadow-slate-950">
            <div className="bg-slate-900 rounded-xl overflow-hidden">
              {/* Email header bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-800/40">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-4 h-6 rounded-md bg-slate-700/60 flex items-center px-3">
                  <span className="text-xs text-slate-500">Inbox — Outlook</span>
                </div>
              </div>

              {/* Fake phishing email */}
              <div className="p-4 sm:p-6 text-left">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 border border-red-600/30">
                    <span className="text-xs font-bold text-red-400">IT</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-slate-200">IT Department</span>
                      <span className="text-xs text-slate-600 font-mono truncate max-w-[180px] sm:max-w-none">it-support@company-secure.net</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/15 border border-red-500/20 text-red-400 flex items-center gap-1">
                        <AlertTriangle size={10} />
                        Suspicious
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">To: you@company.com · Just now</p>
                  </div>
                </div>
                <h3 className="font-semibold text-slate-200 mb-2 text-sm sm:text-base">
                  ⚠️ URGENT: Your account will be suspended in 24 hours
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  We detected unusual sign-in activity on your account. Please verify your credentials immediately...
                </p>
                <div className="flex flex-col xs:flex-row flex-wrap gap-2">
                  <button className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-500 transition-colors text-center">
                    Verify Account Now →
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-600 transition-colors border border-slate-600 text-center">
                    Report Suspicious Email
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -left-4 top-8 glass rounded-xl px-4 py-3 hidden lg:flex items-center gap-2.5 shadow-lg">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <ShieldCheck size={16} className="text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-200">Reported!</p>
              <p className="text-[10px] text-slate-500">+50 security points</p>
            </div>
          </div>

          <div className="absolute -right-4 bottom-8 glass rounded-xl px-4 py-3 hidden lg:flex items-center gap-2.5 shadow-lg">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <AlertTriangle size={16} className="text-blue-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-200">3 Red Flags Found</p>
              <p className="text-[10px] text-slate-500">Training delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
