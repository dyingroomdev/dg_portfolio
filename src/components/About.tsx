import { motion } from 'framer-motion'
import { Code, Shield, Music, Calendar } from 'lucide-react'

export default function About() {
  const facts = [
    { icon: Calendar, text: "9+ Years Experience" },
    { icon: Code, text: "React • Python • Cloud Infra" },
    { icon: Shield, text: "Security & Pentesting" },
    { icon: Music, text: "Guitarist • Songwriter" }
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8 glow-text">
            About
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-tinted-white/90 leading-relaxed mb-12">
              I build and secure digital ecosystems from front to back — React interfaces, 
              Python and Rust backends, cloud infrastructure, and clean automation pipelines. 
              Off-screen, I compose and perform music that captures the same energy: 
              precision, emotion, and storytelling.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="neon-border bg-rich-black/50 p-4 rounded-lg text-center hover:bg-neon-green/10 transition-colors duration-300"
                >
                  <fact.icon className="w-8 h-8 text-neon-green mx-auto mb-3" />
                  <p className="text-sm font-medium">{fact.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}