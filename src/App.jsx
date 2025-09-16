import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OrangeCounty from './pages/OrangeCounty';
import LosAngeles from './pages/LosAngeles';
import RiversideCounty from './pages/RiversideCounty';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vending-machines-orange-county" element={<OrangeCounty />} />
        <Route path="/vending-machines-los-angeles" element={<LosAngeles />} />
        <Route path="/vending-machines-riverside-county" element={<RiversideCounty />} />
      </Routes>
    </Router>
  );
}

export default App;