import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
  schema?: object | object[];
  breadcrumbs?: { name: string; item: string }[];
}

const SEO: React.FC<SEOProps> = ({
  title = "Not At Fault Claims Australia | Accident Replacement Vehicle Help",
  description = "Had an accident that wasn’t your fault? We help Australians with not at fault claims, replacement vehicles and insurer communication. No excess, zero cost.",
  canonical = "https://notatfaultclaims.com.au",
  ogType = "website",
  ogImage = "https://notatfaultclaims.com.au/og-image.jpg",
  twitterHandle = "@notatfaultclaims",
  schema,
  breadcrumbs
}) => {
  const siteName = "Not At Fault Claims Australia";

  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.item
    }))
  } : null;

  const combinedSchema = Array.isArray(schema) ? schema : schema ? [schema] : [];
  if (breadcrumbSchema) {
    combinedSchema.push(breadcrumbSchema);
  }

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}

      {/* Schema.org markup */}
      {combinedSchema.length > 0 && combinedSchema.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};


export default SEO;
