import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Search, HelpCircle } from 'lucide-react'
import { FAQ_DATA } from '../data/electionData'

const CATEGORY_COLORS = {
  Eligibility: 'bg-cobalt/10 text-cobalt',
  Process: 'bg-sage/10 text-sage',
  Documents: 'bg-gold/15 text-gold-dark',
  Registration: 'bg-crimson/10 text-crimson',
  Technology: 'bg-purple-100 text-purple-700',
  Rights: 'bg-amber-100 text-amber-700',
  Rules: 'bg-sky-100 text-sky-700',
  Postal: 'bg-teal-100 text-teal-700',
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null)
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...new Set(FAQ_DATA.map((f) => f.category))]

  const filtered = FAQ_DATA.filter((item) => {
    const matchesSearch =
      !search ||
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase())
    const matchesCat = activeCategory === 'All' || item.category === activeCategory
    return matchesSearch && matchesCat
  })

  return (
    <div className="page-wrapper pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block text-xs font-semibold text-gold-dark tracking-widest uppercase mb-3">
            Got Questions?
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-ink-500 text-lg">
            Comprehensive answers to every common question about the Indian election process.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="relative mb-5"
        >
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
          <input
            type="text"
            placeholder="Search questions…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-ink-200/80 bg-white/80 backdrop-blur-sm text-ink-800 placeholder:text-ink-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cobalt/30 focus:border-cobalt/50 transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700"
            >
              ✕
            </button>
          )}
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 flex-wrap mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cobalt text-white shadow-md'
                  : 'bg-white/70 text-ink-500 border border-ink-200/60 hover:border-cobalt/30 hover:text-cobalt'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Results count */}
        <p className="text-xs text-ink-400 font-medium mb-4">
          {filtered.length} question{filtered.length !== 1 ? 's' : ''} found
        </p>

        {/* FAQ items */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <HelpCircle size={40} className="text-ink-300 mx-auto mb-3" />
                <p className="text-ink-500 font-medium">No matching questions found.</p>
                <p className="text-ink-400 text-sm mt-1">Try a different search term or category.</p>
                <button
                  onClick={() => { setSearch(''); setActiveCategory('All') }}
                  className="mt-4 text-cobalt text-sm font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            ) : (
              filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <div
                    className={`glass-card rounded-2xl overflow-hidden transition-all duration-200 ${
                      openId === item.id ? 'ring-1 ring-cobalt/20 shadow-md shadow-cobalt/8' : ''
                    }`}
                  >
                    {/* Question button */}
                    <button
                      onClick={() => setOpenId(openId === item.id ? null : item.id)}
                      className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-start gap-4 group"
                    >
                      <div
                        className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                          openId === item.id ? 'bg-cobalt text-white' : 'bg-cobalt/10 text-cobalt group-hover:bg-cobalt/20'
                        }`}
                      >
                        {openId === item.id ? <Minus size={14} /> : <Plus size={14} />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span
                            className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                              CATEGORY_COLORS[item.category] || 'bg-ink-100 text-ink-600'
                            }`}
                          >
                            {item.category}
                          </span>
                        </div>
                        <h3
                          className={`font-semibold text-sm sm:text-base leading-snug transition-colors ${
                            openId === item.id ? 'text-cobalt' : 'text-ink-900 group-hover:text-cobalt'
                          }`}
                        >
                          {item.question}
                        </h3>
                      </div>

                      <motion.div
                        animate={{ rotate: openId === item.id ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 mt-1"
                      >
                        <Plus size={16} className="text-ink-400" />
                      </motion.div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {openId === item.id && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-5 pt-0 ml-11">
                            <div className="h-px bg-gradient-to-r from-cobalt/20 to-transparent mb-4" />
                            <p className="text-ink-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-ink-500 text-sm mb-3">Still have questions?</p>
          <a
            href="/assistant"
            className="inline-flex items-center gap-2 bg-cobalt text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-cobalt-light transition-colors shadow-md shadow-cobalt/20"
          >
            Ask our AI Assistant →
          </a>
        </motion.div>
      </div>
    </div>
  )
}
