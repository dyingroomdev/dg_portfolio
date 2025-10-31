import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { siteConfig } from '../lib/config'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rich-black/50 to-rich-black" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <svg 
            className="w-32 h-16 mx-auto mb-6 animate-glow-pulse" 
            viewBox="0 0 200 80"
            aria-label="DyinGroom Logo"
          >
            <text x="10" y="55" fontFamily="Orbitron, sans-serif" fontSize="48" fill="#00FF7F" fontWeight="700">
              {'{DG}'}
            </text>
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-orbitron font-bold mb-6 glow-text"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-emerald mb-12 max-w-3xl mx-auto"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <button
            onClick={scrollToContact}
            className="neon-border bg-transparent hover:bg-neon-green hover:text-rich-black transition-all duration-300 px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
          >
            Contact Me
            <ArrowDown className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}