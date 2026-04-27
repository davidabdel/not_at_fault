/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import NotAtFaultRepairs from './pages/NotAtFaultRepairs';
import LoanCar from './pages/LoanCar';
import InsuranceHelp from './pages/InsuranceHelp';
import BlogIndex from './pages/BlogIndex';
import BlogPostPage from './pages/BlogPostPage';
import Contact from './pages/Contact';

// SEO Service Pages
import NotAtFaultAccident from './pages/NotAtFaultAccident';
import ReplacementVehicle from './pages/ReplacementVehicle';
import ClaimsProcess from './pages/ClaimsProcess';
import WhoPaysDamages from './pages/WhoPaysDamages';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/not-at-fault-repairs" element={<NotAtFaultRepairs />} />
            <Route path="/not-at-fault-accident" element={<NotAtFaultAccident />} />
            <Route path="/replacement-vehicle-after-accident" element={<ReplacementVehicle />} />
            <Route path="/car-accident-claims-process" element={<ClaimsProcess />} />
            <Route path="/who-pays-for-damages-not-at-fault" element={<WhoPaysDamages />} />
            <Route path="/free-loan-car" element={<LoanCar />} />
            <Route path="/insurance-claim-help" element={<InsuranceHelp />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
