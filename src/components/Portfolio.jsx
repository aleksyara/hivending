import React, { useState } from 'react';
import { ExternalLink, Zap, Wifi, Shield, Thermometer, CreditCard, Eye, Snowflake, Package, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [selectedMachine, setSelectedMachine] = useState(0);
  const [selectedImage, setSelectedImage] = useState('main');

  const machines = [
    {
      title: 'AI Powered Smart Combo Vending Machine',
      category: 'Premium AI Series',
      images: {
        wood: '/HIVend.jpg',
        purple: '/genius_vend_at_voodoo_cellar_boise_angled_left copy copy.webp',
        payment: '/Genius_Vend_Swiping_Card.webp'
      },
      description: 'Our flagship AI-powered smart combo vending machine featuring advanced dual vision camera technology, premium finishes, and comprehensive payment options for the ultimate user experience.',
      specs: [
        { icon: Thermometer, label: 'Temperature Range', value: '33-50° F' },
        { icon: Zap, label: 'Cooling Method', value: 'Pure air cooling' },
        { icon: Eye, label: 'AI Technology', value: 'Dual vision camera w/ integrated software' },
        { icon: CreditCard, label: 'Payment Methods', value: 'Visa, MasterCard, ApplePay, Samsung Pay, Etc.' }
      ],
      features: ['AI-Powered Selection', 'Multiple Finish Options', 'Touchscreen Interface', 'Cashless Payments', 'Real-time Monitoring', 'Interior Integration']
    },
    {
      title: 'AI Powered Smart Vending Freezer',
      category: 'Freezer AI Series',
      images: {
        main: '/NaturalWoodPremiumWrap.webp',
        payment: '/Genius_Vend_Swiping_Card copy.webp',
        custom: '/Genius_Vend_AI_Cooler_with_Angel_Margarita_Wrap.webp'
      },
      description: 'Advanced AI-powered freezer vending machine designed for frozen products with precise temperature control and smart monitoring capabilities for optimal product preservation.',
      specs: [
        { icon: Snowflake, label: 'Temperature Range', value: '-7 to 14° F' },
        { icon: Eye, label: 'AI Technology', value: 'Dual vision camera w/ integrated software' },
        { icon: CreditCard, label: 'Payment Methods', value: 'Visa, MasterCard, ApplePay, Samsung Pay, Etc.' },
        { icon: Zap, label: 'Power Consumption', value: '8.33KWh/24h' }
      ],
      features: ['Freezer Temperature Control', 'AI Vision Recognition', 'Custom Branding Options', 'Touchscreen Interface', 'Multiple Payment Methods', 'Real-time Monitoring']
    },
    {
      title: 'AI Double Door Smart Cooler',
      category: 'Double Door AI Series',
      images: {
        main: '/GVAIDoubleDoorSmartCooler.webp',
        lifestyle1: '/Genius_Vend_AI_Double-Door_Cooler_lifestyle_1.webp',
        lifestyle2: '/Genius_Vend_AI_Double-Door_Cooler_lifestyle_2.webp'
      },
      description: 'High-capacity AI-powered double door smart cooler with maximum storage space and adjustable shelving system, perfect for high-traffic locations requiring extensive product variety.',
      specs: [
        { icon: Thermometer, label: 'Temperature Range', value: '33-50° F' },
        { icon: Package, label: 'Capacity', value: '12 shelves (~864 cans) or 39 Cu Ft' },
        { icon: Eye, label: 'AI Technology', value: 'Dual vision camera w/ integrated software' },
        { icon: CreditCard, label: 'Payment Methods', value: 'Visa, MasterCard, ApplePay, Samsung Pay, Etc.' }
      ],
      features: ['High Capacity Storage', 'Adjustable Dividers', 'Double Door Access', 'AI Vision Recognition', 'Multiple Payment Methods', 'Real-time Monitoring']
    }
  ];

  const currentMachine = machines[selectedMachine];
  const imageKeys = Object.keys(currentMachine.images);
  const currentImageKey = selectedImage in currentMachine.images ? selectedImage : imageKeys[0];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Machines
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our intelligent vending machines designed to meet every workplace need with cutting-edge AI technology and customizable options.
          </p>
        </div>

        {/* Machine Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg flex flex-wrap justify-center gap-2">
            {machines.map((machine, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedMachine(index);
                  setSelectedImage(Object.keys(machine.images)[0]);
                }}
                className={`px-4 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                  selectedMachine === index
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                {machine.category}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative">
                <div className="aspect-square lg:aspect-auto lg:h-full relative overflow-hidden">
                  <img
                    src={currentMachine.images[currentImageKey]}
                    alt={`${currentMachine.title} - AI-powered vending machine with smart inventory and cashless payment system`}
                    className="w-full h-full object-cover transition-all duration-500"
                    loading="lazy"
                    width="600"
                    height="600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Image Selector */}
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  {imageKeys.map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedImage(key)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        selectedImage === key || (!(selectedImage in currentMachine.images) && key === imageKeys[0])
                          ? 'border-orange-500 shadow-lg scale-110' 
                          : 'border-white/50 hover:border-white'
                      }`}
                    >
                      <img
                        src={currentMachine.images[key]}
                        alt={`${currentMachine.title} - ${key} view of smart vending machine`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width="64"
                        height="64"
                      />
                    </button>
                  ))}
                </div>

                {/* Action Icons */}
                {/* <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                    <Wifi size={18} className="text-gray-800" />
                  </div>
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                    <Shield size={18} className="text-gray-800" />
                  </div>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                    <ExternalLink size={18} className="text-gray-800" />
                  </button>
                </div> */}
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12">
                <div className="text-sm text-orange-600 font-medium mb-2">
                  {currentMachine.category}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {currentMachine.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {currentMachine.description}
                </p>

                {/* Technical Specifications */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Technical Specifications</h4>
                  <div className="space-y-4">
                    {currentMachine.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <spec.icon size={20} className="text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{spec.label}</div>
                          <div className="text-gray-600">{spec.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentMachine.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                {/* <button className="w-full bg-orange-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-orange-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Request Machine Demo
                </button> */}
                <a
                  href="/contact-us"
                  className="w-full bg-orange-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-orange-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Request Machine Demo
                  <ArrowRight size={18} />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;