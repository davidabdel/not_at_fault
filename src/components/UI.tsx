/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ChevronRight, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQItem, Testimonial } from '../types';
import { PHONE_NUMBER } from '../constants';

// --- Section Background Wrapper ---
export const Section: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  bg?: 'white' | 'grey' | 'charcoal' | 'pale-orange' | 'orange';
  id?: string;
}> = ({ children, className = '', bg = 'white', id }) => {
  const bgClasses = {
    'white': 'bg-white',
    'grey': 'bg-brand-light-grey',
    'charcoal': 'bg-brand-charcoal text-white',
    'pale-orange': 'bg-brand-pale-orange',
    'orange': 'bg-brand-orange text-white'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[bg]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

// --- Accordion for FAQs ---
export const Accordion: React.FC<{ items: FAQItem[] }> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-white rounded-brand shadow-soft overflow-hidden border border-gray-100"
        >
          <button
            className="w-full text-left px-6 py-5 flex items-center justify-between transition-colors hover:bg-gray-50"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <span className="font-semibold text-lg">{item.question}</span>
            {activeIndex === index ? (
              <Minus size={20} className="text-brand-orange" />
            ) : (
              <Plus size={20} className="text-brand-orange" />
            )}
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-6 pt-0 text-brand-mid-grey leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

// --- Testimonial Card ---
export const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-brand shadow-soft border border-gray-50 flex flex-col h-full">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} />
      ))}
    </div>
    <p className="text-brand-charcoal italic mb-6 flex-grow">"{testimonial.text}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-brand-pale-orange flex items-center justify-center text-brand-orange font-bold mr-4">
        {testimonial.name.charAt(0)}
      </div>
      <div>
        <p className="font-bold text-sm">{testimonial.name}</p>
        <p className="text-xs text-brand-mid-grey">{testimonial.location}</p>
      </div>
    </div>
  </div>
);

// --- CTA Banner Section ---
export const CTASection: React.FC<{ 
  title?: string;
  subtitle?: string;
  phone?: boolean;
}> = ({ 
  title = "Had an accident that wasn't your fault?", 
  subtitle = "Call us now — we'll take it from here.",
  phone = true
}) => (
  <div className="bg-brand-orange text-white rounded-brand p-12 text-center shadow-lg relative overflow-hidden">
    {/* Decorative abstract shapes */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full -ml-16 -mb-16" />
    
    <h2 className="text-4xl md:text-5xl font-bebas tracking-tight mb-4 relative z-10">{title}</h2>
    <p className="text-xl md:text-2xl mb-8 opacity-90 relative z-10">{subtitle}</p>
    
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
      <Link 
        to="/contact" 
        className="w-full sm:w-auto bg-brand-charcoal text-white px-10 py-4 rounded-brand font-bebas text-2xl tracking-wide hover:bg-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
      >
        Get Your Free Assessment
      </Link>
      {phone && (
        <a 
          href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
          className="w-full sm:w-auto border-2 border-white text-white px-10 py-4 rounded-brand font-bebas text-2xl tracking-wide hover:bg-white hover:text-brand-orange transition-all flex items-center justify-center"
        >
          <Phone className="mr-3" /> {PHONE_NUMBER}
        </a>
      )}
    </div>
  </div>
);

// --- Content Page Header ---
export const PageHeader: React.FC<{ 
  title: string; 
  subtitle: string;
  category?: string;
}> = ({ title, subtitle, category }) => (
  <header className="bg-brand-charcoal text-white pt-32 pb-20 md:pt-40 md:pb-28">
    <div className="container mx-auto px-4 md:px-6 text-center">
      {category && (
        <span className="inline-block bg-brand-orange/20 text-brand-orange px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4">
          {category}
        </span>
      )}
      <h1 className="text-5xl md:text-7xl font-bebas tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
        {title}
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  </header>
);

// --- Info Block for Articles/Pages ---
export const InfoBox: React.FC<{ title?: string; children: React.ReactNode; type?: 'info' | 'success' }> = ({ title, children, type = 'info' }) => {
  const styles = {
    info: 'bg-brand-pale-orange border-l-4 border-brand-orange',
    success: 'bg-green-50 border-l-4 border-brand-green'
  };
  
  return (
    <div className={`p-6 rounded-r-brand mb-8 ${styles[type]}`}>
      {title && <h4 className={`text-xl mb-2 flex items-center ${type === 'success' ? 'text-brand-green' : 'text-brand-orange'}`}>
        {type === 'success' && <ChevronRight size={20} className="mr-1" />}
        {title}
      </h4>}
      <div className="text-brand-charcoal opacity-90 leading-relaxed font-semibold">
        {children}
      </div>
    </div>
  );
};
