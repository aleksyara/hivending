import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfig } from '../seo.config';

const Home: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute('href')!);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hungry Ivan",
    "image": `${seoConfig.siteUrl}/og-default.jpg`,
    "url": seoConfig.siteUrl,
    "telephone": seoConfig.phone,
    "email": seoConfig.email,
    "areaServed": seoConfig.serviceAreas,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": seoConfig.address.locality,
      "addressRegion": seoConfig.address.region,
      "postalCode": seoConfig.address.postalCode,
      "addressCountry": seoConfig.address.country
    },
    "priceRange": "$$",
    "sameAs": seoConfig.socialLinks,
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }]
  };

  return (
    <>
      <SEO
        title="Hungry Ivan | AI-Powered Vending Machines in Southern California"
        description="Modern vending services with healthy snacks & drinks, cashless payments, and smart restocking. Serving Orange County, Los Angeles & Riverside. No-cost installation."
        canonical={seoConfig.siteUrl}
        schema={localBusinessSchema}
      />
      
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
