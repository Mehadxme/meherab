import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, name: 'Development', desc: 'Building web applications' },
    { icon: Globe, name: 'Explorer', desc: 'Always learning new things' },
    { icon: Zap, name: 'Enthusiast', desc: 'Passionate about technology' },
  ];

  return (
    <section id="about" className="min-h-screen bg-white dark:bg-black py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'm Meherab Hossain, a student from Bangladesh with a passion for exploring the world
            and technology. I love to learn new things and build interesting projects.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-gray-200/50 dark:border-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 transition-all bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-black/50 backdrop-blur-xl relative overflow-hidden group"
            >
              {/* Reflective shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-transparent dark:from-white/10 pointer-events-none rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <skill.icon className="w-12 h-12 text-gray-900 dark:text-white mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-8 py-4 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-black/50 backdrop-blur-xl relative overflow-hidden">
            {/* Reflective overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent dark:from-white/10 pointer-events-none rounded-2xl" />
            
            <div className="relative z-10">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Current Focus</p>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                Learning & Building
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;