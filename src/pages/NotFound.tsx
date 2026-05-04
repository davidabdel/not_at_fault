import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found | Not at Fault Claims";
  }, []);

  return (
    <div className="flex flex-col bg-white min-h-[60vh] items-center justify-center py-20 px-4">
      <ShieldAlert size={80} className="text-brand-orange mb-8 opacity-90" />
      <h1 className="text-5xl md:text-7xl font-bebas text-brand-charcoal uppercase leading-none mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-brand-mid-grey font-sans mb-10 max-w-[500px] text-center">
        Oops! It looks like the page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="bg-brand-orange text-white px-10 h-[56px] rounded-full font-bebas text-[18px] tracking-[0.1em] hover:bg-brand-charcoal transition-colors uppercase flex items-center justify-center shadow-md active:scale-95"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
