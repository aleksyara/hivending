import React, { useState } from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import Modal from './Modal';
import InquiryForm from './InquiryForm';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToMachines = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/font_guy_machines copy.png"
            alt="Modern vending machines"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered vending machines that transform workplace refreshment with zero upfront costs and seamless service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group bg-white text-orange-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button 
                onClick={scrollToMachines}
                className="group flex items-center space-x-3 text-white hover:text-orange-200 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                  <Eye size={20} />
                </div>
                <span className="font-medium">Our Machines</span>
              </button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">99%</div>
                <div className="text-orange-100">Recognition Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">98%</div>
                <div className="text-orange-100">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">24/7</div>
                <div className="text-orange-100">Smart Monitoring</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <InquiryForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Hero;