import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaFigma,
} from 'react-icons/fa'
import { SiFlutter, SiFirebase } from 'react-icons/si'

export default function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Flutter', icon: <SiFlutter /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'UI / UX', icon: <FaFigma /> },
  ]

  return (
    <section id="skills" className="w-screen min-h-screen pb-50 flex items-center justify-center">
      <div className="max-w-6xl w-full px-10">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex items-center gap-4"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-lg">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
