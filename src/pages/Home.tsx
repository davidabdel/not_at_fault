/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Car, 
  Headset, 
  Wrench, 
  MapPin, 
  Star, 
  Target, 
  Wallet, 
  ClipboardList, 
  Shield, 
  BarChart3,
  ChevronDown
} from 'lucide-react';
import { Section } from '../components/UI';
import { HOME_FAQS, PHONE_NUMBER } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20 lg:pt-0">
        {/* Background Image with Gradient Fade (Desktop) */}
        <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full z-0">
          <div className="relative w-full h-full">
            <img 
              src="/hero-image.png" 
              alt="Silver car in workshop with mechanic" 
              className="w-full h-full object-cover"
            />
            {/* Left fade overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent w-1/3" />
            <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent w-20" />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Column (Content) */}
            <div className="lg:w-[60%] text-left py-12 lg:py-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="font-mono text-[11px] text-brand-orange uppercase tracking-[0.15em] mb-6 font-bold leading-none">
                  AUSTRALIA'S NOT-AT-FAULT SPECIALISTS
                </p>
                <h1 className="flex flex-col mb-8 font-bebas tracking-tight leading-[0.85] uppercase">
                  <span className="text-[64px] md:text-[90px] lg:text-[110px] text-brand-charcoal">NOT AT FAULT IN AN</span>
                  <span className="text-[64px] md:text-[90px] lg:text-[110px] text-brand-charcoal">ACCIDENT?</span>
                  <span className="text-[64px] md:text-[90px] lg:text-[110px] text-brand-orange mt-2">WE HANDLE EVERYTHING.</span>
                </h1>
                <p className="text-[18px] md:text-[20px] text-brand-mid-grey max-w-[540px] mb-10 leading-relaxed font-sans">
                  No excess. No hassle. Free loan car. We manage the entire insurance claim and smash repair process for not-at-fault drivers across Australia — at zero cost to you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Link 
                    to="/contact" 
                    className="bg-brand-orange text-white px-10 h-[56px] rounded-full font-bebas text-[17px] tracking-[0.1em] hover:bg-brand-charcoal transition-all uppercase flex items-center justify-center shadow-lg active:scale-95"
                  >
                    Get Your Free Repair Assessment
                  </Link>
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                    className="border border-brand-charcoal text-brand-charcoal px-8 h-[56px] rounded-full font-bebas text-[17px] tracking-[0.1em] hover:bg-brand-charcoal hover:text-white transition-all uppercase flex items-center justify-center group active:scale-95"
                  >
                    <Phone className="mr-3" size={18} /> Call Us Now
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column (Mobile Image / Desktop Floating Card) */}
            <div className="lg:w-[40%] relative w-full">
               {/* Mobile Image (Visible only on small screens) */}
               <div className="lg:hidden mb-12 relative">
                 <img 
                    src="/hero-image.png" 
                    alt="Silver car in workshop with mechanic" 
                    className="w-full h-auto rounded-[16px] shadow-soft object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-[16px]" />
               </div>

               {/* Floating Card (Always visible) */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="lg:absolute lg:bottom-[-20px] lg:left-[-60px] bg-white p-[18px] px-[24px] rounded-[14px] shadow-xl border border-gray-100 flex items-center gap-5 z-20 max-w-[300px] mx-auto lg:mx-0"
                >
                  <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green flex-shrink-0">
                    <CheckCircle2 size={24} fill="currentColor" className="text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-bebas text-[20px] text-brand-orange leading-none mb-1 uppercase tracking-[0.05em]">Free Loan Car</h4>
                    <p className="text-[14px] text-brand-mid-grey leading-tight font-sans">Stay mobile while we fix your vehicle.</p>
                  </div>
                </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Trust Bar */}
      <section className="bg-brand-light-grey py-5 border-y border-gray-200 mt-16 lg:mt-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-between items-center gap-y-6">
            {[
              { icon: ShieldCheck, label: "No Excess Payable" },
              { icon: Car, label: "Free Loan Car" },
              { icon: Headset, label: "We Handle The Insurer" },
              { icon: Wrench, label: "Lifetime Repair Warranty" },
              { icon: MapPin, label: "Australia Wide" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <item.icon size={16} className="text-brand-mid-grey" />
                <span className="font-sans font-bold text-[11px] text-brand-mid-grey uppercase tracking-[0.12em]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <Section className="bg-white py-24">
        <div className="text-center mb-20">
          <p className="font-mono text-[11px] text-brand-orange uppercase tracking-[0.15em] mb-4 font-bold">How It Works</p>
          <h2 className="text-5xl md:text-6xl text-brand-charcoal leading-tight">Three Simple Steps. Zero Cost to You.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative max-w-[1240px] mx-auto mb-20">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[40%] left-[15%] right-[15%] h-px border-t-[2px] border-brand-orange opacity-20 -z-0" />
          
          {[
            { 
              step: "01", 
              title: "Call Us or Submit Online", 
              desc: "Get in touch with our team or complete our quick online form. It only takes a minute." 
            },
            { 
              step: "02", 
              title: "We Handle Everything", 
              desc: "We manage the claim, liaise with the at-fault insurer and organise repairs. You don't lift a finger." 
            },
            { 
              step: "03", 
              title: "Drive Away Repaired", 
              desc: "We repair your vehicle to the highest standard and get you back on the road." 
            }
          ].map((item, idx) => (
            <div key={idx} className="relative z-10 px-4 group mb-12 md:mb-0">
              <div className="bg-white p-8 md:p-12 text-left flex flex-col items-start border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="relative mb-8 w-full flex justify-between items-center">
                   <span className="text-[90px] font-bebas text-brand-orange leading-none select-none opacity-10 font-bold">
                     {item.step}
                   </span>
                </div>
                <h3 className="text-2xl md:text-3xl mb-4 text-brand-charcoal font-bebas tracking-wide uppercase leading-tight">{item.title}</h3>
                <p className="text-brand-mid-grey font-sans leading-relaxed text-[15px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            to="/contact" 
            className="bg-brand-orange text-white px-10 h-[52px] rounded-full font-bebas text-[15px] tracking-[0.1em] hover:bg-brand-charcoal transition-all uppercase flex items-center justify-center shadow-md active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-brand-light-grey py-24">
        <div className="text-center mb-20">
          <p className="font-mono text-[11px] text-brand-orange uppercase tracking-[0.15em] mb-4 font-bold">Why Choose Us</p>
          <h2 className="text-5xl md:text-6xl text-brand-charcoal">Why Drivers Choose Not at Fault Claims</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
          {[
            { title: "No Excess Payable", icon: ShieldCheck, desc: "As a not-at-fault driver, you pay nothing. No excess, no hidden costs." },
            { title: "Free Loan Car", icon: Car, desc: "We provide a modern loan car so you can stay on the move while we repair your vehicle." },
            { title: "We Handle The Insurer", icon: Headset, desc: "We take care of all the paperwork and conversations with the insurance company." },
            { title: "Lifetime Repair Warranty", icon: Wrench, desc: "Our repairs are backed by a lifetime warranty for as long as you own the vehicle." },
            { title: "Quality You Can Trust", icon: Target, desc: "Manufacturer-approved repairs using genuine parts and industry-leading standards." },
            { title: "Australia Wide", icon: MapPin, desc: "With a network of trusted repairers across Australia, we've got you covered wherever you are." }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[12px] shadow-sm border border-gray-100 flex gap-6 items-start hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-14 h-14 bg-brand-pale-orange rounded-full flex items-center justify-center text-brand-orange flex-shrink-0">
                 <benefit.icon size={28} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl mb-2 text-brand-charcoal font-bebas leading-tight tracking-wide uppercase">{benefit.title}</h3>
                <p className="text-brand-mid-grey text-[14px] leading-relaxed font-sans">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>


      {/* Social Proof Section */}
      <Section className="bg-white py-24">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-[5rem] text-brand-charcoal font-bebas leading-[0.9] uppercase max-w-4xl mx-auto">4,800+ Australians Have Let Us Handle It</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1240px] mx-auto mb-20 px-4">
           {[
             { name: "Sarah T.", location: "Sydney, NSW", quote: "I had no idea I didn't have to pay anything. They had my car fixed and a loan car in my driveway the same day." },
             { name: "Marcus R.", location: "Melbourne, VIC", quote: "The whole thing was sorted in 48 hours. I didn't have to make a single call to the insurer myself." },
             { name: "Priya K.", location: "Brisbane, QLD", quote: "Absolutely seamless. They knew exactly what to do and kept me updated the whole way through." }
           ].map((t, idx) => (
             <div key={idx} className="bg-white p-10 rounded-[10px] shadow-soft border border-gray-50 flex flex-col">
               <div className="flex text-[#FFD700] mb-6 gap-0.5">
                 {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" stroke="none" />)}
               </div>
               <p className="text-brand-charcoal font-sans leading-relaxed mb-8 flex-grow tracking-tight text-[16px]">"{t.quote}"</p>
               <div>
                 <p className="font-bold text-brand-charcoal text-[15px] mb-1 font-sans">{t.name}</p>
                 <p className="text-brand-mid-grey text-[13px] font-sans tracking-tight uppercase font-medium">{t.location}</p>
               </div>
             </div>
           ))}
        </div>

        {/* Stats bar */}
        <div className="bg-brand-light-grey py-12 px-6 flex flex-wrap justify-center md:justify-around items-center gap-10 md:gap-4 max-w-[1240px] mx-auto border border-gray-100 relative overflow-hidden">
          {[
            { value: "4,800+", label: "Claims Handled" },
            { value: "98%", label: "Customer Satisfaction" },
            { value: "$0", label: "Paid By Our Clients" },
            { value: "30 Min", label: "Loan Car Turnaround" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center px-4">
              <p className="text-4xl md:text-[3.5rem] font-bebas text-brand-orange leading-none mb-3 tracking-tighter">{stat.value}</p>
              <p className="font-sans font-bold text-[11px] text-brand-mid-grey uppercase tracking-[0.15em] opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-[780px] mx-auto">
          <h2 className="text-5xl md:text-6xl text-brand-charcoal text-center mb-16 uppercase tracking-tight">Common Questions About Not-At-Fault Claims</h2>
          <div className="space-y-2">
            {HOME_FAQS.map((faq, idx) => (
               <details key={idx} className="group border-b border-gray-200 overflow-hidden">
                 <summary className="flex items-center justify-between cursor-pointer list-none py-6 px-1 hover:bg-gray-50/50 transition-colors">
                   <h3 className="text-[19px] md:text-[22px] text-brand-charcoal font-sans font-bold leading-tight pr-8 normal-case tracking-tight">{faq.question}</h3>
                   <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-brand-orange flex-shrink-0 group-open:bg-brand-orange group-open:text-white transition-all">
                      <ChevronDown size={20} className="transition-transform group-open:rotate-180" />
                   </div>
                 </summary>
                 <div className="px-1 pb-8 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-2 duration-300">
                   <p className="text-brand-mid-grey font-sans leading-relaxed text-[17px] max-w-[700px]">
                     {faq.answer}
                   </p>
                 </div>
               </details>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Footer Banner */}
      <section className="bg-brand-orange py-24 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-[5.5rem] tracking-tight leading-[0.9] text-white mb-6 uppercase font-bebas">Had an accident that wasn't your fault?</h2>
          <p className="text-white text-[19px] md:text-[22px] font-sans mb-12 max-w-[640px] mx-auto leading-relaxed">
            Call us now — we'll take it from here. No excess, no hassle, no cost to you.
          </p>
          <div className="flex flex-col items-center gap-10">
            <Link 
              to="/contact" 
              className="border-[2px] border-white text-white px-12 h-[64px] rounded-full font-bebas text-[20px] tracking-[0.1em] hover:bg-white hover:text-brand-orange transition-all uppercase flex items-center justify-center shadow-xl active:scale-95"
            >
              Get Your Free Assessment
            </Link>
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="text-white text-5xl md:text-8xl font-bebas tracking-wider hover:opacity-80 transition-opacity font-bold"
            >
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
