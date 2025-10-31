import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, Mail, Github, Twitter } from 'lucide-react'
import { siteConfig } from '../lib/config'
import type { ContactFormData } from '../types'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Stub API call
      console.log('Form submitted:', data)
      alert('Message sent successfully!')
      reset()
    } catch (error) {
      alert('Failed to send message. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-rich-black/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8 glow-text">
            Contact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-orbitron font-semibold mb-6 text-emerald">
              Get In Touch
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-neon-green" />
                <span>{siteConfig.email}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 neon-border rounded-lg flex items-center justify-center hover:bg-neon-green hover:text-rich-black transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 neon-border rounded-lg flex items-center justify-center hover:bg-neon-green hover:text-rich-black transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div>
              <input
                {...register('name')}
                type="text"
                placeholder="Your Name"
                className="w-full bg-rich-black/80 border border-emerald/50 rounded-lg px-4 py-3 focus:border-neon-green focus:outline-none transition-colors duration-300"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                {...register('email')}
                type="email"
                placeholder="Your Email"
                className="w-full bg-rich-black/80 border border-emerald/50 rounded-lg px-4 py-3 focus:border-neon-green focus:outline-none transition-colors duration-300"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...register('message')}
                rows={5}
                placeholder="Your Message"
                className="w-full bg-rich-black/80 border border-emerald/50 rounded-lg px-4 py-3 focus:border-neon-green focus:outline-none transition-colors duration-300 resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full neon-border bg-transparent hover:bg-neon-green hover:text-rich-black transition-all duration-300 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}