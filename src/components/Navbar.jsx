import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Vote, ChevronRight } from 'lucide-react'

const NAV_LINKS = [
  { path: '/', label: 'Home', exact: true },
  { path: '/steps', label: 'Election Steps' },
  { path: '/timeline', label: 'Timeline' },
  { path: '/faq', label: 'FAQ' },
  { path: '/assistant', label: 'Ask Assistant' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-amber-50/90 backdrop-blur-xl shadow-sm border-b border-amber-200/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cobalt to-cobalt-light flex items-center justify-center shadow-md shadow-cobalt/25 group-hover:shadow-cobalt/40 transition-shadow">
                  <Vote size={18} className="text-white" />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-gold border-2 border-amber-50" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight text-ink-900 group-hover:text-cobalt transition-colors">
                  ElectAssist
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-ink-400 leading-tight">
                  Democracy Guide
                </span>
              </div>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.exact}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-cobalt bg-cobalt/8'
                        : 'text-ink-500 hover:text-ink-900 hover:bg-ink-50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-cobalt to-gold rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
              <NavLink
                to="/assistant"
                className="ml-3 px-4 py-2 rounded-xl bg-cobalt text-white text-sm font-semibold hover:bg-cobalt-light transition-all duration-200 shadow-md shadow-cobalt/20 hover:shadow-cobalt/35 hover:-translate-y-px"
              >
                Ask AI ✦
              </NavLink>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-ink-600 hover:bg-ink-100 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 35 }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-amber-50 z-50 md:hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-amber-200/60">
                <div className="flex items-center gap-2">
                  <Vote size={20} className="text-cobalt" />
                  <span className="font-display font-bold text-ink-900">ElectAssist</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-ink-500 hover:bg-ink-100 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.exact}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-cobalt text-white shadow-md shadow-cobalt/25'
                            : 'text-ink-700 hover:bg-ink-100'
                        }`
                      }
                    >
                      {link.label}
                      <ChevronRight size={15} className="opacity-50" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="p-4 border-t border-amber-200/60">
                <p className="text-xs text-ink-400 text-center font-medium">
                  © 2024 ElectAssist — Democracy Simplified
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
