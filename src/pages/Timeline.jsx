import React from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, CheckCircle2, Clock, Circle } from 'lucide-react'
import TimelineItem from '../components/TimelineItem'
import { TIMELINE_EVENTS } from '../data/electionData'

const LEGEND = [
  { status: 'completed', icon: CheckCircle2, color: 'text-sage', bg: 'bg-emerald-100', label: 'Completed' },
  { status: 'active', icon: Clock, color: 'text-gold-dark', bg: 'bg-amber-100', label: 'In Progress' },
  { status: 'upcoming', icon: Circle, color: 'text-ink-400', bg: 'bg-ink-100', label: 'Upcoming' },
]

export default function Timeline() {
  const completed = TIMELINE_EVENTS.filter((e) => e.status === 'completed').length
  const total = TIMELINE_EVENTS.length

  return (
    <div className="page-wrapper pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block text-xs font-semibold text-gold-dark tracking-widest uppercase mb-3">
            Key Dates
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink-900 mb-4">
            Election Timeline
          </h1>
          <p className="text-ink-500 text-lg leading-relaxed max-w-lg">
            Track every critical milestone of the 2024 election cycle — from the first notification
            to the final declaration.
          </p>

          {/* Progress meter */}
          <div className="mt-6 glass-card rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink-700">
                <CalendarDays size={16} className="text-cobalt" />
                Election Progress
              </div>
              <span className="text-sm font-bold text-cobalt">
                {completed} / {total} milestones
              </span>
            </div>
            <div className="h-2.5 bg-ink-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-sage to-cobalt rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(completed / total) * 100}%` }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-ink-400">Jan 15 — Notification</span>
              <span className="text-xs text-ink-400">Feb 23–24 — Results</span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex gap-4 mt-5 flex-wrap">
            {LEGEND.map(({ icon: Icon, color, bg, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full ${bg} flex items-center justify-center`}>
                  <Icon size={13} className={color} />
                </div>
                <span className="text-xs font-medium text-ink-500">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {TIMELINE_EVENTS.map((event, index) => (
            <TimelineItem
              key={event.id}
              event={event}
              index={index}
              isLast={index === TIMELINE_EVENTS.length - 1}
            />
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-ink-400 font-medium">
            ✦ Dates are indicative. Refer to the official ECI notification for exact schedule. ✦
          </p>
        </motion.div>
      </div>
    </div>
  )
}
