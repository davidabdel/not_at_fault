/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PHONE_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', path: '/how-it-works' },
    { 
      name: 'Our Services', 
      path: '/not-at-fault-repairs',
      subLinks: [
        { name: 'Not At Fault Accident', path: '/not-at-fault-accident' },
        { name: 'Replacement Vehicle', path: '/replacement-vehicle-after-accident' },
        { name: 'Claims Process', path: '/car-accident-claims-process' },
        { name: 'Who Pays For Damages?', path: '/who-pays-for-damages-not-at-fault' },
      ]
    },
    { name: 'Free Loan Car', path: '/free-loan-car' },
    { name: 'Insurance Help', path: '/insurance-claim-help' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 h-20 flex items-center"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={closeMenu}
          className="font-bebas text-2xl md:text-3xl tracking-tight leading-none"
        >
          <span className="text-brand-charcoal">NOT AT FAULT</span> <span className="text-brand-orange">CLAIMS</span>
        </Link>

        {/* Desktop Nav - Centered */}
        <div className="hidden lg:flex items-center space-x-6 h-full">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group h-full flex items-center">
              <Link
                to={link.path}
                className={`text-[14px] font-sans font-medium transition-colors hover:text-brand-orange py-2 ${
                  location.pathname === link.path ? 'text-brand-orange' : 'text-brand-mid-grey'
                }`}
              >
                {link.name}
              </Link>
              {link.subLinks && (
                <div className="absolute top-[80px] left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 mt-0 z-50">
                  {link.subLinks.map(subLink => (
                    <Link
                      key={subLink.path}
                      to={subLink.path}
                      className="block px-4 py-2.5 text-[14px] text-brand-charcoal hover:bg-brand-light-grey hover:text-brand-orange transition-colors"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <a 
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
            className="flex items-center text-brand-charcoal font-bold text-sm tracking-tight hover:text-brand-orange transition-colors"
          >
            <Phone size={16} className="mr-2 text-brand-charcoal" />
            {PHONE_NUMBER}
          </a>
          <Link 
            to="/contact" 
            className="bg-brand-orange text-white px-6 py-3 rounded-full font-bebas text-lg tracking-widest hover:bg-brand-charcoal transition-all duration-300 uppercase shadow-sm"
          >
            Get Help Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-charcoal p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 overflow-hidden flex flex-col pt-8 pb-12"
          >
            <div className="flex flex-col items-center space-y-6 px-6">
              {navLinks.map((link) => (
                <div key={link.path} className="w-full flex flex-col items-center">
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className={`text-2xl font-bebas tracking-wide w-full text-center py-2 ${
                      location.pathname === link.path ? 'text-brand-orange' : 'text-brand-charcoal'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="flex flex-col items-center space-y-3 mt-2 w-full bg-brand-light-grey/50 py-4 rounded-xl">
                      {link.subLinks.map(subLink => (
                        <Link
                          key={subLink.path}
                          to={subLink.path}
                          onClick={closeMenu}
                          className="text-[17px] font-sans font-medium text-brand-mid-grey hover:text-brand-orange transition-colors py-1"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <hr className="w-full border-gray-100" />
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
                className="flex items-center text-xl font-bebas tracking-wide text-brand-charcoal"
              >
                <Phone size={20} className="mr-3 text-brand-orange" />
                {PHONE_NUMBER}
              </a>
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className="w-full bg-brand-orange text-white text-center py-4 rounded-brand font-bebas text-xl tracking-wide shadow-soft"
              >
                Get Your Free Repair Assessment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
