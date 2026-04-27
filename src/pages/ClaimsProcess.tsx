import React from 'react';
import { PageHeader, Section, CTASection } from '../components/UI';

const ClaimsProcess: React.FC = () => {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Car Accident Claims Process" 
        subtitle="A step-by-step guide to the car accident claims process when you are not at fault." 
      />
      <Section className="bg-white py-24">
        <div className="max-w-[800px] mx-auto px-4 prose prose-lg font-sans text-brand-charcoal leading-relaxed space-y-6">
          <p>Navigating the aftermath of a motor vehicle collision can feel overwhelming, especially when dealing with insurance companies. Understanding the <strong>car accident claims process</strong> is vital to ensuring your vehicle is repaired correctly, your out-of-pocket expenses are covered, and your stress is minimized. This guide breaks down the typical claims journey, focusing particularly on the optimal route for drivers who were not at fault.</p>
          <h2 className="text-3xl font-bebas uppercase mt-12 mb-4">Step 1: Information Gathering</h2>
          <p>The foundation of a smooth car accident claims process is built at the scene of the collision. To successfully lodge a claim, especially against a third party, you must collect accurate and comprehensive information. This includes the full name, contact details, and vehicle registration of the at-fault driver. Crucially, you must also obtain their insurance provider details. Without this information, progressing the claim becomes significantly more difficult. Taking photos of the vehicles, the damage, and the surrounding environment serves as essential visual evidence to support your version of events.</p>
          <h2 className="text-3xl font-bebas uppercase mt-12 mb-4">Step 2: Choosing Your Claim Pathway</h2>
          <p>If you are not at fault, you essentially have two main pathways to navigate the car accident claims process. The first is lodging a claim through your own comprehensive insurance policy. While seemingly straightforward, this often requires you to pay your basic excess upfront (which may take months to be refunded) and can potentially impact your no-claim bonus until the insurer recovers the costs. Furthermore, you are usually bound by the insurer's preferred repair network and restrictive hire car policies.</p>
          <p>The far superior alternative is the second pathway: utilizing an independent accident management service. By taking this route, you bypass your own insurer entirely. The accident management company exercises your common law rights to claim directly against the at-fault driver's insurance. This ensures you pay zero excess, receive a guaranteed free replacement vehicle, and maintain complete control over the quality of your repairs.</p>
          <h2 className="text-3xl font-bebas uppercase mt-12 mb-4">Step 3: Assessment and Authorization</h2>
          <p>Once the claim is initiated through an accident management service, the next phase of the car accident claims process involves assessing the damage. An independent, qualified vehicle assessor will inspect your car to accurately document all necessary repairs. Because these assessors are independent—and not employed directly by an insurance company seeking to cut costs—they are meticulous in identifying both cosmetic and underlying structural damage.</p>
          <p>Following the assessment, a detailed repair quote is submitted to the at-fault party's insurer for authorization. A reputable accident management company handles all negotiations during this stage, advocating on your behalf to ensure no corners are cut and that manufacturer-approved repair methods are utilized.</p>
          <h2 className="text-3xl font-bebas uppercase mt-12 mb-4">Step 4: Repairs and Mobility</h2>
          <p>Upon authorization, your vehicle enters the repair phase. The car accident claims process should not leave you stranded during this time. As a not-at-fault driver, you will be provided with a free "like-for-like" loan car to drive while your vehicle is in the workshop. The repair center will order genuine parts and commence the restoration of your vehicle to its pre-accident condition.</p>
          <h2 className="text-3xl font-bebas uppercase mt-12 mb-4">Step 5: Quality Control and Handover</h2>
          <p>The final step in the car accident claims process involves a rigorous quality control check. The repaired vehicle is inspected to ensure it meets strict safety and aesthetic standards. Once cleared, you return your loan car and drive away in your fully restored vehicle. The accident management company finalizes the invoicing directly with the at-fault insurer, concluding the process with absolutely no financial burden placed on you. By understanding and utilizing the right car accident claims process, you transform a highly stressful event into a seamless, managed experience.</p>
        </div>
      </Section>
      <Section className="pt-0">
        <CTASection />
      </Section>
    </div>
  );
};

export default ClaimsProcess;
