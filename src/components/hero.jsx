import { motion } from 'framer-motion'
import { fadeUp } from '../animations/motion'
import { FaUserAstronaut } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="home"
      className="m-w-full min-h-[90%] pl-35 flex items-center justify-between pt-24"
    >
      <div className="max-w-7xl w-full mx-auto px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            Hello, I’m
          </p>

          <h1 className="mt-3 text-5xl md:text-6xl font-bold leading-tight">
            Alok <span className="text-gray-400">Rathore</span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            A passionate <span className="text-white">Flutter & React Developer</span> 
            building modern, fast and user-friendly applications.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-white text-black font-medium rounded hover:scale-105 transition"       onClick={() => scrollTo('contact')}>
              Contact Me
            </button>

            <button className="px-6 py-3 border border-gray-600 rounded hover:bg-white hover:text-black transition">
              View Projects
            </button>
          </div>
        </motion.div>
            
        {/* RIGHT IMAGE / ICON */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border border-gray-700 flex items-center justify-center bg-zinc-900">
            <FaUserAstronaut size={140} className="text-gray-500" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
