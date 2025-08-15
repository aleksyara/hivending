import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Share Your Preferences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us serve you better by sharing your vending machine preferences and feedback through our quick survey.
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ExternalLink className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Client Preference Survey
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Your feedback helps us customize our vending solutions to better meet your needs. The survey takes just 2-3 minutes to complete.
            </p>
            
            <a
              href="https://www.surveymonkey.com/r/SJCKDSX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Take Survey</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;