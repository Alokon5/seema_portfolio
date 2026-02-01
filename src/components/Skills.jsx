import { motion } from 'framer-motion'
import {
  FaReact, FaNodeJs, FaFigma, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt
} from 'react-icons/fa'
import { SiFlutter, SiFirebase, SiTailwindcss, SiBootstrap, SiTypescript } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

export default function Skills() {
  const skills = [
    {
      name: 'React',
      icon: <FaReact />,
      level: 90,
      color: 'from-cyan-500 to-blue-600',
      category: 'Frontend'
    },
    {
      name: 'JavaScript',
      icon: <FaJsSquare />,
      level: 85,
      color: 'from-yellow-500 to-orange-500',
      category: 'Language'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
      level: 75,
      color: 'from-blue-500 to-indigo-600',
      category: 'Language'
    },
    {
      name: 'Flutter',
      icon: <SiFlutter />,
      level: 80,
      color: 'from-blue-400 to-cyan-500',
      category: 'Mobile'
    },
    {
      name: 'React Native',
      icon: <TbBrandReactNative />,
      level: 70,
      color: 'from-blue-600 to-purple-600',
      category: 'Mobile'
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
      level: 80,
      color: 'from-green-500 to-green-700',
      category: 'Backend'
    },
    {
      name: 'Firebase',
      icon: <SiFirebase />,
      level: 75,
      color: 'from-orange-500 to-yellow-500',
      category: 'Backend'
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 />,
      level: 95,
      color: 'from-orange-500 to-red-500',
      category: 'Frontend'
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt />,
      level: 90,
      color: 'from-blue-500 to-blue-700',
      category: 'Frontend'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
      level: 85,
      color: 'from-cyan-400 to-blue-500',
      category: 'Frontend'
    },
    {
      name: 'Bootstrap',
      icon: <SiBootstrap />,
      level: 80,
      color: 'from-purple-500 to-pink-500',
      category: 'Frontend'
    },
    {
      name: 'UI / UX',
      icon: <FaFigma />,
      level: 75,
      color: 'from-pink-500 to-purple-500',
      category: 'Design'
    },
    {
      name: 'Git',
      icon: <FaGitAlt />,
      level: 85,
      color: 'from-orange-600 to-red-600',
      category: 'Tools'
    },
  ]

  const categories = [...new Set(skills.map(skill => skill.category))]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    })
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest text-cyan-400 uppercase font-mono mb-4">
            Skills & Expertise
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Proficiency</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {['All', ...categories].map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${category === 'All'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-900/30'
                  : 'bg-gray-900 border border-gray-800 text-gray-300 hover:bg-gray-800'
                }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={skill.level}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className={`text-5xl mb-6 bg-gradient-to-br ${skill.color} bg-clip-text text-transparent`}>
                  {skill.icon}
                </div>

                {/* Skill Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <span className="text-sm font-mono bg-gray-800 px-3 py-1 rounded-full">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      variants={progressBarVariants}
                      custom={skill.level}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>

                  {/* Category */}
                  <div className="mt-4">
                    <span className="text-xs text-gray-400 px-3 py-1 bg-gray-800/50 rounded-full">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Effect Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
              4+
            </div>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <p className="text-gray-400">Technologies</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}