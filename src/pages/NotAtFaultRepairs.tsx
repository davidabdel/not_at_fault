/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, CheckCircle2, XCircle, Wrench, Scale, BadgeDollarSign, Info } from 'lucide-react';
import { PageHeader, Section, CTASection, Accordion, InfoBox } from '../components/UI';
import { HOME_FAQS } from '../constants';

const NotAtFaultRepairs: React.FC = () => {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Not-At-Fault Smash Repairs" 
        subtitle="Your car, your choice. We ensure your vehicle is returned to manufacturer standards using genuine parts—at zero cost to you." 
        category="Accident Specialist"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">What Are Not-At-Fault Repairs?</h2>
            <div className="space-y-6 text-brand-mid-grey leading-relaxed text-lg">
              <p>
                In Australia, if you are involved in a car accident and the other driver is responsible, you have a <strong>legal right to restitution</strong>. This means the at-fault driver (via their insurance) is obligated to pay for your vehicle to be restored to its pre-accident condition.
              </p>
              <p>
                This process is known as a third-party insurance claim. While it sounds simple, insurance companies often try to minimize their costs by using non-genuine parts or directing you to high-volume, low-quality repairers.
              </p>
              <p>
                <strong>Not At Fault Claims</strong> acts as your advocate. We ensure the at-fault party's insurer pays for a high-quality repair that protects the safety and resale value of your vehicle.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "100% Genuine Parts",
                "Lifetime Warranty",
                "Manufacturer Standards",
                "Independent Assessment",
                "Full Resale Protection",
                "No Excess to Pay"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-brand-charcoal font-semibold">
                  <CheckCircle2 className="text-brand-green mr-2" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-light-grey p-8 md:p-12 rounded-brand border border-gray-100">
            <h3 className="text-3xl mb-6">Common Keywords & SEO</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {["not at fault smash repair", "accident repair not my fault", "third party car repair Australia", "not at fault accident repair"].map(tag => (
                <span key={tag} className="bg-white px-3 py-1 rounded-full text-xs font-mono text-brand-mid-grey border border-gray-200">#{tag.replace(/\s+/g, '')}</span>
              ))}
            </div>
            <InfoBox title="Why Choice Matters" type="info">
              Did you know your car's value can drop by up to 15% if it's repaired with non-genuine parts? We protect your investment by strictly using manufacturer-approved components.
            </InfoBox>
          </div>
        </div>
      </Section>

      {/* Comparison Table Section */}
      <Section bg="grey">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Comparison: How We Compare</h2>
          <p className="text-xl text-brand-mid-grey">Why you should never claim through your own insurer if not at fault.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-brand shadow-soft overflow-hidden">
            <thead>
              <tr className="bg-brand-charcoal text-white">
                <th className="px-6 py-5 text-left font-bebas text-2xl tracking-wide uppercase">Feature</th>
                <th className="px-6 py-5 text-center font-bebas text-2xl tracking-wide uppercase bg-brand-orange">Not At Fault Claims</th>
                <th className="px-6 py-5 text-center font-bebas text-2xl tracking-wide uppercase">Your Own Insurer</th>
              </tr>
            </thead>
            <tbody className="text-brand-charcoal font-medium">
              <tr className="border-b border-gray-100">
                <td className="px-6 py-5">Excess Payment</td>
                <td className="px-6 py-5 text-center text-brand-green font-bold bg-brand-orange/5">$0 - Zero Excess</td>
                <td className="px-6 py-5 text-center text-red-500">Usually $500 - $1,500 Upfront</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-5">Choice of Repairer</td>
                <td className="px-6 py-5 text-center text-brand-green font-bold bg-brand-orange/5">Your Choice / Premium Specialist</td>
                <td className="px-6 py-5 text-center text-brand-mid-grey">They choose (Budget focused)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-5">Repair Parts</td>
                <td className="px-6 py-5 text-center text-brand-green font-bold bg-brand-orange/5">100% Genuine Parts</td>
                <td className="px-6 py-5 text-center text-brand-mid-grey">Aftermarket or Recycled often used</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-5">Loan Car Period</td>
                <td className="px-6 py-5 text-center text-brand-green font-bold bg-brand-orange/5">Full repair duration</td>
                <td className="px-6 py-5 text-center text-brand-mid-grey">Limited (e.g. 14 days) or none</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-5">Insurance Premium</td>
                <td className="px-6 py-5 text-center text-brand-green font-bold bg-brand-orange/5">No Impact</td>
                <td className="px-6 py-5 text-center text-brand-mid-grey">Can be affected by claim history</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-8">Repairs FAQ</h2>
          <Accordion items={[
            HOME_FAQS[2], // choice of repairer
            HOME_FAQS[3], // how long
            HOME_FAQS[5], // uninsured
            {
              question: "What happens if my car is written off?",
              answer: "If the cost of repairs exceeds the value of the car, it may be declared a 'total loss' or write-off. In this case, we help you negotiate the fair market value of your vehicle with the at-fault party's insurer to ensure you're compensated correctly."
            }
          ]} />
        </div>
      </Section>

      <Section bg="white" className="pt-0">
        <CTASection />
      </Section>
    </div>
  );
};

export default NotAtFaultRepairs;
