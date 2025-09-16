import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, MapPin, Clock, DollarSign, Smartphone } from 'lucide-react';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { seoConfig } from '../seo.config';

interface CountyPageProps {
  countyName: string;
  serviceAreas: string[];
  slug: string;
  phone: string;
  email: string;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const CountyPage: React.FC<CountyPageProps> = ({
  countyName,
  serviceAreas,
  slug,
  phone,
  email,
  title,
  description
}) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "No-Cost Installation",
      description: "We provide, install, and maintain your vending machine at zero cost to your business."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Cashless Payments",
      description: "Accept credit cards, mobile payments, and contactless transactions for maximum convenience."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Real-Time Restocking",
      description: "AI-powered inventory tracking ensures your machine is always stocked with popular items."
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Modern Design",
      description: "Sleek, contemporary vending machines that enhance your workspace aesthetics."
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for uninterrupted service."
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Energy Efficient",
      description: "Low-energy consumption with LED lighting and smart power management systems."
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: `How much does it cost to get a vending machine in ${countyName}?`,
      answer: "There's absolutely no cost to your business. We provide, install, stock, and maintain the vending machine completely free. We only make money when your employees and visitors make purchases."
    },
    {
      question: "What types of snacks and drinks do you offer?",
      answer: "We stock healthy snacks, fresh beverages, energy drinks, and traditional favorites. Our AI system tracks preferences and automatically adjusts inventory to match your location's buying patterns."
    },
    {
      question: `What areas of ${countyName} do you serve?`,
      answer: `We serve all major areas throughout ${countyName}, including ${serviceAreas.slice(0, 3).join(', ')}, and surrounding communities. Contact us to confirm service availability in your specific location.`
    },
    {
      question: "How quickly can you install a vending machine?",
      answer: "Most installations are completed within 1-2 weeks of approval. We'll schedule a convenient time that doesn't disrupt your business operations."
    },
    {
      question: "What if the machine breaks down or runs out of products?",
      answer: "Our smart monitoring system alerts us immediately to any issues. We typically respond to service calls within 24 hours and restock based on real-time inventory data."
    },
    {
      question: "Do you offer healthy snack options?",
      answer: "Yes! We specialize in providing a mix of healthy options including nuts, granola bars, fruit snacks, and beverages alongside traditional favorites to satisfy all preferences."
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
    }],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vending Machine Services",
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `Vending Machine Installation in ${countyName}`,
          "description": `Professional vending machine installation and maintenance services throughout ${countyName}`
        }
      }]
    }
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={`${seoConfig.siteUrl}/${slug}`}
        schema={localBusinessSchema}
      />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered Vending Machines in {countyName}
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Hungry Ivan provides AI-powered vending machines in {countyName}, bringing healthy snacks, refreshing drinks, and modern technology to offices, schools, gyms, and warehouses. Our smart vending solutions include cashless payments, real-time inventory tracking, and reliable service—at no cost to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Request a Free Machine
                </a>
                <a
                  href="#contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Book a Demo
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
                Why Choose Hungry Ivan in {countyName}?
              </h2>
              <p className="text-xl text-gray-600">
                Modern vending solutions designed for today's businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
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

        {/* CTA Banner */}
        <section className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses in {countyName} already enjoying our vending services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request a Free Machine
              </a>
              <a
                href="#contact"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                We Also Serve
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/vending-machines-orange-county"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Orange County
                </a>
                <span className="text-gray-400">•</span>
                <a
                  href="/vending-machines-los-angeles"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Los Angeles
                </a>
                <span className="text-gray-400">•</span>
                <a
                  href="/vending-machines-riverside-county"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Riverside County
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our vending services in {countyName}
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Get Your Free Vending Machine Today</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us to schedule a free consultation for your {countyName} location
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 text-lg font-semibold text-white hover:text-blue-300 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {phone}
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-lg font-semibold text-white hover:text-blue-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Mail className="w-5 h-5" />
                  {email}
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

export default CountyPage;
