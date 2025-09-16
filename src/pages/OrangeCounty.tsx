import React from 'react';
import CountyPage from './CountyPage';

const OrangeCounty: React.FC = () => {
  return (
    <CountyPage
      countyName="Orange County"
      serviceAreas={[
        "Irvine", "Anaheim", "Santa Ana", "Huntington Beach", "Newport Beach", 
        "Fullerton", "Costa Mesa", "Mission Viejo", "Westminster", "Buena Park"
      ]}
      slug="vending-machines-orange-county"
      phone="(949) 414-9081"
      email="info@hungryivan.com"
      title="Hungry Ivan | AI-Powered Vending Machines in Orange County"
      description="Modern vending services with healthy snacks & drinks, smart inventory, and no-cost installation for OC offices, gyms, schools & warehouses."
    />
  );
};

export default OrangeCounty;
