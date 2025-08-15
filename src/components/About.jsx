import React from 'react';
import { Zap, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI Technology',
      description: 'Our smart machines use artificial intelligence to optimize inventory and enhance user experience.'
    },
    {
      icon: Users,
      title: 'Employee Satisfaction',
      description: 'Boost workplace morale with convenient access to fresh snacks and beverages.'
    },
    {
      icon: Target,
      title: 'Zero Cost Setup',
      description: 'No upfront investment required - we handle installation and maintenance completely.'
    },
    {
      icon: Lightbulb,
      title: 'Smart Solutions',
      description: 'Real-time monitoring ensures your machines are always stocked and functioning perfectly.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Work With
              <span className="block text-orange-600">Hungry Ivan Vending</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our revolutionary AI-powered vending machines transform the traditional workplace refreshment experience. With cutting-edge technology, we make the process more seamless, fun, and attractive for both employees and clients.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From small offices to large corporate campuses, our smart vending solutions provide 24/7 convenience with zero hassle. Our AI technology ensures optimal product selection, real-time inventory management, and predictive restocking.
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-orange-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-red-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-yellow-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Expert Team</p>
                <p className="text-sm text-gray-600">Vending technology specialists</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;