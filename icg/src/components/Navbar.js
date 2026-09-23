import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { EASE, EASE_IN_OUT } from '../lib/motion';

const links = [
  { to: '/', label: 'Home' },
  { to: '/students', label: 'Join' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Services' },
  { to: '/events', label: 'Events' },
];

const isActivePath = (path, pathname) => {
  if (path === '/') return pathname === '/';
  return pathname.startsWith(path);
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const pillSpring = { type: 'spring', stiffness: 420, damping: 36, mass: 0.7 };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex items-center justify-center relative">
        {/* Desktop Nav */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: -16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className={`hidden md:flex items-center rounded-full py-1.5 transition-all duration-500 ${
            scrolled
              ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-black/[0.06]'
              : 'bg-white/15 backdrop-blur-sm'
          }`}
          style={{ paddingLeft: 8, paddingRight: 8 }}
        >
          {links.map((link) => {
            const active = isActivePath(link.to, location.pathname);

            return (
              <div key={link.to}>
                <Link
                  to={link.to}
                  aria-current={active ? 'page' : undefined}
                  className={`relative block whitespace-nowrap px-7 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                    active
                      ? scrolled ? 'text-white' : 'text-icgblue'
                      : scrolled
                        ? 'text-icgblue/80 hover:text-icgblue hover:bg-black/[0.04]'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId={reduceMotion ? undefined : 'nav-pill'}
                      className={`absolute inset-0 rounded-full ${
                        scrolled ? 'bg-icgblue shadow-md shadow-icgblue/25' : 'bg-white shadow-md shadow-white/20'
                      }`}
                      transition={reduceMotion ? { duration: 0 } : pillSpring}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </div>
            );
          })}
          <a
            href="https://apply.irvineconsultinggroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-2 whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              scrolled
                ? 'bg-icgblue text-white hover:bg-icgblue/90'
                : 'bg-white text-icgblue hover:bg-white/90'
            }`}
          >
            Apply Now
          </a>
        </motion.div>

        {/* Mobile menu button */}
        <div className="md:hidden absolute right-6">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-icgblue' : 'text-white'}`}
          >
            <motion.svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              {isOpen ? (
                <path fillRule="evenodd" d="M18.3 5.71a1 1 0 00-1.42-1.42L12 9.17 7.12 4.29a1 1 0 10-1.42 1.42L10.59 12l-4.88 4.88a1 1 0 101.42 1.42L12 14.83l4.88 4.88a1 1 0 001.42-1.42L13.41 12l4.89-4.88z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z" clipRule="evenodd" />
              )}
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.34, ease: EASE_IN_OUT }}
            className="md:hidden bg-white/95 backdrop-blur shadow-lg mx-4 rounded-2xl overflow-hidden mb-2"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.to}
                initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: EASE, delay: 0.06 + i * 0.045 }}
              >
                <Link
                  to={link.to}
                  className={`block px-6 py-3 text-sm font-semibold transition-colors ${
                    isActivePath(link.to, location.pathname) ? 'bg-icgblue text-white' : 'text-icgblue hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
