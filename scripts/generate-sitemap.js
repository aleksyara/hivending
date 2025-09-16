import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = 'https://hungryivan.com';
const currentDate = new Date().toISOString();

const urls = [
  {
    url: '/',
    changefreq: 'monthly',
    priority: '1.0'
  },
  {
    url: '/vending-machines-orange-county',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: '/vending-machines-los-angeles',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: '/vending-machines-riverside-county',
    changefreq: 'monthly',
    priority: '0.9'
  }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ url, changefreq, priority }) => `  <url>
    <loc>${siteUrl}${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const distDir = path.join(__dirname, '../dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully at dist/sitemap.xml');
};

generateSitemap();
