import React from 'react';
import Navigation from '../components/Navigation';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfig } from '../seo.config';

const OurMachines: React.FC = () => {
  return (
    <>
      <SEO
        title="Our AI-Powered Vending Machines | Hungry Ivan"
        description="Explore our advanced AI-powered vending machines including smart combo machines, freezers, and double door coolers with touchscreen interfaces and cashless payments."
        canonical={`${seoConfig.siteUrl}/our-machines`}
      />
      
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32">
          <Portfolio />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default OurMachines;
