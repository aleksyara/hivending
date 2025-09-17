import React from 'react';
import Navigation from '../components/Navigation';
import Services from '../components/Services';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfig } from '../seo.config';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Vending Services | Hungry Ivan AI-Powered Solutions"
        description="Complete vending services including modern machines with no cost, interior integration, timely restocking, and technical support & maintenance."
        canonical={`${seoConfig.siteUrl}/services`}
      />
      
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32">
          <Services />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
