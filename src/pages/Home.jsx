import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Vote, BookOpen, Clock, HelpCircle,
  MessageSquare, ChevronRight, Shield, Users, Globe, Zap
} from 'lucide-react'
import { ELECTION_STEPS } from '../data/electionData'

const FEATURES = [
  {
    icon: BookOpen,
    color: 'from-cobalt/10 to-cobalt/5',
    iconColor: 'text-cobalt',
    title: 'Step-by-Step Guide',
    desc: 'Walk through all 7 stages of the election process with detailed explanations.',
    to: '/steps',
  },
  {
    icon: Clock,
    color: 'from-gold/10 to-gold/5',
    iconColor: 'text-gold-dark',
    title: 'Election Timeline',
    desc: 'Track key election dates and phases on an animated interactive timeline.',
    to: '/timeline',
  },
  {
    icon: HelpCircle,
    color: 'from-sage/10 to-sage/5',
    iconColor: 'text-sage',
    title: 'FAQ Hub',
    desc: 'Get instant answers to the most common election-related questions.',
    to: '/faq',
  },
  {
    icon: MessageSquare,
    color: 'from-crimson/10 to-crimson/5',
    iconColor: 'text-crimson',
    title: 'AI Assistant',
    desc: 'Chat with our intelligent election assistant for personalised guidance.',
    to: '/assistant',
  },
]

const STATS = [
  { icon: Users, value: '970M+', label: 'Eligible Voters' },
  { icon: Vote, value: '1M+', label: 'Polling Stations' },
  { icon: Globe, value: '543', label: 'Lok Sabha Seats' },
  { icon: Shield, value: '100%', label: 'Free & Fair' },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* ─── Hero ───────────────────────────────────── */}
      <section className="relative pt-24 sm:pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 dot-pattern" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-cobalt/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-64 h-64 bg-gold/8 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cobalt/8 border border-cobalt/15 text-cobalt text-sm font-semibold">
                <Vote size={14} />
                India General Elections 2024
                <span className="ml-1 w-2 h-2 rounded-full bg-gold animate-pulse" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-ink-900 leading-[1.08] max-w-4xl"
            >
              Understand{' '}
              <span className="gradient-text">Democracy</span>
              <br />
              Like Never Before
            </motion.h1>

            {/* Ornamental divider */}
            <motion.div variants={itemVariants} className="ornament w-48 text-gold text-lg">
              ✦
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-ink-500 text-lg sm:text-xl leading-relaxed max-w-2xl"
            >
              An interactive, beautifully designed guide to the Indian election process —
              from the very first notification to the final declaration of results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 mt-2"
            >
              <Link to="/steps">
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-2 bg-cobalt text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-xl shadow-cobalt/25 hover:shadow-cobalt/40 transition-shadow"
                >
                  Start Learning
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/assistant">
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-white text-ink-800 border border-ink-200 px-7 py-3.5 rounded-xl font-semibold text-base hover:border-cobalt/40 hover:text-cobalt shadow-sm hover:shadow-md transition-all"
                >
                  <MessageSquare size={17} />
                  Ask a Question
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Stats ─────────────────────────────────── */}
      <section className="py-10 border-y border-amber-200/60 bg-white/40 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {STATS.map(({ icon: Icon, value, label }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-cobalt/8 flex items-center justify-center mb-1">
                  <Icon size={18} className="text-cobalt" />
                </div>
                <span className="font-display text-3xl font-bold text-ink-900">{value}</span>
                <span className="text-ink-500 text-sm font-medium">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Feature Cards ─────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 mb-3">
            Everything You Need to Know
          </h2>
          <p className="text-ink-500 text-lg max-w-xl mx-auto">
            Four powerful tools to help every citizen understand and engage with the democratic process.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {FEATURES.map(({ icon: Icon, color, iconColor, title, desc, to }) => (
            <motion.div key={title} variants={itemVariants}>
              <Link to={to} className="block h-full">
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="glass-card rounded-2xl p-6 h-full flex flex-col gap-4 group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                    <Icon size={22} className={iconColor} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-ink-900 text-base mb-2 group-hover:text-cobalt transition-colors">
                      {title}
                    </h3>
                    <p className="text-ink-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-cobalt">
                    Explore
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── Process Overview ──────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-transparent to-amber-100/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold text-gold-dark tracking-widest uppercase mb-3 block">
              The Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 mb-3">
              7 Stages of Democracy
            </h2>
            <p className="text-ink-500 text-lg max-w-xl mx-auto">
              Every election follows this structured, constitutionally-mandated journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ELECTION_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <Link to="/steps">
                  <motion.div
                    whileHover={{ y: -3, transition: { duration: 0.15 } }}
                    className="glass-card rounded-2xl p-5 flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cobalt/8 flex items-center justify-center text-xl flex-shrink-0">
                      {step.emoji}
                    </div>
                    <div>
                      <span className="text-xs text-ink-400 font-semibold uppercase tracking-wide">
                        Stage {step.id}
                      </span>
                      <h3 className="font-semibold text-ink-800 text-sm mt-0.5 group-hover:text-cobalt transition-colors">
                        {step.title}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}

            {/* Last card: CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ELECTION_STEPS.length * 0.07 }}
            >
              <Link to="/steps">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-cobalt rounded-2xl p-5 flex items-center justify-center gap-2 cursor-pointer h-full min-h-[80px] group"
                >
                  <Zap size={16} className="text-gold" />
                  <span className="text-white text-sm font-semibold group-hover:text-gold transition-colors">
                    Explore All Steps →
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ───────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cobalt via-cobalt-light to-cobalt-lighter p-10 sm:p-14 text-center text-white"
          >
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-gold/10" />

            <div className="relative z-10">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
                ✦ Every Vote Matters ✦
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                Ready to be an Informed Voter?
              </h2>
              <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                Explore the complete election process, check your eligibility, understand your rights,
                and ask our AI assistant anything.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/steps">
                  <motion.button
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-gold text-ink-900 px-7 py-3.5 rounded-xl font-bold text-base hover:bg-gold-light transition-colors shadow-xl shadow-black/20"
                  >
                    Begin the Journey →
                  </motion.button>
                </Link>
                <Link to="/assistant">
                  <motion.button
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/25 text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-white/20 transition-colors"
                  >
                    <MessageSquare size={16} className="inline mr-2" />
                    Ask a Question
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-200/60 py-8 text-center">
        <p className="text-ink-400 text-sm">
          © 2024 ElectAssist — Built to promote informed democratic participation.
          <span className="mx-2 text-gold">✦</span>
          Data sourced from ECI guidelines.
        </p>
      </footer>
    </div>
  )
}
