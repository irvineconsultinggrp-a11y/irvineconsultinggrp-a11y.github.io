import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/students', label: 'Join' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Services' },
    { to: '/events', label: 'Events' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex items-center justify-center relative">
        {/* Desktop Nav - Centered pill */}
        <div className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-300 ${scrolled ? 'bg-gray-100' : 'bg-white/20 backdrop-blur-sm'}`}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                isActive(link.to)
                  ? scrolled ? 'bg-icgblue text-white' : 'bg-white text-icgblue'
                  : scrolled ? 'text-icgblue hover:bg-gray-200' : 'text-white hover:bg-white/20'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden absolute right-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-icgblue' : 'text-white'}`}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" d="M18.3 5.71a1 1 0 00-1.42-1.42L12 9.17 7.12 4.29a1 1 0 10-1.42 1.42L10.59 12l-4.88 4.88a1 1 0 101.42 1.42L12 14.83l4.88 4.88a1 1 0 001.42-1.42L13.41 12l4.89-4.88z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur shadow-lg mx-4 rounded-2xl overflow-hidden mb-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-6 py-3 text-sm font-semibold transition-colors ${
                isActive(link.to) ? 'bg-icgblue text-white' : 'text-icgblue hover:bg-gray-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
