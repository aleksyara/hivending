import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhyUs from './pages/WhyUs';
import OurMachines from './pages/OurMachines';
import ServicesPage from './pages/ServicesPage';
import Survey from './pages/Survey';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import OrangeCounty from './pages/OrangeCounty';
import LosAngeles from './pages/LosAngeles';
import RiversideCounty from './pages/RiversideCounty';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/our-machines" element={<OurMachines />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/vending-machines-orange-county" element={<OrangeCounty />} />
        <Route path="/vending-machines-los-angeles" element={<LosAngeles />} />
        <Route path="/vending-machines-riverside-county" element={<RiversideCounty />} />
      </Routes>
    </Router>
  );
}

export default App;