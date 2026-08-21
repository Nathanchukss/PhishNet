import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AlertTriangle, CheckCircle, XCircle, Eye, Link2, Clock,
  User, ArrowRight, ShieldCheck, BookOpen
} from 'lucide-react'

const RED_FLAGS = [
  {
    icon: Link2,
    title: 'Suspicious sender domain',
    detail: 'The email appeared to come from "IT Support" but the actual domain was company-secure-portal.net — not your company\'s real domain.',
    severity: 'high',
  },
  {
    icon: Clock,
    title: 'Artificial urgency & pressure',
    detail: '"Your account will be suspended in 24 hours" — this language is designed to make you panic and act before thinking critically.',
    severity: 'high',
  },
  {
    icon: User,
    title: 'Generic, impersonal greeting',
    detail: 'Legitimate internal IT emails address you by name. "Dear Employee" or no name is a classic phishing red flag.',
    severity: 'medium',
  },
  {
    icon: Eye,
    title: 'Link destination mismatch',
    detail: 'Hovering over the "Reset Password" button reveals the URL points to an external site, not your company\'s actual login portal.',
    severity: 'high',
  },
]

const SEVERITY_STYLES = {
  high: { badge: 'bg-red-500/10 text-red-400 border-red-500/20', dot: 'bg-red-500', icon: 'text-red-400' },
  medium: { badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20', dot: 'bg-orange-500', icon: 'text-orange-400' },
}

const TIPS = [
  'Always check the sender\'s full email domain, not just the display name.',
  'Hover over links to preview the URL before clicking.',
  'Legitimate IT departments never ask for credentials via email.',
  'When in doubt, call the sender directly using a known number.',
  'Use the "Report Suspicious Email" button in your email client.',
]

export default function Caught() {
  useEffect(() => {
    document.title = 'Phishing Education — PhishNet'
  }, [])

  const [activeFlag, setActiveFlag] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Top danger banner */}
      <div className="bg-gradient-to-r from-red-900/80 to-red-800/60 border-b border-red-700/50 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <AlertTriangle size={20} className="text-red-400 flex-shrink-0" />
          <p className="text-red-200 text-sm font-medium">
            <span className="font-bold text-white">Security Awareness Alert:</span> You clicked on a simulated phishing email. This is a training exercise — no real harm was done.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-2xl bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center mx-auto mb-6">
            <XCircle size={40} className="text-red-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            You clicked a phishing link.
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Don't worry — this was a practice run. Let's walk through exactly why this email was dangerous.
          </p>
        </div>

        {/* Fake email display with highlights */}
        <div className="card border-slate-700 mb-10">
          <div className="flex items-start sm:items-center gap-2 mb-5 pb-4 border-b border-slate-800 flex-wrap">
            <BookOpen size={16} className="text-blue-400 flex-shrink-0 mt-0.5 sm:mt-0" />
            <h2 className="font-semibold text-white">The phishing email — annotated</h2>
            <span className="w-full sm:w-auto sm:ml-auto text-xs text-slate-500">Tap a red flag below to highlight it</span>
          </div>

          <div className="bg-slate-800/40 rounded-xl p-3 sm:p-5 font-mono text-xs sm:text-sm overflow-x-auto">
            <div className="text-slate-400 space-y-1 mb-4 pb-4 border-b border-slate-700 min-w-0">
              <p className="flex flex-wrap gap-1 items-center">
                <span className="text-slate-600">From: </span>
                <span className={`${activeFlag === 0 ? 'bg-red-500/20 text-red-300 px-1 rounded' : 'text-red-400'} transition-colors break-all`}>
                  IT Support &lt;it-support@company-secure-portal.net&gt;
                </span>
              </p>
              <p><span className="text-slate-600">To: </span><span className="text-slate-300">you@company.com</span></p>
              <p className="flex flex-wrap gap-1">
                <span className="text-slate-600">Subject: </span>
                <span className={`${activeFlag === 1 ? 'bg-orange-500/20 text-orange-300 px-1 rounded' : 'text-slate-300'} transition-colors`}>
                  URGENT: Your password expires in 24 hours
                </span>
              </p>
            </div>
            <div className="text-slate-300 leading-7 space-y-3 whitespace-pre-line">
              <p className={`${activeFlag === 2 ? 'bg-orange-500/20 px-1 rounded' : ''} transition-colors`}>
                Dear Employee,
              </p>
              <p>
                Our system has detected that your account password is about to expire. To avoid losing access to company systems, you must{' '}
                <span className={`${activeFlag === 1 ? 'bg-orange-500/20 px-1 rounded' : ''} transition-colors`}>
                  reset your password immediately.
                </span>
              </p>
              <p>
                Click the link below to verify your identity:{' '}
                <span className={`${activeFlag === 3 ? 'bg-red-500/20 text-red-300 px-1 rounded underline cursor-pointer' : 'text-blue-400 underline cursor-pointer'} transition-colors`}>
                  [RESET MY PASSWORD NOW →]
                </span>
              </p>
              <p className={`${activeFlag === 1 ? 'bg-orange-500/20 px-1 rounded' : ''} transition-colors`}>
                This link expires in 24 hours. If you do not act, your account will be locked.
              </p>
            </div>
          </div>
        </div>

        {/* Red flags */}
        <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
          <AlertTriangle size={18} className="text-red-400" />
          {RED_FLAGS.length} red flags in this email
        </h2>
        <div className="space-y-3 mb-12">
          {RED_FLAGS.map((flag, i) => {
            const Icon = flag.icon
            const styles = SEVERITY_STYLES[flag.severity as keyof typeof SEVERITY_STYLES]
            const isActive = activeFlag === i
            return (
              <button
                key={i}
                onClick={() => setActiveFlag(isActive ? null : i)}
                className={`w-full card text-left transition-all ${isActive ? 'border-blue-500 bg-blue-500/5' : 'card-hover'}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${styles.badge} border`}>
                    <Icon size={17} className={styles.icon} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-white text-sm">{flag.title}</h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase ${styles.badge}`}>
                        {flag.severity}
                      </span>
                    </div>
                    {isActive && (
                      <p className="text-slate-400 text-sm mt-2 leading-relaxed">{flag.detail}</p>
                    )}
                  </div>
                  <CheckCircle size={15} className={`flex-shrink-0 transition-opacity ${isActive ? 'text-blue-400 opacity-100' : 'opacity-0'}`} />
                </div>
              </button>
            )
          })}
        </div>

        {/* Tips */}
        <div className="card border-blue-500/20 bg-blue-500/5 mb-10">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <ShieldCheck size={18} className="text-blue-400" />
            How to protect yourself in the future
          </h3>
          <ul className="space-y-3">
            {TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-500 text-sm mb-4">
            This training simulation was powered by
          </p>
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <img src="/logo.svg" alt="PhishNet" className="w-6 h-6 rounded-md" />
            <span className="font-bold text-white">Phish<span className="text-blue-400">Net</span></span>
          </Link>
          <p className="text-slate-400 text-sm">
            Well done for completing this training. You'll be more prepared next time.
          </p>
        </div>
      </div>
    </div>
  )
}
