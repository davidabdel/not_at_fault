/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, Search, Phone } from 'lucide-react';
import { PageHeader, Section, CTASection } from '../components/UI';
import { BLOG_POSTS, PHONE_NUMBER } from '../constants';

const BlogIndex: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', 'Insurance Claims', 'Repair Process', 'Know Your Rights', 'FAQs', 'Real Stories'];
  
  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Resource Centre" 
        subtitle="The Not at Fault Claims Resource Centre — Everything you need to know about accident claims, smash repairs, and your rights as an Australian driver." 
      />

      <Section bg="white" className="py-10 md:py-12 border-b border-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-brand-orange text-white shadow-md' 
                    : 'bg-brand-light-grey text-brand-mid-grey hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-10 pr-4 py-2 bg-brand-light-grey border border-gray-200 rounded-brand focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all text-sm"
            />
          </div>
        </div>
      </Section>

      <Section bg="grey">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Article Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map(post => (
                <div key={post.id} className="bg-white rounded-brand shadow-soft overflow-hidden border border-gray-100 flex flex-col hover:translate-y-[-4px] transition-all duration-300">
                  <div className="h-52 bg-brand-pale-orange overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?auto=format&fit=crop&q=80&w=600" 
                      alt={post.title} 
                      className="w-full h-full object-cover opacity-80" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-brand-orange text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-brand-mid-grey mb-3 space-x-4">
                      <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</span>
                      <span className="flex items-center"><Clock size={12} className="mr-1" /> {post.readTime}</span>
                    </div>
                    <h3 className="text-2xl mb-3 text-brand-charcoal line-clamp-2 leading-tight flex-grow">
                      {post.title}
                    </h3>
                    <p className="text-brand-mid-grey text-sm mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="inline-flex items-center text-brand-orange font-bold text-sm uppercase tracking-wider group"
                    >
                      Read More <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination Placeholder */}
            <div className="mt-12 flex justify-center">
               <div className="flex space-x-2">
                  <button className="w-10 h-10 rounded bg-brand-orange text-white font-bold">1</button>
                  <button className="w-10 h-10 rounded bg-white text-brand-charcoal border border-gray-200 hover:border-brand-orange transition-colors">2</button>
                  <button className="w-10 h-10 rounded bg-white text-brand-charcoal border border-gray-200 hover:border-brand-orange transition-colors">3</button>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              {/* Call CTA Box */}
              <div className="bg-brand-orange text-white p-8 rounded-brand shadow-lg text-center relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-3xl font-bebas mb-2">Had An Accident?</h4>
                  <p className="mb-6 opacity-90 text-sm">Our specialists are standing by to help you with your claim.</p>
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
                    className="flex items-center justify-center bg-brand-charcoal py-3 rounded font-bebas text-xl hover:bg-black transition-colors"
                  >
                    <Phone className="mr-2" size={18} /> {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              {/* Most Popular */}
              <div className="bg-white p-6 rounded-brand shadow-soft border border-gray-100">
                <h4 className="text-xl font-bebas mb-4 border-b border-gray-100 pb-2">Most Popular</h4>
                <div className="space-y-4">
                  {BLOG_POSTS.slice(0, 4).map(post => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                      <p className="text-xs font-bold text-brand-orange uppercase mb-1">{post.category}</p>
                      <p className="text-sm font-semibold group-hover:text-brand-orange transition-colors line-clamp-2">
                        {post.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white p-6 rounded-brand shadow-soft border border-gray-100">
                <h4 className="text-xl font-bebas mb-4 border-b border-gray-100 pb-2">Quick Links</h4>
                <ul className="space-y-3 text-sm font-medium">
                  <li><Link to="/how-it-works" className="hover:text-brand-orange transition-colors flex items-center"><ChevronRight size={14} className="mr-2 text-brand-orange" /> How It Works</Link></li>
                  <li><Link to="/not-at-fault-repairs" className="hover:text-brand-orange transition-colors flex items-center"><ChevronRight size={14} className="mr-2 text-brand-orange" /> Repair Process</Link></li>
                  <li><Link to="/free-loan-car" className="hover:text-brand-orange transition-colors flex items-center"><ChevronRight size={14} className="mr-2 text-brand-orange" /> Free Loan Car</Link></li>
                  <li><Link to="/insurance-claim-help" className="hover:text-brand-orange transition-colors flex items-center"><ChevronRight size={14} className="mr-2 text-brand-orange" /> Insurance Help</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section bg="white">
        <CTASection />
      </Section>
    </div>
  );
};

export default BlogIndex;
