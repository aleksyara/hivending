import React, { FC } from 'react';
import { DollarSign, Smartphone, Clock, MapPin, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfig } from '../seo.config';

const OrangeCounty: FC = () => {
  const serviceAreas = [
    "Aliso Viejo", "Anaheim", "Brea", "Buena Park", "Costa Mesa", "Cypress", "Dana Point", 
    "Fountain Valley", "Fullerton", "Garden Grove", "Huntington Beach", "Irvine", "La Habra", 
    "La Palma", "Laguna Beach", "Laguna Hills", "Laguna Niguel", "Laguna Woods", "Lake Forest", 
    "Los Alamitos", "Mission Viejo", "Newport Beach", "Orange", "Placentia", "Rancho Santa Margarita", 
    "San Clemente", "San Juan Capistrano", "Santa Ana", "Seal Beach", "Stanton", "Tustin", 
    "Villa Park", "Westminster", "Yorba Linda"
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-orange-600" />,
      title: "No-Cost Installation",
      description: "We provide, install, and maintain your vending machine at zero cost to your business."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-600" />,
      title: "Cashless Payments",
      description: "Accept credit cards, mobile payments, and contactless transactions for maximum convenience."
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "Real-Time Restocking",
      description: "AI-powered inventory tracking ensures your machine is always stocked with popular items."
    },
    {
      icon: <MapPin className="w-8 h-8 text-orange-600" />,
      title: "Modern Design",
      description: "Sleek, contemporary vending machines that enhance your workspace aesthetics."
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hungry Ivan",
    "image": `${seoConfig.siteUrl}/og-default.jpg`,
    "url": seoConfig.siteUrl,
    "telephone": seoConfig.phone,
    "email": seoConfig.email,
    "areaServed": ["Orange County CA"],
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
        title="Hungry Ivan | AI-Powered Vending Machines in Orange County"
        description="Modern vending services with healthy snacks & drinks, smart inventory, and no-cost installation for OC offices, gyms, schools & warehouses."
        canonical={`${seoConfig.siteUrl}/vending-machines-orange-county`}
        schema={localBusinessSchema}
      />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered Vending Machines in Orange County
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Hungry Ivan provides AI-powered vending machines in Orange County, bringing healthy snacks, refreshing drinks, and modern technology to offices, schools, gyms, and warehouses. Our smart vending solutions include cashless payments, real-time inventory tracking, and reliable service—at no cost to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact-us"
                  className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Request a Free Machine
                </a>
                <a
                  href="/our-machines"
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold border-2 border-orange-600 hover:bg-orange-50 transition-colors"
                >
                  View Our Machines
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Hungry Ivan in Orange County?
              </h2>
              <p className="text-xl text-gray-600">
                Modern vending solutions designed for today's businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Serving All of Orange County
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We provide vending services throughout Orange County, including these major cities:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="text-center">
                    <span className="text-gray-800 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started in Orange County?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join hundreds of businesses in Orange County already enjoying our vending services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request a Free Machine
              </a>
              <a
                href="tel:(949) 414-9081"
                className="bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-800 transition-colors"
              >
                Call (949) 414-9081
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Get Your Free Vending Machine Today</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us to schedule a free consultation for your Orange County location
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="tel:(949) 414-9081"
                  className="flex items-center gap-2 text-lg font-semibold text-white hover:text-blue-300 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (949) 414-9081
                </a>
                <a
                  href="mailto:info@hungryivan.com"
                  className="flex items-center gap-2 text-lg font-semibold text-white hover:text-blue-300 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  info@hungryivan.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default OrangeCounty;
