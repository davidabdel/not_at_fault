/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, ChevronRight, Send, ShieldCheck } from 'lucide-react';
import { PageHeader, Section } from '../components/UI';
import { PHONE_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/PLTsF5RFrXSBfkVPz0iA/webhook-trigger/ad8491be-6b5b-4da6-97ac-919f9dd94bcc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Webhook submission failed');
        alert('Something went wrong. Please try calling us directly.');
      }
    } catch (error) {
      console.error('Error submitting webhook:', error);
      alert('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Get Help Now" 
        subtitle="Had an accident? We typically respond within 15 minutes during business hours. Leave your details or call our priority hotline." 
      />

      <Section>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Details */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl mb-8">Direct Contact</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-orange text-white rounded-brand flex items-center justify-center mr-5 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 uppercase tracking-wider font-bebas">Priority Hotline</h4>
                  <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-2xl font-bebas text-brand-orange hover:underline">{PHONE_NUMBER}</a>
                  <p className="text-brand-mid-grey text-sm">24/7 Accident Assistance</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-charcoal text-white rounded-brand flex items-center justify-center mr-5 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 uppercase tracking-wider font-bebas">Email Support</h4>
                  <a href="mailto:help@notatfaultclaims.com.au" className="text-lg font-medium text-brand-charcoal hover:text-brand-orange">help@notatfaultclaims.com.au</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-light-grey text-brand-charcoal rounded-brand flex items-center justify-center mr-5 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 uppercase tracking-wider font-bebas">Service Areas</h4>
                  <p className="text-brand-mid-grey text-sm">Australia-wide coverage including Sydney, Melbourne, Brisbane, Perth, and regional hubs.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-light-grey text-brand-charcoal rounded-brand flex items-center justify-center mr-5 flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 uppercase tracking-wider font-bebas">Business Hours</h4>
                  <p className="text-brand-mid-grey text-sm">Mon-Fri: 8:00 AM — 6:00 PM</p>
                  <p className="text-brand-mid-grey text-sm">After Hours support available 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-pale-orange p-6 rounded-brand border border-brand-orange/10 flex items-center">
              <ShieldCheck className="text-brand-orange mr-4 flex-shrink-0" size={32} />
              <p className="text-sm font-semibold text-brand-charcoal leading-tight">
                "We respect your privacy. Your claim information is securely managed under Australian Privacy Principles."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-brand shadow-soft border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-4xl mb-4">Request Submitted!</h3>
                  <p className="text-brand-mid-grey text-lg mb-8 max-w-md mx-auto leading-relaxed">
                    Thank you. One of our Not-At-Fault specialists will call you within 15 minutes to discuss your claim and organize your loan car.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-brand-orange font-bold uppercase tracking-widest text-sm hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl mb-8">Submit a Quick Assessment</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-brand-mid-grey">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-brand-light-grey border border-gray-200 rounded focus:border-brand-orange focus:outline-none transition-all font-medium"
                          placeholder="John Citizen"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-brand-mid-grey">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-brand-light-grey border border-gray-200 rounded focus:border-brand-orange focus:outline-none transition-all font-medium"
                          placeholder="0400 000 000"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-mid-grey">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-light-grey border border-gray-200 rounded focus:border-brand-orange focus:outline-none transition-all font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-mid-grey">Tell us briefly what happened</label>
                      <textarea 
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-light-grey border border-gray-200 rounded focus:border-brand-orange focus:outline-none transition-all font-medium"
                        placeholder="E.g. Someone reversed into my parked car in Sydney CBD today. I have their details."
                      />
                    </div>


                    <div className="pt-4">
                      <button 
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-orange text-white py-4 rounded font-bebas text-2xl tracking-widest hover:bg-brand-charcoal transition-all shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? 'Sending...' : 'Send Free Assessment Request'} <Send size={20} className="ml-3" />
                      </button>
                    </div>


                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-gray-100 pt-8">
                       {[
                         { title: "Review", desc: "Expert assessment in 15 mins" },
                         { title: "Approval", desc: "Verification of fault" },
                         { title: "Mobile", desc: "Loan car within 2 hours" }
                       ].map((step, i) => (
                         <div key={i} className="flex items-center">
                            <ChevronRight className="text-brand-orange mr-2" size={16} />
                            <div>
                               <p className="text-[10px] font-bold text-brand-orange uppercase leading-none mb-1">{step.title}</p>
                               <p className="text-xs text-brand-mid-grey leading-tight">{step.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                  </form>
                </>
              )}
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-12 w-full h-80 bg-brand-light-grey rounded-brand relative overflow-hidden shadow-soft border border-gray-100 flex items-center justify-center">
               <div className="absolute inset-0 grayscale opacity-40">
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" alt="Map Placeholder" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="relative z-10 bg-white/90 backdrop-blur p-4 rounded shadow-md text-brand-charcoal font-bebas text-xl">
                  1/457-459 Elizabeth Street, Surry Hills
               </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
