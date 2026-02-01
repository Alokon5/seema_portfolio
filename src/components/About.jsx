import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaRocket, FaGraduationCap, FaBriefcase, FaCertificate } from 'react-icons/fa'

export default function About() {
  const education = {
    degree: "B.Tech in Computer Science and Engineering",
    institute: "JK Institute of Engineering",
    location: "Bilaspur, Chhattisgarh",
    duration: "2018 – 2022",
    cgpa: "CGPA: 8.7"
  }

  const experience = [
    {
      role: "Frontend Developer",
      company: "Nable",
      duration: "Jan 2025 – Jul 2025",
      location: "Bilaspur, Chhattisgarh",
      achievements: [
        "Built high-performance full-stack applications with ReactJS and Node.js",
        "Integrated REST APIs and optimized rendering performance",
        "Improved application scalability"
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Siddhi Softwares",
      duration: "Oct 2024 – Dec 2024",
      location: "Bilaspur, Chhattisgarh",
      achievements: [
        "Created responsive web applications with ReactJS and Tailwind CSS",
        "Enhanced user experience by reducing load time by 20%"
      ]
    }
  ]

  const certifications = [
    "Frontend Developer – Nable",
    "Full-Stack Web Development – CodeHelp",
    "ReactJS Advanced Concepts – Coursera",
    "Flutter Firebase Development – Udemy"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl"></div>
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
            About Me
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Crafting digital experiences with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              clean code
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer focused on building scalable, high-performance applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Intro & Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a dedicated developer focused on building scalable, high-performance
                applications using <span className="text-cyan-300">React</span> and{" "}
                <span className="text-blue-400">Flutter</span>. I care deeply about UI,
                animations, and writing maintainable code.
              </p>
              <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                My goal is to turn complex problems into simple, elegant solutions
                that users love. With experience in both frontend and backend development,
                I bring a holistic approach to building digital products.
              </p>
            </motion.div>

            {/* Skills Highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: <FaCode />, title: "Clean Code", desc: "Maintainable architecture" },
                { icon: <FaMobileAlt />, title: "Mobile First", desc: "Responsive design" },
                { icon: <FaRocket />, title: "Performance", desc: "Fast & smooth apps" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 text-center hover:shadow-xl hover:shadow-cyan-900/20 transition-all duration-300"
                >
                  <div className="text-3xl text-cyan-400 mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-900/30 rounded-lg">
                  <FaGraduationCap className="text-2xl text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-sm text-gray-400">Academic Background</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">{education.degree}</h4>
                <p className="text-cyan-300">{education.institute}</p>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{education.location}</span>
                  <span>{education.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{education.cgpa}</span>
                  <span className="px-3 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-sm">
                    Graduated
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-900/30 rounded-lg">
                  <FaBriefcase className="text-2xl text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Experience</h3>
                  <p className="text-sm text-gray-400">Professional Journey</p>
                </div>
              </div>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="pl-4 border-l-2 border-blue-500/50"
                  >
                    <h4 className="text-lg font-semibold">{exp.role}</h4>
                    <p className="text-blue-300">{exp.company}</p>
                    <div className="flex justify-between text-sm text-gray-400 mt-1">
                      <span>{exp.location}</span>
                      <span>{exp.duration}</span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-900/30 rounded-lg">
                  <FaCertificate className="text-2xl text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Certifications</h3>
                  <p className="text-sm text-gray-400">Professional Development</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="px-4 py-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <p className="text-sm text-gray-300">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}