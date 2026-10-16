import type { MetadataRoute } from 'next'

// Required for `output: 'export'` — generate the file at build time.
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://maukul.site/sitemap.xml',
  }
}
