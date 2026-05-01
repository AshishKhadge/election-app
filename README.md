# 🗳️ ElectAssist — Election Process Assistant

A modern, animated, fully responsive React web app that helps users understand the Indian election process through interactive UI, step-by-step guides, timelines, FAQs, and an AI-powered chat assistant.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

### Build for Production
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
election-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with hamburger menu
│   │   ├── LoadingScreen.jsx   # Animated splash screen
│   │   ├── StepCard.jsx        # Animated step card with navigation
│   │   └── TimelineItem.jsx    # Scroll-animated timeline entry
│   ├── pages/
│   │   ├── Home.jsx            # Hero, stats, features, CTA
│   │   ├── Steps.jsx           # Step-by-step election guide
│   │   ├── Timeline.jsx        # Vertical animated timeline
│   │   ├── FAQ.jsx             # Searchable accordion FAQ
│   │   └── ChatAssistant.jsx   # Chat UI with bot responses
│   ├── data/
│   │   └── electionData.js     # All content & bot knowledge base
│   ├── hooks/
│   │   └── index.js            # useSwipe, useScrollAnimation, etc.
│   ├── App.jsx                 # Router + page transitions
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles + Tailwind
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## ✨ Features

### 🏠 Home Page
- Hero section with animated gradient title
- Election statistics (970M+ voters, 543 seats)
- Feature card grid linking to all sections
- Process overview with 7-stage cards
- Full-width CTA banner

### 🗳️ Election Steps (Main Feature)
- 7 animated step cards — one at a time
- Framer Motion AnimatePresence transitions (slide + fade)
- Direction-aware animations (left/right)
- Thumbnail navigation strip at top
- Progress bar per card
- Mobile swipe gesture support
- Dot indicators
- "Did you know?" facts panel

### ⏳ Timeline Page
- Vertical animated timeline with IntersectionObserver
- Scroll-triggered card reveals
- Status indicators: Completed / In Progress / Upcoming
- Animated progress meter

### ❓ FAQ Page
- Smooth accordion with AnimatePresence
- Real-time search filter
- Category filter buttons
- 8 comprehensive Q&As

### 🤖 Chat Assistant
- Full chat UI with message history
- Typing indicator with bounce animation
- 8+ topic knowledge base
- Quick-question shortcut pills
- Auto-scroll, textarea auto-resize
- Reset conversation button

### 🎨 Design
- Cormorant Garamond display font + DM Sans body
- Parchment (#F7F4EE) warm background palette
- Cobalt blue + Gold accent system
- Glassmorphism cards with backdrop-blur
- Grain overlay texture
- Dot pattern backgrounds
- Mobile-first responsive layout
- Smooth page transitions via Framer Motion

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | UI framework |
| React Router | 6 | Client-side routing |
| Framer Motion | 11 | Animations |
| Tailwind CSS | 3 | Utility styling |
| lucide-react | Latest | Icons |
| Vite | 5 | Build tool |

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (hamburger nav, swipe gestures, stacked layout)
- **Tablet**: 640px–1024px (2-column grids)
- **Desktop**: > 1024px (full navigation, 4-column grids)

---

## 🔧 Customisation

### Add More Steps
Edit `src/data/electionData.js` → `ELECTION_STEPS` array.

### Add FAQ Items
Edit `src/data/electionData.js` → `FAQ_DATA` array.

### Add Bot Responses
Edit `src/data/electionData.js` → `BOT_KNOWLEDGE.topics` object.
Add keywords array + response string.

### Change Color Theme
Edit `tailwind.config.js` → `theme.extend.colors` and
`src/index.css` → `:root` CSS variables.

---

## 📄 License
MIT — Free to use and modify.
