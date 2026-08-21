import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import HeroSection from '../components/home/HeroSection'
import FeaturesSection from '../components/home/FeaturesSection'
import StatsSection from '../components/home/StatsSection'

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Create a Campaign',
    desc: 'Choose from realistic phishing templates or build your own. Customize the sender, subject, and body.',
  },
  {
    step: '02',
    title: 'Send to Your Team',
    desc: 'Select which employees or departments to target and launch the simulation safely.',
  },
  {
    step: '03',
    title: 'Educate or Reward',
    desc: 'Clickers get instant education on red flags. Reporters get a "You Passed!" congratulations.',
  },
]

export default function Home() {
  useEffect(() => {
    document.title = 'PhishNet — Phishing Awareness Training'
  }, [])

  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />

      {/* How it works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-tag">Simple Process</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-5">
              How <span className="gradient-text">PhishNet</span> works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-px bg-gradient-to-r from-blue-500/30 via-blue-500/60 to-blue-500/30" />

            {HOW_IT_WORKS.map((item, i) => (
              <div key={item.step} className="relative card text-center group card-hover">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-5 text-sm font-black text-white shadow-lg shadow-blue-600/30">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 sm:p-12 text-center shadow-2xl shadow-blue-900/50">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="relative">
              <img src="/logo.svg" alt="PhishNet" className="w-14 h-14 mx-auto mb-6 rounded-2xl shadow-xl" />
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Ready to protect your organization?
              </h2>
              <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto">
                Start your first phishing simulation in minutes. No credit card required.
              </p>
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 sm:gap-4">
                <Link
                  to="/campaigns/new"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-base hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Start Free Campaign <ArrowRight size={18} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-base hover:bg-white/20 transition-colors border border-white/20"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-blue-100">
                {['No credit card', 'Unlimited campaigns', 'Full analytics'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle size={14} /> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
