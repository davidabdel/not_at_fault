import React from 'react';
import { PageHeader, Section, CTASection } from '../components/UI';

const ReplacementVehicle: React.FC = () => {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Replacement Vehicle After Accident" 
        subtitle="How to get a free like-for-like replacement vehicle after a car accident." 
      />
      <Section className="bg-white py-24">
        <div className="max-w-[800px] mx-auto px-4 prose prose-lg font-sans text-brand-charcoal leading-relaxed space-y-6">
          <p>Losing the use of your car after a collision is incredibly disruptive. For most Australians, a car is essential for commuting to work, dropping the kids at school, and managing daily life. If the collision wasn't your fault, you shouldn't have to catch the bus, pay out-of-pocket for a rental, or borrow a friend's car. Under Australian law, you are entitled to a <strong>replacement vehicle after accident</strong> at absolutely no cost to you.</p>
          <h2 className="text-3xl font-bebas uppercase mt-12 mb-4">Your Right to a Replacement Vehicle</h2>
          <p>When you are the innocent party in a motor vehicle collision, common law dictates that you have the right to be placed in the same position you would have been in had the accident never occurred. This legal principle, known as "restitutio in integrum," firmly establishes your right to a replacement vehicle after an accident for the entire duration your own car is unroadworthy or undergoing repairs.</p>
          <p>Furthermore, you are generally entitled to what is known as a "like-for-like" replacement. This means if you drive a heavy-duty ute required for your trade, you are entitled to a comparable ute. If you drive a seven-seater family SUV, you should not be forced into a tiny compact car by an insurance company trying to save money. The replacement vehicle should match the functionality and general standard of your damaged vehicle.</p>
          <h2 className="text-3xl font-bebas uppercase mt-12 mb-4">Who Pays for the Hire Car?</h2>
          <p>The cost of the replacement vehicle after an accident is the legal responsibility of the at-fault driver, and by extension, their insurance company. Because their negligence caused you to be without your vehicle, they are legally obligated to cover the reasonable costs you incur to remain mobile.</p>
          <p>This is where specialized accident management services provide immense value. Instead of you paying for a rental car upfront and hoping the other insurance company reimburses you months later, an accident management company will provide you with the replacement vehicle immediately and recover the rental costs directly from the at-fault party's insurer on your behalf. This means zero upfront costs and zero financial risk for you.</p>
          <h2 className="text-3xl font-bebas uppercase mt-12 mb-4">Why Not Just Use Your Own Insurance?</h2>
          <p>Many drivers mistakenly believe that their own comprehensive insurance policy will automatically cover a replacement vehicle. Unfortunately, this is rarely the case unless you have specifically paid extra for a "hire car option" on your premium.</p>
          <p>Even if you do have this optional extra, insurance policies often come with strict limitations. They might cap the hire car period at 14 or 21 days, regardless of how long the actual smash repairs take due to parts delays. They may also restrict the type of vehicle provided to the cheapest available category. By exercising your common law rights through a not-at-fault claims service, your replacement vehicle after an accident is provided for the exact duration of your repairs, with no arbitrary time limits, and is matched to your specific vehicle needs.</p>
          <h2 className="text-3xl font-bebas uppercase mt-12 mb-4">How the Process Works</h2>
          <p>Securing your replacement vehicle after an accident is a straightforward process when managed correctly. Once you contact a specialist service and confirm that you were not at fault and have the other driver's details, the process moves swiftly.</p>
          <p>A vehicle is typically delivered directly to your home, workplace, or the smash repair shop. You sign a standard rental agreement, but the invoice is directed to the at-fault insurer, not you. You keep the car for as long as your own vehicle is off the road. Once your car is perfectly repaired and ready for collection, you simply hand the keys of the replacement vehicle back. It is a seamless transition designed to minimize the disruption to your daily routine.</p>
          <p>Don't let someone else's bad driving leave you stranded. If you need a replacement vehicle after an accident, reach out today to secure your free loan car and let the experts handle the insurance companies.</p>
        </div>
      </Section>
      <Section className="pt-0">
        <CTASection />
      </Section>
    </div>
  );
};

export default ReplacementVehicle;
