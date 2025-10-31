import { motion } from 'framer-motion'
import { Code, Server, Shield, Palette } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"]
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Python", "Rust", "Node.js", "PostgreSQL", "Redis"]
    },
    {
      icon: Shield,
      title: "DevOps/Security",
      skills: ["Docker", "AWS", "Kubernetes", "Penetration Testing", "CI/CD"]
    },
    {
      icon: Palette,
      title: "Creative Tech",
      skills: ["Sound Production", "Digital Art", "Music Composition", "Audio Engineering"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-rich-black/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8 glow-text">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="neon-border bg-rich-black/80 p-6 rounded-lg hover:bg-neon-green/5 transition-all duration-300 group"
            >
              <category.icon className="w-12 h-12 text-neon-green mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-orbitron font-semibold mb-4 text-emerald">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-tinted-white/80 text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}