import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Why Us', href: '#about' },
    { name: 'Our Machines', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceAreas = [
    { name: 'Orange County', href: '/vending-machines-orange-county' },
    { name: 'Los Angeles', href: '/vending-machines-los-angeles' },
    { name: 'Riverside County', href: '/vending-machines-riverside-county' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center">
              <img 
                src="/HIVlogo.jpg" 
                alt="Hungry Ivan Vending Company Logo" 
                className="h-24 w-24 object-contain"
              />
            </a>
            <a 
              href="#about"
              className={`text-xl font-bold transition-colors duration-200 relative group hidden sm:block ${
                isScrolled 
                  ? 'text-gray-900 hover:text-orange-600' 
                  : 'text-white hover:text-orange-300'
              }`}
            >
              Hungry Ivan Vending
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-orange-600' 
                      : 'text-white hover:text-orange-300'
                  }`}
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
              ))}
              
              {/* Service Areas Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServiceAreasOpen(true)}
                  onMouseLeave={() => setIsServiceAreasOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group flex items-center ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-orange-600' 
                      : 'text-white hover:text-orange-300'
                  }`}
                >
                  Service Areas
                  <ChevronDown size={16} className="ml-1" />
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </button>
                
                {isServiceAreasOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg border border-gray-100 py-2 z-50"
                    onMouseEnter={() => setIsServiceAreasOpen(true)}
                    onMouseLeave={() => setIsServiceAreasOpen(false)}
                  >
                    {serviceAreas.map((area) => (
                      <a
                        key={area.name}
                        href={area.href}
                        className="block px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors duration-200"
                      >
                        {area.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Sticky CTA Button */}
              <a
                href="#contact"
                className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200"
              >
                Get a Free Machine
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none p-3 rounded-lg transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-50' 
                  : 'text-white hover:text-orange-300 hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Service Areas */}
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="text-gray-500 px-3 py-2 text-sm font-medium">Service Areas</div>
              {serviceAreas.map((area) => (
                <a
                  key={area.name}
                  href={area.href}
                  className="text-gray-700 hover:text-orange-600 block px-6 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {area.name}
                </a>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="border-t border-gray-200 pt-2 mt-2">
              <a
                href="#contact"
                className="bg-orange-600 text-white block mx-3 px-4 py-2 rounded-lg font-medium text-center hover:bg-orange-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Get a Free Machine
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;