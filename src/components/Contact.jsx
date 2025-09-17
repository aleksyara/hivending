import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Request Your Free Vending Machine
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of satisfied customers across Southern California. No upfront costs, no installation fees, just modern vending solutions that work.
          </p>
          
          {/* Social Proof */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Timely Restocking Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>98% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Let's Discuss Your Vending Needs
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you need a single machine for a small office or a complete vending solution for a large facility, we're here to help. Our AI-powered machines and comprehensive service make workplace refreshment effortless.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">info@hungryivan.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">(949) 414-9081</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Service Area</div>
                  <div className="text-gray-600">Southern California</div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;