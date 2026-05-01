import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Circle, Clock } from 'lucide-react'
import { useScrollAnimation } from '../hooks'

const STATUS_CONFIG = {
  completed: {
    icon: CheckCircle2,
    dotClass: 'bg-sage border-sage/30',
    iconClass: 'text-sage',
    badge: 'bg-emerald-100 text-emerald-700',
    label: 'Completed',
    cardBorder: 'border-l-sage',
  },
  active: {
    icon: Clock,
    dotClass: 'bg-gold border-gold/30 ring-4 ring-gold/20',
    iconClass: 'text-gold',
    badge: 'bg-amber-100 text-amber-700',
    label: 'In Progress',
    cardBorder: 'border-l-gold',
  },
  upcoming: {
    icon: Circle,
    dotClass: 'bg-ink-200 border-ink-300/40',
    iconClass: 'text-ink-400',
    badge: 'bg-ink-100 text-ink-500',
    label: 'Upcoming',
    cardBorder: 'border-l-ink-200',
  },
}

export default function TimelineItem({ event, index, isLast }) {
  const [ref, isVisible] = useScrollAnimation()
  const config = STATUS_CONFIG[event.status]
  const Icon = config.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-5 sm:gap-8"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
          className={`relative w-5 h-5 rounded-full border-2 ${config.dotClass} z-10 mt-1 shadow-sm`}
        >
          {event.status === 'active' && (
            <motion.div
              className="absolute inset-0 rounded-full bg-gold/40"
              animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.div>
        {!isLast && (
          <div className="flex-1 w-px mt-2 tl-connector min-h-[40px]" />
        )}
      </div>

      {/* Content card */}
      <div className="pb-8 flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-ink-400 tracking-widest uppercase">
            {event.shortDate}
          </span>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${config.badge}`}>
            {config.label}
          </span>
        </div>

        <motion.div
          whileHover={{ y: -1, transition: { duration: 0.15 } }}
          className={`glass-card rounded-2xl p-4 sm:p-5 border-l-4 ${config.cardBorder}`}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl mt-0.5 flex-shrink-0">{event.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3 className="font-semibold text-ink-900 text-base leading-snug">{event.title}</h3>
                <span className="text-xs font-medium bg-ink-50 text-ink-500 px-2 py-0.5 rounded-full border border-ink-200/60">
                  {event.phase}
                </span>
              </div>
              <p className="text-ink-500 text-sm leading-relaxed">{event.description}</p>
              <p className="text-xs text-ink-400 mt-2 font-medium">{event.date}</p>
            </div>
            <Icon size={18} className={`${config.iconClass} flex-shrink-0 mt-0.5`} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
