import { useEffect, useState } from 'react'
import { Mail, MessageSquare, Send, CheckCircle, Loader2, Github, Linkedin, AlertCircle } from 'lucide-react'
import { cn } from '../lib/utils'

// Get a free access key at https://web3forms.com — paste it in your .env as VITE_WEB3FORMS_KEY
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

type FormState = 'idle' | 'sending' | 'success' | 'error'

type FieldErrors = { name?: string; email?: string; message?: string }

function validate(form: { name: string; email: string; message: string }): FieldErrors {
  const errors: FieldErrors = {}
  if (!form.name.trim()) {
    errors.name = 'Name is required.'
  } else if (form.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }
  if (!form.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.message.trim()) {
    errors.message = 'Message is required.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }
  return errors
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5">
      <AlertCircle size={12} className="flex-shrink-0" />
      {message}
    </p>
  )
}

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — PhishNet'
  }, [])

  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Re-validate only touched fields on change
    if (touched[name]) {
      setErrors(validate({ ...form, [name]: value }))
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors(validate(form))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Mark all fields touched and run full validation
    setTouched({ name: true, email: true, message: true })
    const fieldErrors = validate(form)
    setErrors(fieldErrors)
    if (Object.keys(fieldErrors).length > 0) return

    setState('sending')
    try {
      if (WEB3FORMS_KEY) {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `PhishNet contact from ${form.name}`,
            from_name: form.name,
            email: form.email,
            message: form.message,
          }),
        })
        const data = await res.json()
        if (!data.success) throw new Error('Failed')
      }
      setState('success')
      setForm({ name: '', email: '', message: '' })
      setTouched({})
      setErrors({})
    } catch {
      setState('error')
    }
  }

  const inputClass = (field: keyof FieldErrors) =>
    cn('input transition-all', touched[field] && errors[field]
      ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/30 bg-red-500/5'
      : touched[field] && !errors[field]
        ? 'border-emerald-500/50 focus:border-emerald-500 focus:ring-emerald-500/30'
        : ''
    )

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="section-tag">Get in touch</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-4">
              Contact <span className="gradient-text">PhishNet</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Have a question about security awareness training? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* Left — contact info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="card space-y-5">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Other ways to reach us</h3>
                {[
                  { icon: Mail,         label: 'Email',    value: 'hello@phishnet.io',                    sub: 'Reply within 24 hours' },
                  { icon: MessageSquare,label: 'Live Chat', value: 'Available in dashboard',              sub: 'Mon–Fri, 9am–6pm EST' },
                  { icon: Github,       label: 'GitHub',   value: 'github.com/Nathanchukss/PhishNet',    sub: 'Open source contributions welcome' },
                  { icon: Linkedin,     label: 'LinkedIn', value: 'Connect with us',                      sub: 'Updates and security news' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">{item.label}</p>
                        <p className="text-sm text-slate-200 font-medium mt-0.5">{item.value}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="card border-blue-500/20 bg-blue-500/5">
                <p className="text-sm text-slate-300 leading-relaxed">
                  <span className="font-semibold text-white">Building a security program?</span>
                  <br />
                  We can help you design and run your first phishing simulation campaign from scratch. Send us a message and we'll get back to you within one business day.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              {state === 'success' ? (
                <div className="card flex flex-col items-center justify-center text-center py-16 min-h-[400px]">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">Message Sent!</h2>
                  <p className="text-slate-400 max-w-sm text-sm leading-relaxed mb-6">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setState('idle')}
                    className="btn-secondary text-sm px-5 py-2.5"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="card space-y-5">
                  <h2 className="font-semibold text-white text-lg">Send us a message</h2>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="label">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      className={inputClass('name')}
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Jane Smith"
                      autoComplete="name"
                    />
                    <FieldError message={touched.name ? errors.name : undefined} />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="label">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      className={inputClass('email')}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="jane@company.com"
                      autoComplete="email"
                    />
                    <FieldError message={touched.email ? errors.email : undefined} />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="label">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      className={cn(inputClass('message'), 'min-h-[160px] resize-none')}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell us how we can help…"
                    />
                    <FieldError message={touched.message ? errors.message : undefined} />
                  </div>

                  {state === 'error' && (
                    <div className="flex items-start gap-2.5 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      Something went wrong. Please try again or email us at hello@phishnet.io.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={state === 'sending'}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {state === 'sending' ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending…</>
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>

                  <p className="text-xs text-slate-600 text-center">
                    Fields marked <span className="text-red-400">*</span> are required. We never share your information.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
