import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, Facebook, Instagram, Send, ArrowUpRight, Sparkles } from 'lucide-react';
import { toast } from '../hooks/use-toast';

// Physics-based floating icon component
const FloatingIcon = ({ icon: Icon, url, name, index, total }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const angle = (index / total) * Math.PI * 2;
  const radius = 120;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const springConfig = { stiffness: 150, damping: 15 };
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered, mouseX, mouseY]);

  return (
    <motion.a
      ref={ref}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x,
        y,
      }}
      transition={{ 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      whileHover={{ scale: 1.3, z: 50 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
      }}
      className="absolute p-6 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-2 border-gray-900/20 dark:border-white/20 shadow-2xl cursor-pointer hover:border-gray-900 dark:hover:border-white transition-colors relative overflow-hidden"
      aria-label={name}
    >
      {/* Reflective gradient overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/10 pointer-events-none" />
      
      <motion.div
        animate={{
          rotate: isHovered ? 360 : 0,
        }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <Icon className="w-8 h-8 text-gray-900 dark:text-white" />
      </motion.div>
    </motion.a>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Frontend-only form submission (storing in console for now)
    console.log('Form submission:', formData);
    
    // Simulate submission delay
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/profile.php?id=100095323981228',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/_.meherab__',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:meherab@gmail.com',
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-white dark:bg-black py-20 px-6 overflow-hidden relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300/50 dark:border-gray-700/50 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-black/50 backdrop-blur-xl mb-6 relative overflow-hidden"
          >
            {/* Reflective shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-transparent dark:from-white/10 pointer-events-none rounded-full" />
            
            <Sparkles className="w-4 h-4 text-gray-900 dark:text-white relative z-10" />
            <span className="text-sm font-medium text-gray-900 dark:text-white relative z-10">Get In Touch</span>
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Let's Create<br />Something Amazing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Physics-based Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Center glow effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 blur-3xl"
                />
                
                {/* Orbiting social icons */}
                {socialLinks.map((social, index) => (
                  <FloatingIcon
                    key={social.name}
                    icon={social.icon}
                    url={social.url}
                    name={social.name}
                    index={index}
                    total={socialLinks.length}
                  />
                ))}

                {/* Center text */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="text-center z-10"
                >
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Connect</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Click to interact</div>
                </motion.div>
              </motion.div>
            </div>

            {/* Direct email CTA */}
            <motion.a
              href="mailto:meherab@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="group flex items-center justify-between p-6 rounded-2xl border border-gray-300/50 dark:border-gray-700/50 hover:border-gray-900 dark:hover:border-white transition-all mt-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl relative overflow-hidden"
            >
              {/* Reflective shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent dark:from-white/5 pointer-events-none rounded-2xl" />
              
              <div className="relative z-10">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email me directly</div>
                <div className="text-lg font-medium text-gray-900 dark:text-white">meherab@gmail.com</div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-900 dark:text-white group-hover:rotate-45 transition-transform relative z-10" />
            </motion.a>
          </motion.div>

          {/* Right: Modern Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <motion.label
                  htmlFor="name"
                  animate={{
                    scale: focusedField === 'name' || formData.name ? 0.85 : 1,
                    y: focusedField === 'name' || formData.name ? -24 : 0,
                    x: focusedField === 'name' || formData.name ? 0 : 0,
                  }}
                  className="absolute left-0 top-0 text-gray-600 dark:text-gray-400 pointer-events-none origin-left transition-colors"
                >
                  {focusedField === 'name' || formData.name ? 'Your Name' : 'Name'}
                </motion.label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-300 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white text-gray-900 dark:text-white focus:outline-none transition-all text-lg"
                />
              </div>

              <div className="relative">
                <motion.label
                  htmlFor="email"
                  animate={{
                    scale: focusedField === 'email' || formData.email ? 0.85 : 1,
                    y: focusedField === 'email' || formData.email ? -24 : 0,
                  }}
                  className="absolute left-0 top-0 text-gray-600 dark:text-gray-400 pointer-events-none origin-left transition-colors"
                >
                  {focusedField === 'email' || formData.email ? 'Your Email' : 'Email'}
                </motion.label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-300 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white text-gray-900 dark:text-white focus:outline-none transition-all text-lg"
                />
              </div>

              <div className="relative">
                <motion.label
                  htmlFor="message"
                  animate={{
                    scale: focusedField === 'message' || formData.message ? 0.85 : 1,
                    y: focusedField === 'message' || formData.message ? -24 : 0,
                  }}
                  className="absolute left-0 top-0 text-gray-600 dark:text-gray-400 pointer-events-none origin-left transition-colors"
                >
                  {focusedField === 'message' || formData.message ? 'Your Message' : 'Message'}
                </motion.label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-300 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white text-gray-900 dark:text-white focus:outline-none transition-all resize-none text-lg"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full py-5 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl"
              >
                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none rounded-2xl" />
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-white rounded-2xl"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        ⚡
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </span>
              </motion.button>

              {/* Form hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-sm text-gray-500 dark:text-gray-600"
              >
                I typically respond within 24 hours
              </motion.p>
            </form>
          </motion.div>
        </div>

        {/* Stats or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { label: 'Response Time', value: '< 24h' },
            { label: 'Location', value: 'Bangladesh' },
            { label: 'Availability', value: 'Open' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-3xl border border-gray-200/50 dark:border-gray-800/50 hover:border-gray-900 dark:hover:border-white transition-colors bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl relative overflow-hidden group"
            >
              {/* Reflective gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent dark:from-white/5 pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;