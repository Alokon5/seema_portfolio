import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Delivery App',
    desc: 'Flutter based delivery application with real-time tracking.',
    tech: ['Flutter', 'Firebase'],
  },
  {
    title: 'Admin Dashboard',
    desc: 'React admin dashboard with charts and role-based access.',
    tech: ['React', 'Tailwind'],
  },
  {
    title: 'Portfolio Website',
    desc: 'Animated personal portfolio built with React & Framer Motion.',
    tech: ['React', 'Framer Motion'],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-screen min-h-[80%]  flex items-center justify-center"
    >
      <div className="max-w-7xl w-full px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            Projects
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Selected Work
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-zinc-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-zinc-800 flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  Project Preview
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 border border-gray-700 rounded-full text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 flex gap-4 opacity-0 group-hover:opacity-100 transition">
                  <button className="flex items-center gap-2 text-sm border px-4 py-2 rounded hover:bg-white hover:text-black transition">
                    <FaExternalLinkAlt />
                    Live
                  </button>

                  <button className="flex items-center gap-2 text-sm border px-4 py-2 rounded hover:bg-white hover:text-black transition">
                    <FaGithub />
                    Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
