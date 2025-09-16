import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../seo.config';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  schema?: Record<string, any>;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = seoConfig.defaultDescription,
  canonical,
  ogImage = seoConfig.defaultImage,
  schema,
  noindex = false
}) => {
  const fullTitle = title ? `${title}` : `${seoConfig.siteName} | AI-Powered Vending Machines in Southern California`;
  const fullCanonical = canonical || seoConfig.siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${seoConfig.siteUrl}${ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
