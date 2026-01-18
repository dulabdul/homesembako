import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.homesembako.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Karena ini Single Page Landing Page, kita hanya mendaftarkan root URL.
    // Jika nanti ada halaman terpisah (misal /blog), tambahkan di sini.
  ];
}