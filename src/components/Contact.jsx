import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheckCircle, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone, FaUser } from 'react-icons/fa';
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.send(
        'service_k47yavn',
        'template_ppfv28v',
        {
          name: formData.name,     // maps to {{name}}
          email: formData.email,   // maps to {{email}}
          message: formData.message, // maps to {{message}}
        },
        'GOdXuyFuUS4aT21de'
      );


      console.log('Email sent:', result.text);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending error:', error);
      alert('Oops! Something went wrong. Try again.');
    }

    setLoading(false);

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };


  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Bilaspur, Chhattisgarh',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 9320916987',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <SiGmail />,
      title: 'Email',
      value: 'seemacse1@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  const socialLinks = [
    {
      icon: <SiGithub />,
      label: 'GitHub',
      url: 'https://github.com/Seema0199',
      color: 'hover:bg-gray-800'
    },
    {
      icon: <SiLinkedin />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/seema-sahu24',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <SiGmail />,
      label: 'Email',
      url: 'mailto:seemacse1@gmail.com',
      color: 'hover:bg-red-500'
    }
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
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [90, 0, 90]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"
        />
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
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Work Together</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project or an idea? I'd love to hear about it. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 bg-gradient-to-br ${info.color} rounded-lg`}>
                    <div className="text-xl">{info.icon}</div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.title}</p>
                    <p className="text-lg font-medium mt-1">{info.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-gray-900 border border-gray-800 rounded-xl ${social.color} transition-all duration-300`}
                  >
                    <div className="text-2xl">{social.icon}</div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-12 text-center"
              >
                <FaCheckCircle className="text-6xl text-green-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-400 mb-6">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-900/30 transition-all duration-300"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 lg:p-12 space-y-8 backdrop-blur-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-3">
                      Your Name
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-cyan-500 transition-all duration-300 hover:border-gray-600"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-3">
                      Email Address
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-cyan-500 transition-all duration-300 hover:border-gray-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm text-gray-400 mb-3">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell me about your project, timeline, and budget..."
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-4 focus:outline-none focus:border-cyan-500 transition-all duration-300 hover:border-gray-600 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-900/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Privacy Note */}
                <p className="text-center text-sm text-gray-500">
                  Your information is secure and will only be used to respond to your inquiry.
                </p>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="mt-20 text-center"
      >
        <p className="text-gray-500">
          © {new Date().getFullYear()} Seema Sahu. All rights reserved.
        </p>
        <p className="text-gray-600 text-sm mt-2">
          Built with React, Framer Motion, and Tailwind CSS
        </p>
      </motion.div>
    </section>
  )
}