import { Link } from 'react-router-dom'
import { Github, Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src="/logo.svg" alt="PhishNet" className="w-8 h-8 rounded-lg" />
              <span className="font-bold text-lg text-white">
                Phish<span className="text-blue-400">Net</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering organizations to build a human firewall through realistic phishing simulations and security awareness training.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://github.com/Nathanchukss/PhishNet" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors">
                <Github size={16} />
              </a>
              <a href="mailto:chukwudinwaokocha@gmail.com" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors">
                <Mail size={16} />
              </a>
              <a href="https://www.linkedin.com/in/nathan-nwaokocha/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Dashboard', href: '/dashboard' },
                { label: 'New Campaign', href: '/campaigns/new' },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © 2026 PhishNet. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-600">For authorized security awareness training only.</p>
            <a
              href="https://github.com/chukwudinwaokocha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1.5 transition-colors"
            >
              <Github size={13} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
