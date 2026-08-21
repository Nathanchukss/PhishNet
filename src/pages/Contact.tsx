import { useEffect, useState } from 'react'
import { Mail, MessageSquare, User, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — PhishNet'
  }, [])

  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-tag">Get in touch</span>
            <h1 className="text-5xl font-black text-white mt-4 mb-5">
              Contact <span className="gradient-text">PhishNet</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Have questions about running a security awareness program? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              {[
                {
                  icon: Mail,
                  title: 'Email Us',
                  value: 'hello@phishnet.io',
                  desc: 'We reply within 24 hours',
                },
                {
                  icon: MessageSquare,
                  title: 'Live Chat',
                  value: 'Available in dashboard',
                  desc: 'Mon–Fri, 9am–6pm EST',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="card flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                      <p className="text-blue-400 text-sm font-medium mt-0.5">{item.value}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                )
              })}

              <div className="card">
                <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <User size={16} className="text-blue-400" />
                  Common questions
                </h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  {[
                    'How do I import employees?',
                    'Is real data ever collected?',
                    'Can I customize phishing templates?',
                    'How do I read my analytics?',
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">›</span> {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="card h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">Message Sent!</h2>
                  <p className="text-slate-400 max-w-sm">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label">Full Name</label>
                      <input
                        className="input"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        required
                      />
                    </div>
                    <div>
                      <label className="label">Work Email</label>
                      <input
                        className="input"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label">Subject</label>
                    <select
                      className="input"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a topic…</option>
                      <option>Getting started</option>
                      <option>Technical support</option>
                      <option>Billing question</option>
                      <option>Enterprise inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">Message</label>
                    <textarea
                      className="input min-h-[140px] resize-none"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help…"
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
