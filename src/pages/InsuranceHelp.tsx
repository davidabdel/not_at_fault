/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FileText, Phone, UserCheck, ShieldAlert, AlertTriangle, CheckCircle2, MessageSquare } from 'lucide-react';
import { PageHeader, Section, CTASection, Accordion, InfoBox } from '../components/UI';
import { HOME_FAQS } from '../constants';
import SEO from '../components/SEO';

const InsuranceHelp: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Insurance Claim Help Australia | Not At Fault Driver Advice"
        description="Confused by insurance claims after an accident? Get expert help for your not-at-fault claim. We handle the insurers, paperwork, and repairs at zero cost."
        canonical="https://notatfaultclaims.com.au/insurance-claim-help"
        breadcrumbs={[
          { name: 'Home', item: 'https://notatfaultclaims.com.au' },
          { name: 'Insurance Help', item: 'https://notatfaultclaims.com.au/insurance-claim-help' }
        ]}
      />
      <PageHeader 
        title="Insurance Claim Help" 
        subtitle="Confused by insurance jargon? Stressed by paperwork? We handle the entire third-party claim process so you don't have to." 
        category="Policy Support"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">What To Do At The Scene</h2>
            <p className="text-xl text-brand-mid-grey mb-8">
              Protect your rights before you even leave the site of the accident. These first steps are critical for a successful not-at-fault claim.
            </p>

            <div className="space-y-4">
              {[
                { step: "1", title: "Stay Calm & Safe", desc: "Turn on hazards, move to safety, and check for injuries." },
                { step: "2", title: "Collect Details", desc: "Get the other driver's Name, Phone, Address, and Registration." },
                { step: "3", title: "Take Photos", desc: "Capture damage, the street layout, and the other driver's license." },
                { step: "4", title: "Call Us First", desc: "Contact us before you call your own insurer for expert guidance." }
              ].map((item, i) => (
                <div key={i} className="flex bg-white p-6 rounded-brand shadow-soft border border-gray-100">
                   <div className="w-10 h-10 bg-brand-orange text-white rounded-full flex-shrink-0 flex items-center justify-center font-bebas text-xl mr-5">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-brand-mid-grey text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-brand-charcoal text-white p-10 rounded-brand shadow-xl">
               <h3 className="text-3xl text-brand-orange mb-6 flex items-center">
                <ShieldAlert className="mr-3" /> Important Warning
               </h3>
               <p className="mb-4 text-gray-300">
                The other driver's insurance company may contact you directly. Be careful. Their goal is to settle the claim as cheaply as possible.
               </p>
               <h4 className="text-xl mb-3 text-white uppercase tracking-wider font-bebas">What to say:</h4>
               <ul className="space-y-2 mb-6">
                 <li className="flex items-start text-sm">
                   <CheckCircle2 className="text-brand-green mr-2 mt-1 flex-shrink-0" size={16} />
                   "My claim is being handled by Not At Fault Claims."
                 </li>
                 <li className="flex items-start text-sm">
                   <CheckCircle2 className="text-brand-green mr-2 mt-1 flex-shrink-0" size={16} />
                   "Please direct all correspondence to my specialist."
                 </li>
               </ul>
               <h4 className="text-xl mb-3 text-white uppercase tracking-wider font-bebas text-red-400">What NOT to say:</h4>
               <ul className="space-y-2">
                 <li className="flex items-start text-sm">
                   <AlertTriangle className="text-red-400 mr-2 mt-1 flex-shrink-0" size={16} />
                   "I think I might have been going a bit fast too."
                 </li>
                 <li className="flex items-start text-sm">
                   <AlertTriangle className="text-red-400 mr-2 mt-1 flex-shrink-0" size={16} />
                   "The damage doesn't look that bad."
                 </li>
                 <li className="flex items-start text-sm">
                   <AlertTriangle className="text-red-400 mr-2 mt-1 flex-shrink-0" size={16} />
                   "I'll accept a cash settlement."
                 </li>
               </ul>
            </div>
            
            <InfoBox title="Your Legal Rights" type="info">
              In Australia, motor vehicle accidents fall under the tort of negligence. You have the right to be 'returned to the position you were in' before the negligent act (the accident) occurred. This is a powerful legal protection we use to your advantage.
            </InfoBox>
          </div>
        </div>
      </Section>

      <Section bg="grey">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Navigating The Claim Process</h2>
          <p className="text-xl text-brand-mid-grey">How we handle the paperwork while you handle your life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { icon: <FileText size={40} />, title: "Paperwork", desc: "We complete all claim forms and legal notifications on your behalf." },
             { icon: <MessageSquare size={40} />, title: "Communication", desc: "No more long hold times. We are the point of contact for all insurers." },
             { icon: <UserCheck size={40} />, title: "Negotiation", desc: "We argue for genuine parts and top-tier repairs so you don't have to." }
           ].map((item, i) => (
             <div key={i} className="bg-white p-10 rounded-brand text-center shadow-soft">
                <div className="text-brand-orange mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-brand-mid-grey leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12">Insurance & Claims FAQ</h2>
          <Accordion items={[
            HOME_FAQS[1], // excess
            HOME_FAQS[4], // premium
            HOME_FAQS[5], // uninsured
            {
              question: "Will I have to go to court?",
              answer: "It is extremely rare for a not-at-fault motor vehicle claim to go to court. Over 99% of our managed claims are settled directly with the insurance companies through negotiation and evidence provision. If a case ever did require legal action, we have the resources to support you through the entire process."
            }
          ]} />
        </div>
      </Section>

      <Section bg="white" className="pt-0">
        <CTASection title="Got insurance questions?" subtitle="Our experts are ready to help. No obligation, no cost." />
      </Section>
    </div>
  );
};

export default InsuranceHelp;
