import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaEye, FaGithub, FaStar } from 'react-icons/fa'

const projects = [
  {
    title: 'Mr. Groomer',
    description: 'Dubai-based pet grooming booking app with modern UI, real-time booking system, and service management.',
    tech: ['React', 'Node.js', 'Tailwind CSS', 'Firebase'],
    status: 'Live',
    image: '/images/mr_groomer.png',
    liveLink: 'https://groomer.nablean.com',
    githubLink: '#',
    features: [
      'Responsive design with pixel-perfect UI',
      'Real-time booking system',
      'Service filtering by pet type',
      'Admin dashboard for management'
    ]
  },
  {
    title: 'Outbox Education Platform',
    description: 'Online education platform with course management, student dashboard, and interactive learning features.',
    tech: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB'],
    status: 'Live',
    image: '/images/outbox.png',
    liveLink: 'https://outbox.nablean.com',
    githubLink: '#',
    features: [
      'Course management system',
      'Student progress tracking',
      'Interactive learning modules',
      'Payment integration'
    ]
  },
  // {
  //   title: 'Delivery App',
  //   description: 'Flutter-based delivery application with real-time tracking, order management, and driver allocation.',
  //   tech: ['Flutter', 'Firebase', 'Google Maps', 'GetX'],
  //   status: 'In Progress',
  //   image: '/projects/delivery-app.jpg',
  //   liveLink: '#',
  //   githubLink: '#',
  //   features: [
  //     'Real-time order tracking',
  //     'Driver allocation system',
  //     'Push notifications',
  //     'Payment gateway integration'
  //   ]
  // },
  // {
  //   title: 'Admin Dashboard',
  //   description: 'Comprehensive admin dashboard with analytics, user management, and role-based access control.',
  //   tech: ['React', 'Chart.js', 'Tailwind CSS', 'Express'],
  //   status: 'Completed',
  //   image: '/projects/admin-dashboard.jpg',
  //   liveLink: '#',
  //   githubLink: '#',
  //   features: [
  //     'Real-time analytics',
  //     'Role-based access control',
  //     'Data visualization',
  //     'Bulk operations'
  //   ]
  // },
  {
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce platform with product management, cart, checkout, and order tracking.',
    tech: ['React', 'Redux', 'Node.js', 'Stripe'],
    status: 'Completed',
    image: '/images/cc.png',
    liveLink: 'https://cashcropconnect.com',
    githubLink: '#',
    features: [
      'Product catalog with filters',
      'Shopping cart',
      'Secure checkout',
      'Order tracking'
    ]
  },
  {
    title: 'Portfolio Website',
    description: 'Modern animated portfolio website with interactive elements and smooth animations.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Three.js'],
    status: 'Live',
    image: '/images/portfolio.png',
    liveLink: '#',
    githubLink: '#',
    features: [
      'Smooth animations',
      'Responsive design',
      'Dark/light mode',
      'Performance optimized'
    ]
  },
]

export default function Projects() {
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
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 1.1 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
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
            Portfolio
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and development projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 h-full">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20"
                  >
                    {/* Project Image Placeholder */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />

                    </div>
                  </motion.div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Completed'
                      ? 'bg-green-900/30 text-green-400 border bg- border-green-800'
                      : project.status === 'Live'
                        ? 'bg-blue-900/30 text-blue-400 border border-blue-800'
                        : 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                      }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs border border-gray-700">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                        <FaStar className="text-cyan-400 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-900/30 transition-all duration-300"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </motion.a>

                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-700 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <FaGithub />
                      View Code
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaEye className="text-cyan-400" />
              <span className="text-3xl font-bold">10K+</span>
            </div>
            <p className="text-gray-400">Project Views</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaStar className="text-yellow-400" />
              <span className="text-3xl font-bold">4.8</span>
            </div>
            <p className="text-gray-400">Client Rating</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">98%</div>
            <p className="text-gray-400">Satisfaction</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <p className="text-gray-400">Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}