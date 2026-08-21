import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'
import { cn } from '../../lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 shadow-xl shadow-slate-950/50'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src="/logo.svg" alt="PhishNet logo" className="w-8 h-8 rounded-lg shadow-lg shadow-blue-600/40" />
          <span className="font-bold text-lg text-white tracking-tight">
            Phish<span className="text-blue-400">Net</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                location.pathname === link.href
                  ? 'text-blue-400 bg-blue-500/10'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/dashboard"
            className="btn-primary text-sm px-5 py-2.5"
          >
            Dashboard
            <ChevronRight size={15} />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'block px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                location.pathname === link.href
                  ? 'text-blue-400 bg-blue-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link to="/dashboard" className="btn-primary w-full justify-center text-sm">
              Dashboard <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
