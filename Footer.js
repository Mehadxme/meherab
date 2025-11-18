import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Facebook, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0 cursor-pointer"
          >
            Meherab Hossain
          </motion.button>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <p className="mb-4 md:mb-0">
            © {currentYear} Meherab Hossain. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> from Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;