/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Clock, Calendar, FileText, Wrench, ShieldCheck, ArrowRight, Car } from 'lucide-react';
import { PageHeader, Section, CTASection, Accordion, InfoBox } from '../components/UI';
import { HOME_FAQS } from '../constants';
import SEO from '../components/SEO';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Initial Contact & Assessment",
      icon: <Phone size={32} />,
      customer: "Call us or submit an online form with details of your accident and relevant photos.",
      us: "We assess your eligibility and verify the at-fault party's details.",
      timeline: "Immediate (within 15-30 minutes)",
      details: "During this first call, we'll collect the basic information: who was involved, where it happened, and photos of the damage. We'll also confirm if the other driver has admitted liability or if fault is clear-cut."
    },
    {
      title: "Claim Lodgement & Loan Car",
      icon: <Car size={32} />,
      customer: "Sign our management agreement (one-page, no cost) and pick up your loan car.",
      us: "We lodge the claim against the at-fault driver's insurer and organize your replacement vehicle.",
      timeline: "Same Day (often within 1-2 hours)",
      details: "This is where we take the load off. We deal directly with the third-party insurer to establish the claim. While your car is waiting for repairs, we'll have a like-for-like loan car ready for you."
    },
    {
      title: "Independent Assessment",
      icon: <FileText size={32} />,
      customer: "Zero action required. Keep driving your loan car.",
      us: "An independent specialist assessor inspects your vehicle to ensure all damage is identified and quoted correctly.",
      timeline: "1-2 Business Days",
      details: "We don't trust insurer-led assessments that aim to cut corners. Our independent assessors look for hidden structural damage to ensure your car is restored safely to manufacturer standards."
    },
    {
      title: "Quality Repairs",
      icon: <Wrench size={32} />,
      customer: "Stay mobile with your free loan car.",
      us: "Your vehicle is repaired by one of our specialist partner repairers using genuine parts.",
      timeline: "5-10 Business Days (typical)",
      details: "We monitor the repair progress and push for the fastest possible turnaround without compromising on quality. You'll receive regular updates so you know exactly when your car will be ready."
    },
    {
      title: "Vehicle Delivery",
      icon: <CheckCircle2 size={32} />,
      customer: "Inspect your perfectly repaired vehicle and return the loan car.",
      us: "Final quality check, detailing, and closing of the insurance file.",
      timeline: "Final Day",
      details: "Your car is returned clean and properly repaired. You simply hand back the keys to the loan car. We finalize the payment recovery from the other insurer. You pay $0."
    }
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="How the Accident Claims Process Works | Not At Fault Claims"
        description="Learn our step-by-step process for handling your not-at-fault claim. From initial assessment to vehicle delivery, we handle everything at zero cost to you."
        canonical="https://notatfaultclaims.com.au/how-it-works"
        breadcrumbs={[
          { name: 'Home', item: 'https://notatfaultclaims.com.au' },
          { name: 'How It Works', item: 'https://notatfaultclaims.com.au/how-it-works' }
        ]}
      />
      <PageHeader 
        title="How It Works" 
        subtitle="We take the complexity out of accident claims. From the moment you call until you're back in your repaired car, we've got you covered." 
      />

      {/* Timeline Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12 md:pl-20 pb-16 last:pb-0"
            >
              {/* Vertical line connector */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[23px] md:left-[39px] top-12 bottom-0 w-0.5 bg-brand-orange/20" />
              )}
              
              {/* Step indicator */}
              <div className="absolute left-0 top-0 w-12 h-12 md:w-20 md:h-20 bg-brand-pale-orange text-brand-orange rounded-brand border-2 border-brand-orange/10 flex items-center justify-center shadow-sm">
                {step.icon}
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-3xl md:text-4xl text-brand-charcoal">{step.title}</h3>
                <span className="inline-flex items-center text-sm font-bold text-brand-orange uppercase tracking-wider bg-brand-pale-orange px-3 py-1 rounded mt-2 md:mt-0">
                  <Clock size={14} className="mr-2" /> {step.timeline}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="bg-white p-6 rounded-brand border border-gray-100 shadow-sm">
                  <h4 className="text-lg mb-3 flex items-center text-brand-charcoal">
                    <span className="w-6 h-6 bg-brand-charcoal text-white rounded-full text-xs flex items-center justify-center mr-2">1</span>
                    What You Do
                  </h4>
                  <p className="text-brand-mid-grey leading-relaxed">{step.customer}</p>
                </div>
                <div className="bg-brand-pale-orange/30 p-6 rounded-brand border border-brand-orange/5 shadow-sm">
                  <h4 className="text-lg mb-3 flex items-center text-brand-orange">
                    <span className="w-6 h-6 bg-brand-orange text-white rounded-full text-xs flex items-center justify-center mr-2">2</span>
                    What We Do
                  </h4>
                  <p className="text-brand-mid-grey leading-relaxed">{step.us}</p>
                </div>
              </div>

              <div className="mt-6 text-brand-mid-grey text-sm leading-relaxed max-w-2xl italic">
                {step.details}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section bg="grey">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-12">Expert Advice</h2>
          <InfoBox title="Pro-Tip: At the Scene" type="info">
            Collect as much info as possible. A quick photo of the other driver's license and their registration plate is the most critical piece of evidence. If there are dashcam users nearby, ask for their footage immediately.
          </InfoBox>
          <InfoBox title="Why Use Us Instead of Your Insurer?" type="success">
            When you use your own insurer, you're bound by their policy limits. When we claim against the at-fault party, we operate under common law rights which are significantly broader—often guaranteeing you a better loan car and genuine parts that policies might try to avoid.
          </InfoBox>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-4xl">Still Have Questions?</h2>
        </div>
        <Accordion items={HOME_FAQS.slice(0, 4)} />
        <div className="text-center mt-12">
           <Link to="/contact" className="text-brand-orange font-bold hover:underline">Contact our claims specialists for a free chat →</Link>
        </div>
      </Section>

      <Section bg="white" className="pt-0">
        <CTASection />
      </Section>
    </div>
  );
};

export default HowItWorks;
