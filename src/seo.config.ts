export const seoConfig = {
  siteName: "Hungry Ivan",
  siteUrl: "https://hungryivan.com",
  defaultDescription: "AI-powered vending machines and healthy snack vending services in Orange County, Los Angeles & Riverside. No-cost installation, smart inventory, cashless payments.",
  defaultImage: "/og-default.jpg",
  phone: "(949) 414-9081",
  email: "info@hungryivan.com",
  address: {
    locality: "Irvine",
    region: "CA",
    postalCode: "92606",
    country: "US"
  },
  serviceAreas: [
    "Orange County CA",
    "Los Angeles County CA", 
    "Riverside County CA"
  ],
  socialLinks: [
    "https://www.yelp.com/biz/hungry-ivan-vending",
    "https://www.facebook.com/hungryivanvending",
    "https://www.instagram.com/hungryivanvending"
  ]
};

export type SEOConfigType = typeof seoConfig;
