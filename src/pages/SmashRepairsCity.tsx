import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Phone, ArrowDown, ShieldCheck, Car, Wrench, CheckCircle2, ChevronDown, MapPin } from 'lucide-react';

const SmoothScroll = (targetId: string) => {
  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
};

const fireEvent = (eventName: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName);
    
    if (eventName === 'form_submit') {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18137912228/a3QDCJCv3qkcEKSn6shD',
        'value': 1.0,
        'currency': 'AUD'
      });
    }
  }
};

const LeadForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    drivable: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    fireEvent('form_submit');
    
    try {
      await fetch('https://services.leadconnectorhq.com/hooks/PLTsF5RFrXSBfkVPz0iA/webhook-trigger/d733975b-9ff5-40d0-afd7-ffa96ee77df6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: window.location.pathname
        }),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center space-y-4 animate-fade-in">
        <CheckCircle2 size={48} className="text-[#00A86B]" />
        <h3 className="font-bebas text-[28px] text-[#1C1C1C] uppercase">Request Received</h3>
        <p className="font-sans text-[16px] text-[#6B6B6B]">
          Thank you, {formData.fullName.split(' ')[0]}. We'll call you back on {formData.phone} shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label className="sr-only" htmlFor="fullName">Full Name</label>
        <input 
          id="fullName"
          type="text" 
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Your full name" 
          className="w-full h-[52px] px-4 font-sans text-[16px] border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-colors"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="sr-only" htmlFor="phone">Phone Number</label>
        <input 
          id="phone"
          type="tel" 
          value={formData.phone}
          onChange={handleChange}
          placeholder="Best number to call you on" 
          className="w-full h-[52px] px-4 font-sans text-[16px] border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-colors"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="sr-only" htmlFor="email">Email Address</label>
        <input 
          id="email"
          type="email" 
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email address" 
          className="w-full h-[52px] px-4 font-sans text-[16px] border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-colors"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="sr-only" htmlFor="drivable">Is your car drivable?</label>
        <select 
          id="drivable"
          value={formData.drivable}
          onChange={handleChange}
          className="w-full h-[52px] px-4 font-sans text-[16px] border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-colors bg-white appearance-none"
          required
        >
          <option value="" disabled hidden>Is your car drivable?</option>
          <option value="Yes it's drivable">Yes it's drivable</option>
          <option value="No it needs towing">No it needs towing</option>
          <option value="I'm not sure">I'm not sure</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="sr-only" htmlFor="details">Briefly tell us what happened</label>
        <textarea 
          id="details"
          rows={4}
          value={formData.details}
          onChange={handleChange}
          placeholder="e.g. I was rear-ended at a set of lights. The other driver admitted fault." 
          className="w-full py-3 px-4 font-sans text-[16px] border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-colors resize-none"
        ></textarea>
      </div>
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full h-[56px] bg-[#FF5C00] text-white font-bebas text-[18px] tracking-[0.1em] rounded-[10px] uppercase hover:bg-[#E05200] transition-colors mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        aria-label="Submit Form"
      >
        {isSubmitting ? 'SUBMITTING...' : 'GET MY FREE ASSESSMENT →'}
      </button>
      <div className="flex flex-col gap-2 mt-4">
        {[
          "We'll call you back within 15 minutes",
          "Zero cost to you — ever",
          "We handle everything from here"
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-[#6B6B6B] font-sans text-[12px]">
            <CheckCircle2 size={14} className="text-[#00A86B]" />
            {item}
          </div>
        ))}
      </div>
    </form>
  );
};

const FAQAccordion = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border-b border-[#E0E0E0] ${isOpen ? 'border-b-[#FF5C00]' : ''} transition-colors`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left focus:outline-[#FF5C00]"
        aria-expanded={isOpen}
      >
        <span className="font-sans font-bold text-[14px] text-[#1C1C1C] pr-4">{question}</span>
        <ChevronDown size={20} className={`text-[#1C1C1C] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-[#FF5C00]' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-5' : 'max-h-0'}`}>
        <p className="font-sans text-[13px] text-[#6B6B6B] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const SmashRepairsCity: React.FC = () => {
  const { city } = useParams();
  
  // Format city name: lowercase from URL to Title Case
  const cityName = city 
    ? city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() 
    : 'Sydney';

  useEffect(() => {
    document.title = `Smash Repairs ${cityName} — Not At Fault? Zero Cost | Not at Fault Claims`;
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', `Expert smash repairs in ${cityName}. Not at fault? We handle repairs, insurers & your free loan car. No excess. Zero cost. Call 1800 407 911.`);

    // Meta robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', "noindex, nofollow");

    // GA4 Pageview
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: window.location.pathname,
        page_title: `Smash Repairs ${cityName} — Not At Fault? Zero Cost | Not at Fault Claims`
      });
    }

    return () => {
      metaRobots?.setAttribute('content', "index, follow");
    };
  }, [cityName]);

  return (
    <div className="bg-white min-h-screen relative font-sans pb-[56px] md:pb-0">
      {/* SECTION 1 — MINIMAL HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E0E0E0] py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-bebas text-[24px] md:text-[28px] font-bold text-[#1C1C1C] leading-none">NOT AT FAULT</span>
            <span className="font-bebas text-[24px] md:text-[28px] text-[#FF5C00] leading-none -mt-1">CLAIMS</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:0485044333" 
              onClick={() => fireEvent('phone_number_click')}
              className="hidden sm:flex items-center gap-2 font-bold text-[#1C1C1C] text-[18px]"
            >
              <Phone size={18} className="text-[#FF5C00]" />
              1800 407 911
            </a>
            <a 
              href="tel:0485044333" 
              onClick={() => fireEvent('call_button_click')}
              className="bg-[#FF5C00] text-white px-5 py-2 rounded-[100px] font-bebas text-[16px] md:text-[18px] uppercase tracking-wide hover:bg-[#E05200] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1C1C1C]"
            >
              CALL NOW
            </a>
          </div>
        </div>
      </header>

      {/* SECTION 2 — HERO */}
      <section className="bg-white lg:min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 lg:py-0">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side */}
          <div className="w-full lg:w-[60%]">
            <p className="font-mono text-[11px] text-[#FF5C00] uppercase tracking-[0.15em] mb-4 font-bold">
              LOCAL SMASH REPAIR SPECIALISTS
            </p>
            <h1 className="font-bebas text-[40px] md:text-[58px] text-[#1C1C1C] leading-[0.9] mb-2 uppercase tracking-tight">
              EXPERT SMASH REPAIRS IN {cityName.toUpperCase()}.
            </h1>
            <h2 className="font-bebas text-[40px] md:text-[58px] text-[#FF5C00] leading-[0.9] mb-6 uppercase tracking-tight">
              NOT AT FAULT? YOU PAY NOTHING.
            </h2>
            <p className="font-sans text-[16px] text-[#6B6B6B] max-w-[480px] mb-8 leading-relaxed">
              Local smash repair experts across {cityName}. Insurance approved, lifetime warranty. And if the accident wasn't your fault — we handle everything, free loan car included, at zero cost to you.
            </p>
            
            <a 
              href="tel:0485044333" 
              onClick={() => fireEvent('call_button_click')}
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#FF5C00] text-white h-[56px] px-8 rounded-[100px] font-bebas text-[16px] tracking-[0.1em] hover:bg-[#E05200] transition-colors mb-4 uppercase md:animate-none animate-[pulse_2s_infinite]"
            >
              <Phone size={20} />
              CALL US NOW — 1800 407 911
            </a>
            
            <button 
              onClick={() => SmoothScroll('form-section')}
              className="w-full md:w-auto md:ml-4 inline-flex items-center justify-center gap-2 border border-[#1C1C1C] text-[#1C1C1C] h-[56px] px-8 rounded-[100px] font-sans font-bold text-[14px] uppercase hover:bg-[#1C1C1C] hover:text-white transition-colors"
            >
              OR SUBMIT YOUR DETAILS BELOW
              <ArrowDown size={18} />
            </button>
          </div>

          {/* Right Side (Desktop Only) */}
          <div className="hidden lg:block w-[40%]">
            <div className="bg-white rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.07)] border-t-[4px] border-[#FF5C00] p-8">
              <div className="mb-6">
                <h3 className="font-bebas text-[22px] text-[#1C1C1C] uppercase leading-none mb-1">GET HELP NOW</h3>
                <p className="font-sans text-[12px] text-[#6B6B6B]">We'll call you back within 15 minutes</p>
              </div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TRUST BAR */}
      <section className="bg-[#F4F4F4] py-[18px] border-y border-[#E0E0E0]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-y-4 gap-x-2">
            {[
              { icon: MapPin, label: `${cityName.toUpperCase()}'S LOCAL SPECIALISTS` },
              { icon: ShieldCheck, label: "INSURANCE APPROVED" },
              { icon: Car, label: "FREE LOAN CAR" },
              { icon: Wrench, label: "LIFETIME REPAIR WARRANTY" },
              { icon: CheckCircle2, label: "NOT AT FAULT? ZERO COST" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 w-[45%] sm:w-auto">
                <item.icon size={16} className="text-[#6B6B6B]" />
                <span className="font-sans font-bold text-[11px] text-[#6B6B6B] tracking-[0.12em] uppercase whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — FORM SECTION */}
      <section id="form-section" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="font-mono text-[11px] text-[#FF5C00] uppercase tracking-[0.18em] mb-4 font-bold">GET STARTED</p>
            <h2 className="font-bebas text-[36px] text-[#1C1C1C] uppercase leading-tight mb-4">Book Your {cityName} Repair Now.</h2>
            <p className="font-sans text-[16px] text-[#6B6B6B] max-w-[500px] mx-auto">
              Tell us what happened. We'll call you back within 15 minutes and have everything arranged from there.
            </p>
          </div>
          
          <div className="bg-white rounded-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.07)] border-l-[4px] border-[#FF5C00] p-[24px] md:p-[40px] max-w-[600px] mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS */}
      <section className="bg-[#F4F4F4] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <p className="font-mono text-[11px] text-[#FF5C00] uppercase tracking-[0.15em] mb-4 font-bold">HOW IT WORKS</p>
            <h2 className="font-bebas text-[36px] text-[#1C1C1C] uppercase leading-tight">Three Steps. Back on the Road.</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 relative max-w-[1000px] mx-auto mb-12">
            <div className="hidden md:block absolute top-[50%] left-[10%] right-[10%] h-px border-t-[2px] border-dashed border-[#FF5C00] opacity-40 z-0" />
            
            {[
              { num: "01", title: "Call Us or Submit Above", desc: "Tell us about your accident in 2 minutes. We take it from there." },
              { num: "02", title: "We Handle Everything", desc: "We contact the at-fault insurer, manage all paperwork, arrange your repairs and loan car." },
              { num: "03", title: "Drive Away Repaired", desc: "Your car is restored to pre-accident condition. You pay absolutely nothing." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-[28px] relative z-10 flex-1 text-center md:text-left overflow-hidden">
                <span className="absolute -top-4 -right-4 font-bebas text-[80px] text-[#FFF0E8] leading-none z-0">
                  {step.num}
                </span>
                <div className="relative z-10">
                  <h3 className="font-sans font-bold text-[15px] text-[#1C1C1C] mb-2">{step.title}</h3>
                  <p className="font-sans text-[13px] text-[#6B6B6B]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="tel:0485044333" 
              onClick={() => fireEvent('call_button_click')}
              className="inline-flex items-center justify-center bg-[#FF5C00] text-white h-[56px] px-8 rounded-[100px] font-bebas text-[16px] tracking-[0.1em] hover:bg-[#E05200] transition-colors uppercase"
            >
              CALL US NOW — 1800 407 911
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6 — SOCIAL PROOF */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-bebas text-[36px] text-[#1C1C1C] uppercase leading-tight text-center mb-12">
            What Our Clients Say
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 max-w-[1100px] mx-auto mb-16">
            {[
              { quote: "I had no idea I didn't have to pay anything. They had my car fixed and a loan car sorted the same day.", name: "Sarah T.", location: "Sydney NSW" },
              { quote: "The whole thing was done in 48 hours. I didn't make a single call to the insurer myself.", name: "Marcus R.", location: "Melbourne VIC" },
              { quote: "Absolutely seamless. They knew exactly what to do and kept me updated the whole time.", name: "Priya K.", location: "Brisbane QLD" }
            ].map((t, idx) => (
              <div key={idx} className="bg-white rounded-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.07)] border-l-[3px] border-[#FF5C00] p-[24px] flex-1">
                <div className="flex text-[#FF5C00] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="font-sans italic text-[14px] text-[#1C1C1C] mb-6">"{t.quote}"</p>
                <p className="font-sans font-bold text-[12px] text-[#FF5C00] uppercase">{t.name}, {t.location}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#F4F4F4] py-8 rounded-[10px] flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 max-w-[900px] mx-auto text-center">
            {[
              { value: "4,800+", label: "Claims Handled" },
              { value: "$0", label: "Paid By Our Clients" },
              { value: "98%", label: "Satisfaction Rate" }
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="font-bebas text-[36px] text-[#FF5C00] leading-none mb-1">{stat.value}</p>
                <p className="font-sans text-[12px] text-[#6B6B6B] uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="bg-[#F4F4F4] py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="font-bebas text-[36px] text-[#1C1C1C] uppercase leading-tight mb-10 text-center">Common Questions</h2>
          <div className="bg-white rounded-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-4 md:p-8">
            {[
              { q: `Can I choose my own smash repairer in ${cityName}?`, a: "Yes. Under Australian Consumer Law you have the right to choose your own repairer. You do not have to use your insurer's preferred shop." },
              { q: "How quickly can you start on my repairs?", a: "In most cases we can assess your vehicle same day and begin repairs within 24–48 hours of your first call." },
              { q: "What if the other driver says it was my fault?", a: "We handle that. Our team deals directly with the insurers and manages any disputes on your behalf. You don't need to argue with anyone." },
              { q: "Will making a claim affect my insurance premium?", a: "No. Because we claim through the at-fault driver's insurer — not yours — your policy is not touched and your no-claims bonus is protected." },
              { q: "What do I need to get started?", a: "Just call us or fill in the form above. We'll ask you a few basic questions about the accident and take it from there. Takes 2 minutes." }
            ].map((faq, idx) => (
              <FAQAccordion key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA BANNER */}
      <section className="bg-[#FF5C00] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bebas text-[40px] text-white uppercase leading-tight mb-4">Need a Smash Repairer in {cityName}?</h2>
          <p className="font-sans text-[16px] text-white opacity-90 max-w-[600px] mx-auto mb-8">
            Call us now — local experts, free loan car, and if it wasn't your fault, you pay absolutely nothing.
          </p>
          <a 
            href="tel:0485044333" 
            onClick={() => fireEvent('phone_number_click')}
            className="block font-bebas text-[52px] text-white mb-8 hover:opacity-80 transition-opacity"
          >
            1800 407 911
          </a>
          <button 
            onClick={() => SmoothScroll('form-section')}
            className="inline-flex items-center justify-center border-2 border-white text-white h-[56px] px-8 rounded-[100px] font-sans font-bold text-[14px] uppercase hover:bg-white hover:text-[#FF5C00] transition-colors"
          >
            OR SUBMIT YOUR DETAILS
          </button>
        </div>
      </section>

      {/* SECTION 9 — MINIMAL FOOTER */}
      <footer className="bg-white py-8 border-t border-[#E0E0E0]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col text-center md:text-left">
            <span className="font-bebas text-[20px] font-bold text-[#1C1C1C] leading-none">NOT AT FAULT</span>
            <span className="font-bebas text-[20px] text-[#FF5C00] leading-none -mt-1">CLAIMS</span>
          </div>
          <p className="font-sans text-[11px] text-[#6B6B6B]">
            Not at Fault Claims Management Ltd &middot; ABN 44 697 333 494
          </p>
          <div className="flex gap-4 font-sans text-[11px] text-[#6B6B6B]">
            <a href="#" className="hover:text-[#1C1C1C] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1C1C1C] transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM BAR (MOBILE ONLY) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[999] bg-[#FF5C00] h-[56px]">
        <a 
          href="tel:0485044333" 
          onClick={() => fireEvent('call_button_click')}
          className="w-full h-full flex items-center justify-center gap-2 text-white font-bebas text-[20px] tracking-[0.05em] uppercase"
        >
          <Phone size={20} />
          CALL 1800 407 911
        </a>
      </div>
    </div>
  );
};

export default SmashRepairsCity;
