/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Calendar, Clock, ChevronLeft, ChevronRight, Phone, Share2, Facebook, Twitter, Linkedin, FacebookIcon } from 'lucide-react';
import { Section, CTASection } from '../components/UI';
import { BLOG_POSTS, PHONE_NUMBER } from '../constants';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOG_POSTS
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);
    
  if (relatedPosts.length < 3) {
    const additional = BLOG_POSTS
      .filter(p => p.id !== post.id && p.category !== post.category)
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...additional);
  }

  return (
    <div className="flex flex-col">
      {/* Article Header */}
      <header className="bg-brand-charcoal text-white pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={`https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200`} alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center space-x-4">
              <Link to="/blog" className="flex items-center text-brand-orange text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">
                <ChevronLeft size={16} className="mr-1" /> Back to Blog
              </Link>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
              <span className="bg-brand-orange text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bebas tracking-tight leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm font-medium">
               <div className="flex items-center"><Calendar size={16} className="mr-2 text-brand-orange" /> {post.date}</div>
               <div className="flex items-center"><Clock size={16} className="mr-2 text-brand-orange" /> {post.readTime}</div>
               <div className="flex items-center">By <span className="text-white ml-1">Claims Specialist Team</span></div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <Section bg="white" className="py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <article className="lg:w-2/3 max-w-none">
            <div className="markdown-body">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            
            {/* Author Bio */}
            <div className="mt-16 p-8 bg-brand-light-grey rounded-brand border border-gray-100 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-brand-orange rounded-full flex-shrink-0 flex items-center justify-center text-white font-bebas text-3xl">NF</div>
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-bebas mb-1">Not At Fault Claims Team</h4>
                <p className="text-brand-mid-grey text-sm mb-4 leading-relaxed">
                  Our team of insurance experts and smash repair specialists has managed over 4,800 not-at-fault claims across Australia. We are dedicated to protecting driver rights and ensuring hassle-free vehicle restoration.
                </p>
                <div className="flex justify-center sm:justify-start space-x-3 text-brand-orange">
                   <Share2 size={18} className="text-brand-mid-grey mr-2" />
                   <Facebook size={18} className="cursor-pointer hover:scale-110 transition-transform" />
                   <Twitter size={18} className="cursor-pointer hover:scale-110 transition-transform" />
                   <Linkedin size={18} className="cursor-pointer hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              {/* Table of Contents Placeholder */}
              <div className="bg-white p-6 rounded-brand shadow-soft border border-gray-100 hidden md:block">
                <h4 className="text-xl font-bebas mb-4 border-b border-gray-100 pb-2">Quick Navigation</h4>
                <nav className="space-y-3 text-sm font-medium text-brand-mid-grey">
                  <a href="#" className="block hover:text-brand-orange transition-colors">Emergency Scene Steps</a>
                  <a href="#" className="block hover:text-brand-orange transition-colors">Information Collection Guide</a>
                  <a href="#" className="block hover:text-brand-orange transition-colors">What Not To Say To Insurers</a>
                  <a href="#" className="block hover:text-brand-orange transition-colors">Claim Recovery Options</a>
                </nav>
              </div>

              {/* Sidebar CTA */}
              <div className="bg-brand-charcoal text-white p-8 rounded-brand shadow-lg text-center relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-3xl font-bebas text-brand-orange mb-2">FREE CASE REVIEW</h4>
                  <p className="mb-6 opacity-80 text-sm">Was your accident recently? We can tell you in 2 minutes if you qualify for a free loan car.</p>
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
                    className="flex items-center justify-center bg-brand-orange text-white py-3 rounded font-bebas text-xl hover:bg-white hover:text-brand-orange transition-all"
                  >
                    <Phone className="mr-2" size={18} /> {PHONE_NUMBER}
                  </a>
                </div>
              </div>

               {/* Recent Articles Sidebar List */}
               <div className="bg-white p-6 rounded-brand shadow-soft border border-gray-100">
                <h4 className="text-xl font-bebas mb-4 border-b border-gray-100 pb-2">Related Reading</h4>
                <div className="space-y-4">
                  {relatedPosts.map(rp => (
                    <Link key={rp.id} to={`/blog/${rp.slug}`} className="group block">
                      <p className="text-xs font-bold text-brand-orange uppercase mb-1">{rp.category}</p>
                      <p className="text-sm font-semibold group-hover:text-brand-orange transition-colors line-clamp-2">
                        {rp.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Related Articles Bottom Grid */}
      <Section bg="grey">
        <div className="flex justify-between items-end mb-10">
           <h2 className="text-4xl">Related Articles</h2>
           <Link to="/blog" className="text-brand-orange font-bold hover:underline mb-2 flex items-center">View All <ChevronRight size={16} /></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {relatedPosts.map(rp => (
             <div key={rp.id} className="bg-white rounded-brand shadow-soft overflow-hidden border border-gray-100 flex flex-col">
               <div className="h-40 bg-brand-pale-orange" />
               <div className="p-6">
                 <p className="text-xs font-bold text-brand-orange uppercase mb-2">{rp.category}</p>
                 <h4 className="text-xl mb-4 font-bebas tracking-wide transition-colors group-hover:text-brand-orange line-clamp-2 h-14">
                   {rp.title}
                 </h4>
                 <Link 
                   to={`/blog/${rp.slug}`} 
                   className="inline-flex items-center text-brand-orange font-bold text-sm"
                 >
                   Read More <ChevronRight size={14} className="ml-1" />
                 </Link>
               </div>
             </div>
           ))}
        </div>
      </Section>

      <Section bg="white" className="pt-0">
        <CTASection />
      </Section>
    </div>
  );
};

export default BlogPostPage;
