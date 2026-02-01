import { motion } from 'framer-motion'
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-sm md:text-base tracking-widest text-cyan-400 uppercase font-mono">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Seema <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Sahu</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                Frontend Developer
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-xl">
                Building modern, fast and user-friendly applications with
                <span className="text-cyan-300"> React</span> and
                <span className="text-blue-400"> Flutter</span>
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="mailto:seemacse1@gmail.com" className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-900/30">
                <SiGmail className="text-lg" />
                <span>seemacse1@gmail.com</span>
              </a>
              <a href="tel:+919320916987" className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-white hover:text-black transition-all duration-300 group">
                <span className="group-hover:scale-105 block">📞 9320916987</span>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <FaDownload />
                Download Resume
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="px-8 py-3 border-2 border-gray-600 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                View Projects
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-spin-slow"></div>

              {/* Image container */}
              <motion.div
                animate={floatAnimation}
                className="relative w-full h-full rounded-full overflow-hidden border-8 border-black bg-gradient-to-br from-gray-900 to-black"
              >
                <img
                  src="/images/seema_image.png"
                  alt="Seema Sahu"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  }}
                />
              </motion.div>

              {/* Floating tech badges */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-2 border-dashed border-cyan-500/30"
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-xs font-bold">React</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full border-2 border-dashed border-purple-500/30"
              >
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-xs font-bold">Flutter</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}