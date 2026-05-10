/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Car, Clock, CheckCircle2, ShieldCheck, MapPin, ArrowRight, Info } from 'lucide-react';
import { PageHeader, Section, CTASection, Accordion, InfoBox } from '../components/UI';
import { HOME_FAQS } from '../constants';
import SEO from '../components/SEO';

const LoanCar: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Free Like-For-Like Loan Car After Accident | Not At Fault Claims"
        description="Don't get stranded. Get a free, modern, like-for-like replacement car while your vehicle is in smash repairs. Zero cost to you if you are not at fault."
        canonical="https://notatfaultclaims.com.au/free-loan-car"
        breadcrumbs={[
          { name: 'Home', item: 'https://notatfaultclaims.com.au' },
          { name: 'Free Loan Car', item: 'https://notatfaultclaims.com.au/free-loan-car' }
        ]}
      />
      <PageHeader 
        title="Free Like-For-Like Loan Car" 
        subtitle="Don't get stranded because someone else hit your car. Get a modern, reliable replacement vehicle within 30 minutes of claim approval." 
        category="Mobility Guarantee"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600" alt="Replacement Car 1" className="rounded-brand shadow-md mt-8" referrerPolicy="no-referrer" />
               <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=600" alt="Replacement Car 2" className="rounded-brand shadow-md mb-8" referrerPolicy="no-referrer" />
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white p-6 rounded-brand shadow-xl font-bebas text-2xl text-center">
                LIKE-FOR-LIKE<br/>GUARANTEE
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl mb-6">Stay On The Road, At Zero Cost.</h2>
            <p className="text-xl text-brand-mid-grey leading-relaxed mb-8">
              Being without a car while yours is in smash repairs is more than just an inconvenience—it affects your work, your family, and your life. If you weren't at fault, you are legally entitled to a replacement vehicle.
            </p>

            <div className="space-y-6">
              {[
                { title: "Like-for-Like Vehicles", desc: "If you drive an SUV, we give you an SUV. If you drive a ute for work, we provide a work-ready ute. No downgrades." },
                { title: "Available in 30 Minutes", desc: "Once your not-at-fault claim is approved, we can often have a car ready for you faster than an Uber can arrive." },
                { title: "Full Repair Duration", desc: "Keep the car as long as your repairs take. Whether it's 3 days or 3 weeks, we don't take it back until yours is ready." }
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-12 h-12 bg-brand-pale-orange text-brand-orange rounded-brand flex-shrink-0 flex items-center justify-center mr-4">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-brand-mid-grey">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section bg="grey">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Fleet Features</h2>
          <p className="text-xl text-brand-mid-grey">Modern, clean, and fully insured vehicles ready for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <ShieldCheck size={32} />, title: "Fully Insured", desc: "Our fleet is covered. You only pay a standard refundable deposit." },
            { icon: <Clock size={32} />, title: "Late Models", desc: "All our vehicles are under 3 years old with the latest safety tech." },
            { icon: <MapPin size={32} />, title: "AU Delivery", desc: "We deliver the car to your home, office, or the repair shop." },
            { icon: <Car size={32} />, title: "Tolls Included", desc: "Link your e-toll or use our integrated tags for easy travel." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-brand shadow-soft text-center">
              <div className="text-brand-orange mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-brand-mid-grey text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12">Loan Car FAQ</h2>
          <Accordion items={[
            HOME_FAQS[6], // do I get a loan car
            {
              question: "What type of cars do you have in your fleet?",
              answer: "We have a diverse fleet across Australia, including small hatchbacks, family sedans, luxury European cars, SUVs, and specialized work vehicles like dual-cab 4x4 utes and delivery vans. Our goal is to match you with a vehicle that serves your specific needs."
            },
            {
              question: "How long can I keep the loan car?",
              answer: "You are entitled to keep the vehicle for the entire duration of the 'reasonable' repair period. This includes the time it takes for assessment, parts ordering, and the actual physical repairs. Once your car is ready for collection, you typically have 24 hours to return the loan vehicle."
            },
            {
              question: "What happens if I have another accident in the loan car?",
              answer: "Our cars are fully insured. In the unlikely event of an accident in one of our fleet vehicles, a standard insurance excess applies, just like your own personal policy. We explain all these details clearly before you take the keys."
            }
          ]} />
        </div>
      </Section>

      <Section bg="white" className="pt-0">
        <CTASection title="Need a car immediately?" subtitle="If you were not at fault, you qualify. Don't wait—call us now." />
      </Section>
    </div>
  );
};

export default LoanCar;
