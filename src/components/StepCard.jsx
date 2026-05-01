import React from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Tag } from 'lucide-react'

const ACCENT_THEMES = {
  cobalt: {
    bg: 'from-blue-50 to-sky-50/40',
    accent: 'bg-blue-100 text-blue-800',
    badge: 'bg-cobalt text-white',
    glow: 'shadow-blue-200/60',
    bar: 'bg-gradient-to-r from-cobalt to-cobalt-lighter',
    icon: 'bg-blue-100',
  },
  sage: {
    bg: 'from-emerald-50 to-green-50/40',
    accent: 'bg-emerald-100 text-emerald-800',
    badge: 'bg-sage text-white',
    glow: 'shadow-emerald-200/60',
    bar: 'bg-gradient-to-r from-sage to-sage-light',
    icon: 'bg-emerald-100',
  },
  gold: {
    bg: 'from-amber-50 to-yellow-50/40',
    accent: 'bg-amber-100 text-amber-800',
    badge: 'bg-gold text-white',
    glow: 'shadow-amber-200/60',
    bar: 'bg-gradient-to-r from-gold-dark to-gold',
    icon: 'bg-amber-100',
  },
  crimson: {
    bg: 'from-red-50 to-rose-50/40',
    accent: 'bg-red-100 text-red-800',
    badge: 'bg-crimson text-white',
    glow: 'shadow-red-200/60',
    bar: 'bg-gradient-to-r from-crimson-dark to-crimson-light',
    icon: 'bg-red-100',
  },
}

const slideVariants = {
  enterRight: { x: 80, opacity: 0, scale: 0.96 },
  enterLeft: { x: -80, opacity: 0, scale: 0.96 },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 28 },
  },
  exitRight: {
    x: -80,
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.22, ease: 'easeIn' },
  },
  exitLeft: {
    x: 80,
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.22, ease: 'easeIn' },
  },
}

export default function StepCard({
  step,
  stepIndex,
  totalSteps,
  direction,
  onNext,
  onPrev,
  swipeHandlers,
}) {
  const theme = ACCENT_THEMES[step.color] || ACCENT_THEMES.cobalt
  const progress = ((stepIndex + 1) / totalSteps) * 100

  return (
    <div className="w-full max-w-2xl mx-auto step-card-container" {...swipeHandlers}>
      <motion.div
        key={step.id}
        custom={direction}
        variants={slideVariants}
        initial={direction === 1 ? 'enterRight' : 'enterLeft'}
        animate="center"
        exit={direction === 1 ? 'exitRight' : 'exitLeft'}
        className={`glass-card rounded-3xl overflow-hidden shadow-2xl ${theme.glow}`}
        whileHover={{ y: -2, transition: { duration: 0.2 } }}
      >
        {/* Card top stripe */}
        <div className={`h-1.5 w-full ${theme.bar}`} />

        {/* Card inner */}
        <div className={`bg-gradient-to-br ${theme.bg} p-7 sm:p-10`}>
          {/* Header row */}
          <div className="flex items-start justify-between mb-7">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-ink-400 mb-2">
                Step {stepIndex + 1} of {totalSteps}
              </span>
              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${theme.badge} shadow-sm`}>
                ✦ {step.subtitle}
              </div>
            </div>

            {/* Large emoji icon */}
            <motion.div
              className={`${theme.icon} rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-4xl sm:text-5xl shadow-sm flex-shrink-0`}
              animate={{ rotate: [0, -3, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {step.emoji}
            </motion.div>
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 mb-4 leading-tight">
            {step.title}
          </h2>

          {/* Description */}
          <p className="text-ink-600 leading-relaxed text-base sm:text-lg mb-5">
            {step.description}
          </p>

          {/* Detail */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/80">
            <p className="text-ink-500 text-sm leading-relaxed">{step.detail}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {step.tags.map((tag) => (
              <span
                key={tag}
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${theme.accent}`}
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-ink-400 mb-1.5">
              <span>Progress</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2 bg-white/70 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${theme.bar}`}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            <motion.button
              onClick={onPrev}
              disabled={stepIndex === 0}
              whileHover={stepIndex !== 0 ? { scale: 1.05, x: -2 } : {}}
              whileTap={stepIndex !== 0 ? { scale: 0.95 } : {}}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                stepIndex === 0
                  ? 'opacity-30 cursor-not-allowed bg-ink-100 text-ink-400'
                  : 'bg-white text-ink-700 hover:bg-ink-50 shadow-sm hover:shadow-md border border-ink-200/60'
              }`}
            >
              <ChevronLeft size={16} />
              Previous
            </motion.button>

            {/* Dot indicators */}
            <div className="flex gap-1.5">
              {Array.from({ length: totalSteps }, (_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    width: i === stepIndex ? 22 : 8,
                    opacity: i === stepIndex ? 1 : i < stepIndex ? 0.6 : 0.25,
                  }}
                  transition={{ duration: 0.25 }}
                  className={`h-2 rounded-full ${i === stepIndex ? theme.bar : 'bg-ink-300'}`}
                />
              ))}
            </div>

            <motion.button
              onClick={onNext}
              disabled={stepIndex === totalSteps - 1}
              whileHover={stepIndex !== totalSteps - 1 ? { scale: 1.05, x: 2 } : {}}
              whileTap={stepIndex !== totalSteps - 1 ? { scale: 0.95 } : {}}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                stepIndex === totalSteps - 1
                  ? 'opacity-30 cursor-not-allowed bg-ink-100 text-ink-400'
                  : 'bg-cobalt text-white hover:bg-cobalt-light shadow-md shadow-cobalt/25 hover:shadow-cobalt/40'
              }`}
            >
              Next
              <ChevronRight size={16} />
            </motion.button>
          </div>

          {/* Swipe hint */}
          <p className="text-center text-xs text-ink-400 mt-4">
            ← Swipe to navigate on mobile →
          </p>
        </div>
      </motion.div>
    </div>
  )
}
