import { motion } from 'framer-motion'
import { fadeUp } from '../animations/motion'
import { FaCode, FaMobileAlt, FaRocket } from 'react-icons/fa'

export default function About() {
  return (
    <section
      id="about"
      className="w-screen min-h-screen/3 pt-24 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            About Me
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Crafting digital experiences with{" "}
            <span className="text-gray-400">clean code</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            I’m a developer focused on building scalable, high-performance
            applications using <span className="text-white">Flutter</span> and{" "}
            <span className="text-white">React</span>. I care deeply about UI,
            animations, and writing maintainable code.
          </p>

          <p className="mt-4 text-gray-400 text-lg max-w-xl">
            My goal is to turn complex problems into simple, elegant solutions
            that users love.
          </p>
        </motion.div>

        {/* RIGHT HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="bg-zinc-900 border border-gray-800 rounded-xl p-6 text-center hover:-translate-y-2 transition">
            <FaCode className="mx-auto text-3xl text-gray-400" />
            <h3 className="mt-4 font-semibold">Clean Code</h3>
            <p className="mt-2 text-sm text-gray-400">
              Maintainable and scalable architecture
            </p>
          </div>

          <div className="bg-zinc-900 border border-gray-800 rounded-xl p-6 text-center hover:-translate-y-2 transition">
            <FaMobileAlt className="mx-auto text-3xl text-gray-400" />
            <h3 className="mt-4 font-semibold">Mobile First</h3>
            <p className="mt-2 text-sm text-gray-400">
              Pixel-perfect mobile & web UI
            </p>
          </div>

          <div className="bg-zinc-900 border border-gray-800 rounded-xl p-6 text-center hover:-translate-y-2 transition">
            <FaRocket className="mx-auto text-3xl text-gray-400" />
            <h3 className="mt-4 font-semibold">Performance</h3>
            <p className="mt-2 text-sm text-gray-400">
              Fast loading & smooth animations
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
