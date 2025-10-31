import { Github, Twitter, Music } from 'lucide-react'
import { siteConfig } from '../lib/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 border-t border-emerald/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <svg className="w-8 h-8" viewBox="0 0 32 32" aria-label="DG Logo">
              <text x="16" y="22" fontFamily="Orbitron, sans-serif" fontSize="14" fill="#00FF7F" fontWeight="700" textAnchor="middle">
                DG
              </text>
            </svg>
            <span className="text-tinted-white/80 text-sm">
              © {currentYear} {siteConfig.name}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tinted-white/60 hover:text-neon-green transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tinted-white/60 hover:text-neon-green transition-colors duration-300"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </a>

          </div>


        </div>
      </div>
    </footer>
  )
}