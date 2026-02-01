import { motion } from 'framer-motion'
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-screen min-h-[80%] pt-24 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            Contact
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Let’s Work Together
          </h2>
          <p className="mt-4 text-gray-400">
            Have a project or an idea? Feel free to reach out.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 bg-zinc-900/70 backdrop-blur border border-gray-800 rounded-2xl p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="text-sm text-gray-400">Name</label>
            <div className="relative mt-2">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-zinc-900 border border-gray-700 rounded pl-10 pr-4 py-3 focus:outline-none focus:border-white transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <div className="relative mt-2">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-zinc-900 border border-gray-700 rounded pl-10 pr-4 py-3 focus:outline-none focus:border-white transition"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-400">Message</label>
            <textarea
              rows="4"
              placeholder="Tell me about your project..."
              className="mt-2 w-full bg-zinc-900 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-white transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded font-medium hover:scale-[1.02] transition"
          >
            <FaPaperPlane />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
