import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  const robotsTxt = `# Corox Engineering Robots.txt
# Last updated: ${new Date().toISOString()}

# Allow all search engines
User-agent: *
Allow: /

# Disallow sensitive areas
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /private/
Disallow: /temp/

# Allow important pages
Allow: /servicii
Allow: /portofoliu
Allow: /despre-noi
Allow: /contact
Allow: /cariere
Allow: /politica-de-confidentialitate
Allow: /politica-cookies

# Crawl delay (optional - be respectful to servers)
Crawl-delay: 1

# Sitemap location
Sitemap: https://coroxengineering.ro/sitemap.xml

# Additional sitemaps (if needed in future)
# Sitemap: https://coroxengineering.ro/sitemap-services.xml
# Sitemap: https://coroxengineering.ro/sitemap-projects.xml`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
} 