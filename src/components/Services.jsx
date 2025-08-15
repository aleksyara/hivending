import React from 'react';
import { Cpu, Building, RefreshCw, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: 'Modern Machine with No Cost',
      description: 'State-of-the-art AI-powered vending machines installed at your location with zero upfront investment.',
      features: ['No Installation Fees', 'Latest Technology', 'Energy Efficient']
    },
    {
      icon: Building,
      title: 'Interior Integration',
      description: 'Opportunity to build machines seamlessly into your interior design during construction or renovation.',
      features: ['Custom Design', 'Space Optimization', 'Aesthetic Integration']
    },
    {
      icon: RefreshCw,
      title: 'Timely Restocking',
      description: 'Due to online data access, we guarantee stock presence with predictive restocking algorithms.',
      features: ['Real-time Monitoring', 'Predictive Analytics', 'Never Empty Promise']
    },
    {
      icon: Wrench,
      title: 'Technical Service & Maintenance',
      description: 'Complete technical support and maintenance service to ensure 99.9% uptime for your machines.',
      features: ['24/7 Support', 'Preventive Maintenance', 'Remote Diagnostics']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive vending solutions designed to enhance your workplace experience with cutting-edge technology and reliable service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Learn More About Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;