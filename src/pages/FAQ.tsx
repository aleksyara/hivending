import React, { useState, FC } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfig } from '../seo.config';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "How much does it cost to get a vending machine?",
      answer: "There's absolutely no cost to your business. We provide, install, stock, and maintain the vending machine completely free. We only make money when your employees and visitors make purchases."
    },
    {
      question: "What types of snacks and drinks do you offer?",
      answer: "We stock healthy snacks, fresh beverages, energy drinks, and traditional favorites. Our AI system tracks preferences and automatically adjusts inventory to match your location's buying patterns."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve all major areas throughout Southern California, including Orange County, Los Angeles, and Riverside County. Contact us to confirm service availability in your specific location."
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
    },
    {
      question: "What payment methods do your machines accept?",
      answer: "Our AI-powered machines accept all major credit cards, debit cards, mobile payments (Apple Pay, Google Pay, Samsung Pay), and contactless payments for maximum convenience."
    },
    {
      question: "How do you ensure machines are always stocked?",
      answer: "Our AI technology monitors inventory levels in real-time and uses predictive analytics to determine optimal restocking schedules. This ensures popular items are always available when your team needs them."
    },
    {
      question: "Can you customize the product selection for our office?",
      answer: "Absolutely! Our AI system learns your team's preferences over time and automatically adjusts inventory. We can also work with you to include specific products that match your company culture and employee preferences."
    },
    {
      question: "What kind of technical support do you provide?",
      answer: "We provide 24/7 technical support with remote diagnostics capabilities. Our team monitors all machines continuously and can often resolve issues remotely. For on-site needs, we typically respond within 24 hours."
    }
  ];

  return (
    <>
      <SEO
        title="FAQ | Frequently Asked Questions | Hungry Ivan Vending"
        description="Get answers to common questions about our AI-powered vending machines, installation process, costs, and services. No-cost installation, 24/7 support, and smart inventory management."
        canonical={`${seoConfig.siteUrl}/faq`}
      />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Everything you need to know about our AI-powered vending machines, installation process, and services. Can't find what you're looking for? Contact us directly.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset rounded-lg transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4 animate-in slide-in-from-top-1 duration-200">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help! Contact us for personalized answers and to discuss your vending needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us
              </a>
              <a
                href="tel:(949) 414-9081"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold border-2 border-orange-600 hover:bg-orange-50 transition-colors duration-200"
              >
                Call (949) 414-9081
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FAQ;
