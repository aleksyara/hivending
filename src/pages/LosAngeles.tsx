import React from 'react';
import CountyPage from './CountyPage';

const LosAngeles: React.FC = () => {
  return (
    <CountyPage
      countyName="Los Angeles"
      serviceAreas={[
        "Los Angeles", "Long Beach", "Glendale", "Santa Monica", "Pasadena",
        "Torrance", "Pomona", "El Monte", "Downey", "Inglewood"
      ]}
      slug="vending-machines-los-angeles"
      phone="(949) 414-9081"
      email="info@hungryivan.com"
      title="Smart Vending Machines in Los Angeles | Hungry Ivan"
      description="AI-driven vending machines for LA businesses. Cashless, reliable, and data-smart. No-cost install."
    />
  );
};

export default LosAngeles;
