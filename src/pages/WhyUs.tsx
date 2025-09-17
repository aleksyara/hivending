import React from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfig } from '../seo.config';

const WhyUs: React.FC = () => {
  return (
    <>
      <SEO
        title="Why Choose Hungry Ivan | AI-Powered Vending Solutions"
        description="Discover why businesses choose Hungry Ivan for AI-powered vending machines. Zero cost setup, smart technology, employee satisfaction, and expert support."
        canonical={`${seoConfig.siteUrl}/why-us`}
      />
      
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32">
          <About />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WhyUs;
