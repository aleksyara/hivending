import React from 'react';
import CountyPage from './CountyPage';

const RiversideCounty: React.FC = () => {
  return (
    <CountyPage
      countyName="Riverside County"
      serviceAreas={[
        "Riverside", "Moreno Valley", "Corona", "Murrieta", "Temecula",
        "Hemet", "Palm Desert", "Indio", "Lake Elsinore", "Menifee"
      ]}
      slug="vending-machines-riverside-county"
      phone="(949) 414-9081"
      email="info@hungryivan.com"
      title="Vending Machines in Riverside County | AI-Powered by Hungry Ivan"
      description="Healthy snack & drink vending with real-time restocking across Riverside County. No setup fees."
    />
  );
};

export default RiversideCounty;
