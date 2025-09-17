import React from 'react';
import Navigation from '../components/Navigation';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfig } from '../seo.config';

const Survey: React.FC = () => {
  return (
    <>
      <SEO
        title="Client Survey | Share Your Vending Preferences | Hungry Ivan"
        description="Help us serve you better by sharing your vending machine preferences and feedback through our quick 2-3 minute client preference survey."
        canonical={`${seoConfig.siteUrl}/survey`}
      />
      
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32">
          <Testimonials />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Survey;
