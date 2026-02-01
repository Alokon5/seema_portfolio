import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact
} from 'react-icons/fa'
import {
  SiBootstrap,
  SiFirebase,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const skills = [
    { name: 'React', icon: <FaReact />, level: 90, color: 'from-cyan-500 to-blue-600', category: 'Frontend' },
    { name: 'JavaScript', icon: <FaJsSquare />, level: 85, color: 'from-yellow-500 to-orange-500', category: 'Language' },
    { name: 'TypeScript', icon: <SiTypescript />, level: 75, color: 'from-blue-500 to-indigo-600', category: 'Language' },
    // { name: 'Flutter', icon: <SiFlutter />, level: 80, color: 'from-blue-400 to-cyan-500', category: 'Mobile' },
    // { name: 'React Native', icon: <TbBrandReactNative />, level: 70, color: 'from-blue-600 to-purple-600', category: 'Mobile' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 80, color: 'from-green-500 to-green-700', category: 'Backend' },
    { name: 'Firebase', icon: <SiFirebase />, level: 75, color: 'from-orange-500 to-yellow-500', category: 'Backend' },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: 'from-orange-500 to-red-500', category: 'Frontend' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: 'from-blue-500 to-blue-700', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85, color: 'from-cyan-400 to-blue-500', category: 'Frontend' },
    { name: 'Bootstrap', icon: <SiBootstrap />, level: 80, color: 'from-purple-500 to-pink-500', category: 'Frontend' },
    { name: 'UI / UX', icon: <FaFigma />, level: 75, color: 'from-pink-500 to-purple-500', category: 'Design' },
    { name: 'Git', icon: <FaGitAlt />, level: 85, color: 'from-orange-600 to-red-600', category: 'Tools' },
  ]

  const categories = ['All', ...new Set(skills.map(s => s.category))]

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeCategory === category
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                : 'bg-gray-900 border border-gray-800 text-gray-300 hover:bg-gray-800'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map(skill => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.25 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6"
              >
                <div className={`text-5xl mb-6 bg-gradient-to-br ${skill.color} bg-clip-text text-transparent`}>
                  {skill.icon}
                </div>

                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                  <span className="text-sm bg-gray-800 px-3 py-1 rounded-full">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <span className="inline-block mt-4 text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-400">
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
