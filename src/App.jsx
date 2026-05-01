import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import Steps from './pages/Steps'
import Timeline from './pages/Timeline'
import FAQ from './pages/FAQ'
import ChatAssistant from './pages/ChatAssistant'
import { useLoading } from './hooks'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.22, ease: 'easeIn' } },
}

function PageWrapper({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()
  const isLoading = useLoading(1600)

  return (
    <div className="grain min-h-screen bg-parchment">
      <AnimatePresence>{isLoading && <LoadingScreen key="loader" />}</AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/steps" element={<PageWrapper><Steps /></PageWrapper>} />
              <Route path="/timeline" element={<PageWrapper><Timeline /></PageWrapper>} />
              <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
              <Route path="/assistant" element={<PageWrapper><ChatAssistant /></PageWrapper>} />
              <Route path="*" element={
                <PageWrapper>
                  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                    <div className="text-6xl mb-4">🗳️</div>
                    <h1 className="font-display text-4xl font-bold text-ink-900 mb-3">Page Not Found</h1>
                    <p className="text-ink-500 mb-6">The page you're looking for doesn't exist.</p>
                    <a href="/" className="bg-cobalt text-white px-6 py-3 rounded-xl font-semibold hover:bg-cobalt-light transition-colors">
                      Go Home →
                    </a>
                  </div>
                </PageWrapper>
              } />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </div>
  )
}
