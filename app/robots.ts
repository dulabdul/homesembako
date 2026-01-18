import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.homesembako.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/private'], // Contoh path yang tidak boleh di-crawl
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}