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
    { name: 'Our Services', path: '/not-at-fault-repairs' },
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
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[14px] font-sans font-medium transition-colors hover:text-brand-orange ${
                location.pathname === link.path ? 'text-brand-orange' : 'text-brand-mid-grey'
              }`}
            >
              {link.name}
            </Link>
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
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`text-2xl font-bebas tracking-wide w-full text-center py-2 ${
                    location.pathname === link.path ? 'text-brand-orange' : 'text-brand-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
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
