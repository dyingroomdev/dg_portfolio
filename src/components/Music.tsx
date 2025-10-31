import { motion } from 'framer-motion'
import { ExternalLink, Play, Youtube } from 'lucide-react'
import { siteConfig } from '../lib/config'

export default function Music() {
  return (
    <section id="music" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8 glow-text">
            Music
          </h2>
          <p className="text-xl text-emerald mb-12 max-w-3xl mx-auto">
            Where code meets cadence — writing songs that mirror the rhythm of creation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {siteConfig.tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="neon-border bg-rich-black/80 rounded-lg overflow-hidden"
            >
              <div className="p-4 border-b border-emerald/20">
                <h3 className="text-xl font-orbitron font-semibold text-tinted-white mb-1">
                  {track.title}
                </h3>
                <p className="text-emerald text-sm">{track.artist}</p>
              </div>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={track.embedUrl}
                  title={track.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="flex items-center justify-between p-4 border-t border-emerald/20 bg-rich-black/60">
                <span className="text-sm text-tinted-white/70">Watch on YouTube</span>
                <a
                  href={track.embedUrl.replace('/embed/', '/watch?v=')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neon-green hover:text-tinted-white transition-colors duration-300"
                  aria-label={`Open ${track.title} on YouTube`}
                >
                  <Play className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Play</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center">
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-border bg-transparent hover:bg-neon-green hover:text-rich-black transition-all duration-300 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 justify-center"
            >
              Watch on YouTube
              <Youtube className="w-4 h-4" />
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
