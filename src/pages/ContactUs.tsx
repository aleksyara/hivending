import React from 'react';
import Navigation from '../components/Navigation';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfig } from '../seo.config';

const ContactUs: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Us | Request Your Free Vending Machine | Hungry Ivan"
        description="Contact Hungry Ivan for your free AI-powered vending machine. No upfront costs, no installation fees. Serving Orange County, Los Angeles & Riverside County."
        canonical={`${seoConfig.siteUrl}/contact-us`}
      />
      
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
