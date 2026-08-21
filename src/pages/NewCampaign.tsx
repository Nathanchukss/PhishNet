import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Users, Send, ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react'

const TEMPLATES = [
  {
    id: 'it-reset',
    label: 'IT Password Reset',
    sender_name: 'IT Support',
    sender_email: 'it-support@company-secure-portal.net',
    subject: 'URGENT: Your password expires in 24 hours',
    body: `Dear Employee,\n\nOur system has detected that your account password is about to expire. To avoid losing access to company systems, you must reset your password immediately.\n\nClick the link below to verify your identity and reset your password:\n\n[RESET MY PASSWORD NOW →]\n\nThis link expires in 24 hours. If you do not act, your account will be locked.\n\nIT Support Team`,
    redFlags: ['Fake sender domain', 'Urgency/pressure tactics', 'Generic greeting', 'Suspicious link'],
  },
  {
    id: 'invoice',
    label: 'Overdue Invoice',
    sender_name: 'Accounts Payable',
    sender_email: 'billing@invoicing-portal-secure.com',
    subject: 'Action Required: Invoice #4892 is 30 days overdue',
    body: `Hello,\n\nThis is a final notice regarding Invoice #4892 totaling $4,250.00 which is now 30 days past due.\n\nFailure to process payment within 48 hours will result in a late fee of 5% and possible service suspension.\n\nClick here to view and pay your invoice:\n\n[VIEW INVOICE & PAY →]\n\nAccounts Payable Department`,
    redFlags: ['Unknown sender domain', 'Financial urgency', 'Threat of consequences', 'Unverified invoice'],
  },
  {
    id: 'hr-benefits',
    label: 'HR Benefits Update',
    sender_name: 'HR Department',
    sender_email: 'hr-benefits@hrportal-update.net',
    subject: 'Update your benefits selection before open enrollment closes',
    body: `Dear Team Member,\n\nOpen enrollment for 2026 benefits closes TOMORROW. If you do not update your selections, your current benefits will be dropped.\n\nLog in now to confirm or update your choices:\n\n[UPDATE MY BENEFITS →]\n\nNote: Failure to respond will result in loss of health coverage.\n\nHR Team`,
    redFlags: ['Fake HR domain', 'Deadline pressure', 'Health coverage threat', 'Suspicious portal link'],
  },
  {
    id: 'ceo-wire',
    label: 'CEO Wire Transfer',
    sender_name: 'CEO — David Chen',
    sender_email: 'david.chen@company-exec.net',
    subject: 'Confidential — urgent wire transfer needed',
    body: `Hi,\n\nI need you to process an urgent wire transfer of $12,500 to a new vendor. I'm in a meeting and can't talk — please handle this discreetly.\n\nDo not discuss this with anyone else in the office. I'll explain everything when I'm back.\n\nProcess here: [INITIATE TRANSFER →]\n\nThanks,\nDavid`,
    redFlags: ['CEO impersonation', 'Fake executive domain', 'Secrecy request', 'Financial urgency'],
  },
]

const STEPS = ['Template', 'Customize', 'Targets', 'Review']

export default function NewCampaign() {
  useEffect(() => {
    document.title = 'New Campaign — PhishNet'
  }, [])

  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [selectedTemplate, setSelectedTemplate] = useState<typeof TEMPLATES[0] | null>(null)
  const [form, setForm] = useState({ name: '', sender_name: '', sender_email: '', subject: '', body: '' })
  const [targets, setTargets] = useState('')

  function selectTemplate(t: typeof TEMPLATES[0]) {
    setSelectedTemplate(t)
    setForm({ name: `${t.label} Simulation`, sender_name: t.sender_name, sender_email: t.sender_email, subject: t.subject, body: t.body })
  }

  function handleLaunch() {
    navigate('/dashboard')
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-10">
          <h1 className="text-3xl font-black text-white mb-2">New Campaign</h1>
          <p className="text-slate-400 text-sm">Create a phishing simulation in 4 steps</p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-0 mb-10">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center flex-1 last:flex-none">
              <div className={`flex items-center gap-2 ${i <= step ? 'text-blue-400' : 'text-slate-600'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors ${
                  i < step ? 'bg-blue-600 border-blue-600 text-white' :
                  i === step ? 'border-blue-500 text-blue-400 bg-blue-500/10' :
                  'border-slate-700 text-slate-600'
                }`}>
                  {i < step ? <CheckCircle size={14} /> : i + 1}
                </div>
                <span className="text-xs font-medium hidden sm:block">{s}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-px mx-3 ${i < step ? 'bg-blue-600' : 'bg-slate-800'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 0: Template */}
        {step === 0 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Choose a template</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TEMPLATES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => selectTemplate(t)}
                  className={`card text-left transition-all ${
                    selectedTemplate?.id === t.id
                      ? 'border-blue-500 bg-blue-500/5'
                      : 'card-hover'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{t.label}</h3>
                      <p className="text-xs text-slate-500 mt-1">{t.subject}</p>
                    </div>
                    {selectedTemplate?.id === t.id && (
                      <CheckCircle size={18} className="text-blue-400 ml-auto flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {t.redFlags.map((f) => (
                      <span key={f} className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/15">
                        {f}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Customize */}
        {step === 1 && (
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-white mb-6">Customize the email</h2>
            <div>
              <label className="label">Campaign Name</label>
              <input className="input" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="label">Display Sender Name</label>
                <input className="input" value={form.sender_name} onChange={e => setForm(p => ({ ...p, sender_name: e.target.value }))} />
              </div>
              <div>
                <label className="label">Sender Email (spoofed)</label>
                <input className="input" value={form.sender_email} onChange={e => setForm(p => ({ ...p, sender_email: e.target.value }))} />
              </div>
            </div>
            <div>
              <label className="label">Subject Line</label>
              <input className="input" value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))} />
            </div>
            <div>
              <label className="label">Email Body</label>
              <textarea className="input min-h-[200px] resize-none font-mono text-sm" value={form.body} onChange={e => setForm(p => ({ ...p, body: e.target.value }))} />
            </div>
          </div>
        )}

        {/* Step 2: Targets */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Select targets</h2>
            <div className="card mb-5">
              <div className="flex items-center gap-3 mb-4">
                <Users size={18} className="text-blue-400" />
                <h3 className="font-semibold text-white">Enter employee emails</h3>
              </div>
              <label className="label">Email addresses (one per line or comma separated)</label>
              <textarea
                className="input min-h-[160px] resize-none font-mono text-sm"
                placeholder="alice@company.com&#10;bob@company.com&#10;carol@company.com"
                value={targets}
                onChange={e => setTargets(e.target.value)}
              />
              <p className="text-xs text-slate-500 mt-2">
                {targets.split(/[\n,]/).filter(e => e.trim()).length} email(s) entered
              </p>
            </div>
            <div className="card border-dashed border-slate-700 text-center py-8 cursor-pointer hover:border-blue-500 transition-colors">
              <p className="text-slate-400 text-sm mb-1">Or import from CSV</p>
              <p className="text-slate-600 text-xs">CSV format: name, email, department</p>
            </div>
          </div>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Review & Launch</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card space-y-4">
                <h3 className="font-semibold text-white border-b border-slate-800 pb-3">Campaign Details</h3>
                {[
                  { label: 'Name', value: form.name },
                  { label: 'From', value: `${form.sender_name} <${form.sender_email}>` },
                  { label: 'Subject', value: form.subject },
                  { label: 'Recipients', value: `${targets.split(/[\n,]/).filter(e => e.trim()).length} employees` },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{label}</p>
                    <p className="text-sm text-slate-200 mt-0.5">{value}</p>
                  </div>
                ))}
              </div>
              <div className="card">
                <h3 className="font-semibold text-white border-b border-slate-800 pb-3 mb-4">Email Preview</h3>
                <div className="bg-slate-800/50 rounded-xl p-4 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                  {form.body}
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <p className="text-sm text-emerald-400 font-medium">Ready to launch</p>
              <p className="text-xs text-slate-500 mt-1">
                This is a simulated campaign for security awareness training. No real phishing content will be created.
              </p>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3 mt-10">
          <button
            onClick={() => setStep(s => s - 1)}
            disabled={step === 0}
            className="btn-secondary disabled:opacity-40 disabled:cursor-not-allowed text-sm px-4 sm:px-6"
          >
            <ChevronLeft size={16} /> <span className="hidden xs:inline">Back</span>
          </button>
          {step < STEPS.length - 1 ? (
            <button
              onClick={() => setStep(s => s + 1)}
              disabled={step === 0 && !selectedTemplate}
              className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed text-sm px-4 sm:px-6"
            >
              Continue <ChevronRight size={16} />
            </button>
          ) : (
            <button onClick={handleLaunch} className="btn-primary bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/25 text-sm px-4 sm:px-6">
              <Send size={16} /> Launch Campaign
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
