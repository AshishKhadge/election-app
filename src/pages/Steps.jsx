import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb } from 'lucide-react'
import StepCard from '../components/StepCard'
import { ELECTION_STEPS } from '../data/electionData'
import { useSwipe } from '../hooks'

export default function Steps() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = next (right→left), -1 = prev

  const handleNext = () => {
    if (currentIndex < ELECTION_STEPS.length - 1) {
      setDirection(1)
      setCurrentIndex((i) => i + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1)
      setCurrentIndex((i) => i - 1)
    }
  }

  const { handleTouchStart, handleTouchEnd } = useSwipe(handleNext, handlePrev)

  return (
    <div className="page-wrapper pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold text-gold-dark tracking-widest uppercase mb-3">
            Step by Step
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink-900 mb-4">
            The Election Process
          </h1>
          <p className="text-ink-500 text-lg max-w-xl mx-auto">
            Seven constitutionally-mandated stages that power India's democracy.
            Navigate with arrows, dots, or swipe on mobile.
          </p>
        </motion.div>

        {/* Step thumbnails strip */}
        <div className="flex gap-2 justify-center mb-10 overflow-x-auto pb-2 px-2">
          {ELECTION_STEPS.map((step, i) => (
            <motion.button
              key={step.id}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1)
                setCurrentIndex(i)
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                i === currentIndex
                  ? 'bg-cobalt text-white shadow-md shadow-cobalt/25'
                  : i < currentIndex
                  ? 'bg-cobalt/15 text-cobalt'
                  : 'bg-white/70 text-ink-400 border border-ink-200/60'
              }`}
            >
              <span>{step.emoji}</span>
              <span className="hidden sm:inline">{step.title}</span>
              <span className="sm:hidden">{step.id}</span>
            </motion.button>
          ))}
        </div>

        {/* Card area */}
        <div className="relative min-h-[580px] flex items-start justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <StepCard
              key={currentIndex}
              step={ELECTION_STEPS[currentIndex]}
              stepIndex={currentIndex}
              totalSteps={ELECTION_STEPS.length}
              direction={direction}
              onNext={handleNext}
              onPrev={handlePrev}
              swipeHandlers={{ onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd }}
            />
          </AnimatePresence>
        </div>

        {/* Tips panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-2xl mx-auto glass-card rounded-2xl p-5 flex gap-4 items-start"
        >
          <div className="w-9 h-9 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0">
            <Lightbulb size={18} className="text-gold-dark" />
          </div>
          <div>
            <h4 className="font-semibold text-ink-900 text-sm mb-1">Did you know?</h4>
            <p className="text-ink-500 text-sm leading-relaxed">
              {currentIndex === 0 && 'The Election Commission of India was established on January 25, 1950 — a day before India became a Republic. January 25 is now celebrated as National Voters Day.'}
              {currentIndex === 1 && 'A candidate contesting a Lok Sabha seat must deposit ₹25,000 (₹12,500 for SC/ST candidates). For a state assembly seat it is ₹10,000. The deposit is forfeited if they fail to secure 1/6th of valid votes polled.'}
              {currentIndex === 2 && 'During scrutiny, candidates are required to file a sworn affidavit disclosing criminal records, assets and liabilities, and educational qualifications — a transparency measure introduced by the Supreme Court.'}
              {currentIndex === 3 && 'The Model Code of Conduct in India is a unique instrument — it has no statutory basis but derives force from the Constitution. Parties have voluntarily agreed to abide by it since 1960.'}
              {currentIndex === 4 && 'India holds the world\'s largest democratic exercise. In the 2019 General Elections, over 600 million votes were cast across 543 constituencies. The entire process uses approximately 4 million EVMs.'}
              {currentIndex === 5 && 'Counting is the most dramatic phase. In close constituencies, results can swing multiple times as postal ballots, EVM votes, and VVPAT verifications are reconciled round by round.'}
              {currentIndex === 6 && 'After the Lok Sabha elections, the President of India invites the leader of the party/coalition that commands majority support to form the government. The Prime Minister is sworn in usually within 2–3 weeks of results.'}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
