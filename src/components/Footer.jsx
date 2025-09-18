import React from 'react';
import { Facebook, Twitter, Linkedin as LinkedIn, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 space-x-3">
              <img 
                src="/HIVlogo.jpg" 
                alt="Hungry Ivan Vending" 
                className="h-16 w-16 object-contain"
              />
              <span className="text-xl font-bold">Hungry Ivan Vending</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Revolutionary AI-powered vending solutions that transform workplace refreshment with zero upfront costs, smart technology, and reliable service in the Los Angeles, Orange County, and Riverside County, CA.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-200">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-200">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-200">
                <LinkedIn size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-200">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/why-us" className="text-gray-400 hover:text-white transition-colors duration-200">Why Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="/our-machines" className="text-gray-400 hover:text-white transition-colors duration-200">Our Machines</a></li>
              <li><a href="/contact-us" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Machine Installation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Smart Restocking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Technical Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Interior Integration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">AI Monitoring</a></li>
            </ul>
          </div> */}

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Hungry Ivan Vending. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-700 transition-colors duration-200"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;