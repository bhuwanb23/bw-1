// SEO data for all pages
export const siteConfig = {
  name: 'Innovexex',
  tagline: 'From Null to Infinity',
  description: 'We build bespoke software that transcends boundaries. From intelligent web platforms to innovative mobile apps, we are the architects of your digital future.',
  url: 'https://Innovexex.com', // Update with your actual domain
  twitterHandle: '@Innovexex',
  defaultImage: '/og-image.jpg',
  author: 'Innovexex',
}

export const pageSEO = {
  home: {
    title: 'Innovexex — From Null to Infinity | Custom Software Development',
    description: 'Engineering the infinite. We build bespoke software solutions, web platforms, and mobile apps that transcend boundaries. Transform your digital future with Innovexex.',
    keywords: 'custom software development, web development, mobile app development, technology solutions, digital transformation, software engineering, bespoke software',
    path: '/',
  },
  services: {
    title: 'Services — Custom Software Development & Technology Solutions | Innovexex',
    description: 'Comprehensive software development services including custom web applications, mobile apps, cloud solutions, and digital transformation. Expert team delivering scalable, innovative solutions.',
    keywords: 'software development services, custom web applications, mobile app development, cloud solutions, digital transformation, software consulting, technology services',
    path: '/services',
  },
  products: {
    title: 'Products — Innovative Software Solutions & Tools | Innovexex',
    description: 'Explore our suite of innovative software products and tools designed to empower businesses. From developer tools to enterprise solutions, discover what we\'ve built.',
    keywords: 'software products, developer tools, enterprise software, SaaS products, technology products, software solutions',
    path: '/products',
  },
  blog: {
    title: 'Blog & Insights — Tech Articles, Guides & Community Discussions | Innovexex',
    description: 'Stay updated with the latest tech insights, tutorials, best practices, and community discussions. Learn from expert developers and industry leaders.',
    keywords: 'tech blog, software development blog, programming tutorials, technology insights, developer resources, tech articles',
    path: '/blog',
  },
  proposal: {
    title: 'Request a Proposal — Get Your Custom Software Solution | Innovexex',
    description: 'Ready to transform your business? Request a free proposal for your custom software project. Expert consultation, transparent pricing, and innovative solutions.',
    keywords: 'software proposal, custom software quote, software consultation, project proposal, software development quote',
    path: '/proposal',
  },
}

// Structured Data (JSON-LD) for Organization
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Innovexex',
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  foundingDate: '2024',
  sameAs: [
    'https://twitter.com/Innovexex',
    'https://github.com/Innovexex',
    'https://www.linkedin.com/company/Innovexex',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'contact@Innovexex.com', // Update with actual email
  },
}

// Structured Data for Website
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/blog?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// Structured Data for SoftwareApplication (Services)
export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Innovexex Custom Software Solutions',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '50',
  },
}

