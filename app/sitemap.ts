import type { MetadataRoute } from 'next'

// Required for `output: 'export'` — generate the file at build time.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://maukul.site',
      lastModified: new Date(),
    },
  ]
}
