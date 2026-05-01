import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, User, RotateCcw, Sparkles } from 'lucide-react'
import { BOT_KNOWLEDGE, QUICK_QUESTIONS } from '../data/electionData'

function getBotResponse(message) {
  const lower = message.toLowerCase().trim()

  // Greetings
  if (BOT_KNOWLEDGE.greetings.some((g) => lower.includes(g))) {
    return BOT_KNOWLEDGE.greetingResponse
  }

  // Topic matching
  for (const [, topicData] of Object.entries(BOT_KNOWLEDGE.topics)) {
    if (topicData.keywords) {
      if (topicData.keywords.some((kw) => lower.includes(kw))) {
        return topicData.response
      }
    }
  }

  return BOT_KNOWLEDGE.topics.default.response
}

function MessageBubble({ msg, isLast }) {
  const isUser = msg.role === 'user'
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 ${
          isUser ? 'bg-cobalt text-white' : 'bg-gold/20 text-gold-dark'
        }`}
      >
        {isUser ? <User size={15} /> : <Bot size={15} />}
      </div>

      {/* Bubble */}
      <div
        className={`max-w-[78%] sm:max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
          isUser
            ? 'bg-cobalt text-white rounded-tr-sm shadow-md shadow-cobalt/20'
            : 'bg-white border border-ink-200/60 text-ink-800 rounded-tl-sm shadow-sm'
        }`}
      >
        {msg.text}
        <div className={`text-[10px] mt-1.5 ${isUser ? 'text-white/50 text-right' : 'text-ink-400'}`}>
          {msg.time}
        </div>
      </div>
    </motion.div>
  )
}

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      className="flex gap-3"
    >
      <div className="w-8 h-8 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
        <Bot size={15} className="text-gold-dark" />
      </div>
      <div className="bg-white border border-ink-200/60 rounded-2xl rounded-tl-sm px-4 py-3.5 shadow-sm">
        <div className="flex gap-1.5 items-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-ink-300"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function getTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const INITIAL_MESSAGES = [
  {
    id: 1,
    role: 'bot',
    text: "Namaste! 🙏 Welcome to ElectAssist — your interactive guide to the Indian democratic process.\n\nI'm here to help you understand everything about elections — voter registration, polling procedures, EVMs, NOTA, and the Model Code of Conduct.\n\n**What can I help you with today?**",
    time: getTime(),
  },
]

export default function ChatAssistant() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const sendMessage = (text) => {
    const msg = (text || input).trim()
    if (!msg || isTyping) return

    setInput('')
    const userMsg = { id: Date.now(), role: 'user', text: msg, time: getTime() }
    setMessages((prev) => [...prev, userMsg])
    setIsTyping(true)

    const delay = 800 + Math.random() * 700
    setTimeout(() => {
      const response = getBotResponse(msg)
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'bot', text: response, time: getTime() },
      ])
      setIsTyping(false)
      inputRef.current?.focus()
    }, delay)
  }

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES)
    setIsTyping(false)
    setInput('')
  }

  return (
    <div className="page-wrapper pt-20 pb-6 flex flex-col">
      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 flex flex-col flex-1">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 pt-4"
        >
          <span className="inline-block text-xs font-semibold text-gold-dark tracking-widest uppercase mb-2">
            AI Powered
          </span>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-900">
                Election Assistant
              </h1>
              <p className="text-ink-500 text-sm mt-1">
                Ask anything about the Indian election process.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReset}
              className="flex items-center gap-1.5 text-xs font-semibold text-ink-500 hover:text-crimson border border-ink-200 hover:border-crimson/40 px-3 py-2 rounded-xl transition-all"
            >
              <RotateCcw size={13} />
              Reset
            </motion.button>
          </div>
        </motion.div>

        {/* Chat window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-col glass-card rounded-3xl overflow-hidden flex-1"
          style={{ minHeight: '520px' }}
        >
          {/* Chat header bar */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-ink-200/60 bg-gradient-to-r from-cobalt/5 to-transparent">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-cobalt flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-sage border-2 border-white" />
            </div>
            <div>
              <h3 className="font-semibold text-ink-900 text-sm">ElectAssist AI</h3>
              <p className="text-xs text-sage font-medium">● Online — Ready to help</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5 text-xs text-ink-400 font-medium">
              <Sparkles size={12} className="text-gold" />
              Powered by knowledge base
            </div>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <MessageBubble key={msg.id} msg={msg} isLast={i === messages.length - 1} />
              ))}
              {isTyping && <TypingIndicator key="typing" />}
            </AnimatePresence>
            <div ref={bottomRef} />
          </div>

          {/* Quick questions */}
          <div className="px-4 pb-2">
            <p className="text-[10px] font-semibold text-ink-400 uppercase tracking-widest mb-2">
              Quick Questions
            </p>
            <div className="flex flex-wrap gap-2">
              {QUICK_QUESTIONS.map((q) => (
                <motion.button
                  key={q}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => sendMessage(q)}
                  disabled={isTyping}
                  className="text-xs px-3 py-1.5 rounded-full bg-cobalt/8 text-cobalt border border-cobalt/15 font-medium hover:bg-cobalt hover:text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {q}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Input row */}
          <div className="px-4 pb-4 pt-3 border-t border-ink-200/60">
            <div className="flex gap-2 items-end">
              <textarea
                ref={inputRef}
                rows={1}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value)
                  e.target.style.height = 'auto'
                  e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px'
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    sendMessage()
                  }
                }}
                placeholder="Type your question… (Enter to send)"
                disabled={isTyping}
                className="flex-1 resize-none px-4 py-3 rounded-xl border border-ink-200/80 bg-white/80 text-ink-800 placeholder:text-ink-400 text-sm focus:outline-none focus:ring-2 focus:ring-cobalt/25 focus:border-cobalt/50 transition-all overflow-hidden disabled:opacity-60"
                style={{ minHeight: '46px' }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => sendMessage()}
                disabled={!input.trim() || isTyping}
                className="w-11 h-11 rounded-xl bg-cobalt text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-cobalt/25 hover:bg-cobalt-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </motion.button>
            </div>
            <p className="text-[10px] text-ink-400 text-center mt-2">
              Shift+Enter for new line · Enter to send
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
