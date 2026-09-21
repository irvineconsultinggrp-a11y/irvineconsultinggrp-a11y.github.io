import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { EASE, EASE_IN_OUT, EASE_SOFT } from '../lib/motion';

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
  const [expanded, setExpanded] = useState(false);
  const collapseTimer = useRef(null);
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

  const handleMouseEnter = () => {
    clearTimeout(collapseTimer.current);
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    collapseTimer.current = setTimeout(() => setExpanded(false), 120);
  };

  useEffect(() => () => clearTimeout(collapseTimer.current), []);

  const pillSpring = { type: 'spring', stiffness: 420, damping: 36, mass: 0.7 };

  const activeLink = links.find((l) => isActivePath(l.to, location.pathname));
  const activeIndex = links.indexOf(activeLink);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex items-center justify-center relative">
        {/* Desktop Nav */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: -16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`hidden md:flex items-center rounded-full py-1.5 transition-all duration-500 cursor-pointer ${
            scrolled
              ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-black/[0.06]'
              : 'bg-white/15 backdrop-blur-sm'
          }`}
          style={{ paddingLeft: 8, paddingRight: 8 }}
        >
          {links.map((link, i) => {
            const active = isActivePath(link.to, location.pathname);
            const distFromActive = Math.abs(i - activeIndex);

            return (
              <motion.div
                key={link.to}
                initial={false}
                animate={{
                  width: expanded || active ? 'auto' : 0,
                  opacity: expanded || active ? 1 : 0,
                }}
                transition={{
                  width: {
                    duration: expanded ? 0.45 : 0.35,
                    ease: EASE_SOFT,
                    delay: expanded ? distFromActive * 0.04 : (links.length - 1 - distFromActive) * 0.03,
                  },
                  opacity: {
                    duration: expanded ? 0.3 : 0.2,
                    ease: EASE,
                    delay: expanded ? distFromActive * 0.04 + 0.08 : 0,
                  },
                }}
                className="overflow-hidden"
              >
                <Link
                  to={link.to}
                  aria-current={active ? 'page' : undefined}
                  className={`relative block whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
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
              </motion.div>
            );
          })}
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
