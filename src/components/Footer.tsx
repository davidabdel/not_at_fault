/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { BRAND_TAGLINE, PHONE_NUMBER, BLOG_POSTS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <Link to="/" className="font-bebas text-3xl tracking-tight">
              NOT AT FAULT <span className="text-brand-orange">CLAIMS</span>
            </Link>
            <p className="text-gray-400 font-medium italic">
              "{BRAND_TAGLINE}"
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-xl font-bebas tracking-wide text-brand-orange mb-2">Our Services</h4>
            <ul className="space-y-4 text-gray-300">
              <li><Link to="/not-at-fault-repairs" className="hover:text-white transition-colors">Not-at-Fault Smash Repairs</Link></li>
              <li><Link to="/free-loan-car" className="hover:text-white transition-colors">Free Loan Car Service</Link></li>
              <li><Link to="/insurance-claim-help" className="hover:text-white transition-colors">Insurance Claim Management</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">Total Accident Management</Link></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-xl font-bebas tracking-wide text-brand-orange mb-2">Recent Articles</h4>
            <ul className="space-y-4 text-gray-400">
              {BLOG_POSTS.slice(0, 3).map(post => (
                <li key={post.id}>
                  <Link to={`/blog/${post.slug}`} className="hover:text-white transition-colors text-sm line-clamp-2">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-xl font-bebas tracking-wide text-brand-orange mb-2">Contact Info</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-brand-orange flex-shrink-0" />
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-brand-orange flex-shrink-0" />
                <a href="mailto:help@notatfaultclaims.com.au" className="hover:text-white transition-colors">
                  help@notatfaultclaims.com.au
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-brand-orange flex-shrink-0" />
                <span>Head Office: 1/457-459 Elizabeth Street,<br />Surry Hills, NSW 2010</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Badges Row */}
        <div className="border-t border-gray-800 py-10 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholder for trust badges */}
           <div className="text-xs font-bebas tracking-widest border border-gray-700 px-4 py-2 rounded">VIC ROADS AUTHORISED</div>
           <div className="text-xs font-bebas tracking-widest border border-gray-700 px-4 py-2 rounded">NSW FAIR TRADING</div>
           <div className="text-xs font-bebas tracking-widest border border-gray-700 px-4 py-2 rounded">LIFETIME WARRANTY</div>
           <div className="text-xs font-bebas tracking-widest border border-gray-700 px-4 py-2 rounded">AMBRA MEMBER</div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© {currentYear} Not At Fault Claims Australia. ABN 00 000 000 000. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
