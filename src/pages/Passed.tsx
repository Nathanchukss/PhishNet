import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, Star, ArrowRight, Trophy, CheckCircle } from 'lucide-react'

function Confetti() {
  const count = typeof window !== 'undefined' && window.innerWidth < 640 ? 14 : 28
  const pieces = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 1.5}s`,
    color: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 5)],
    size: `${6 + Math.random() * 8}px`,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 rounded-sm animate-bounce"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animationDelay: p.delay,
            animationDuration: `${1.5 + Math.random()}s`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  )
}

const ACHIEVEMENTS = [
  { icon: ShieldCheck, label: 'Security Aware', desc: 'You spotted a phishing attempt' },
  { icon: Star, label: 'Quick Thinker', desc: 'Reported before clicking' },
  { icon: Trophy, label: 'Team Protector', desc: 'Helping keep the org safe' },
]

export default function Passed() {
  useEffect(() => {
    document.title = 'You Passed! — PhishNet'
  }, [])

  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative px-4 py-12">
      <Confetti />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl w-full text-center">
        {/* Big check */}
        <div className="relative inline-flex mb-8">
          <div className="w-28 h-28 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/40 flex items-center justify-center shadow-2xl shadow-emerald-500/20 animate-bounce-in">
            <ShieldCheck size={56} className="text-emerald-400" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg animate-bounce">
            <Star size={15} className="text-white fill-white" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 animate-fade-up">
          You <span className="text-emerald-400">Passed!</span>
        </h1>
        <p className="text-slate-300 text-lg sm:text-xl mb-2 animate-fade-up animate-delay-100">
          Outstanding! You correctly identified and reported a phishing email.
        </p>
        <p className="text-slate-500 text-sm sm:text-base mb-8 sm:mb-10 animate-fade-up animate-delay-200">
          Your instincts are sharp. This is exactly what keeps organizations safe.
        </p>

        {/* Score card */}
        <div className="card border-emerald-500/20 bg-emerald-500/5 mb-8 animate-fade-up animate-delay-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-slate-300">Phishing Test Result</span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              PASSED ✓
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Response', value: 'Reported', color: 'text-emerald-400' },
              { label: 'Points', value: '+100', color: 'text-blue-400' },
              { label: 'Status', value: 'Protected', color: 'text-emerald-400' },
            ].map(({ label, value, color }) => (
              <div key={label} className="bg-slate-800/60 rounded-xl p-3">
                <p className={`text-lg font-black ${color}`}>{value}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-8 animate-fade-up animate-delay-300">
          {ACHIEVEMENTS.map((a) => {
            const Icon = a.icon
            return (
              <div key={a.label} className="card text-center !p-3 sm:!p-4">
                <Icon size={20} className="text-blue-400 mx-auto mb-1.5 sm:mb-2" />
                <p className="text-[11px] sm:text-xs font-semibold text-white leading-tight">{a.label}</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5 hidden sm:block">{a.desc}</p>
              </div>
            )
          })}
        </div>

        {/* What to remember */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-sm text-blue-400 hover:text-blue-300 underline underline-offset-2 mb-4 transition-colors"
        >
          {showDetails ? 'Hide' : 'What made this a phishing email?'}
        </button>

        {showDetails && (
          <div className="card text-left mb-6 border-slate-700 animate-fade-up">
            <p className="text-sm text-slate-300 font-semibold mb-3">Signs you correctly identified:</p>
            {[
              'Sender domain didn\'t match the company\'s real domain',
              'Subject used urgency and pressure tactics',
              'Email contained a suspicious external link',
              'Generic greeting instead of your actual name',
            ].map((tip) => (
              <div key={tip} className="flex items-start gap-2 mb-2">
                <CheckCircle size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-400">{tip}</p>
              </div>
            ))}
          </div>
        )}

        {/* Footer branding */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2">
            <img src="/logo.svg" alt="PhishNet" className="w-6 h-6 rounded-md" />
            <span className="font-bold text-white text-sm">Phish<span className="text-blue-400">Net</span></span>
          </Link>
          <p className="text-xs text-slate-600">Security Awareness Training Platform</p>
          <Link to="/dashboard" className="btn-secondary text-sm mt-2">
            Back to Dashboard <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
