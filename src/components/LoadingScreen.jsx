import React from 'react'
import { motion } from 'framer-motion'
import { Vote } from 'lucide-react'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-amber-50"
    >
      {/* Animated background */}
      <div className="absolute inset-0 dot-pattern opacity-60" />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-gold/20"
            style={{
              width: 200 + i * 120,
              height: 200 + i * 120,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="relative"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cobalt to-cobalt-light flex items-center justify-center shadow-2xl shadow-cobalt/30">
            <Vote size={36} className="text-white" />
          </div>
          <motion.div
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold border-2 border-amber-50"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h1 className="font-display text-4xl font-bold text-ink-900 mb-1">ElectAssist</h1>
          <p className="text-ink-400 text-sm font-medium tracking-widest uppercase">
            Democracy Simplified
          </p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-48"
        >
          <div className="h-1 bg-ink-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cobalt via-gold to-cobalt-lighter rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
            />
          </div>
          <p className="text-center text-xs text-ink-400 mt-2 font-medium">Loading your guide…</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
