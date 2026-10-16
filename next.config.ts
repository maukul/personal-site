import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static export: `pnpm build` outputs plain HTML/CSS/JS into `out/`,
  // ready to upload via FTP to shared hosting (cPanel/Apache).
  output: 'export',
  // Adds trailing slashes so links resolve as directories on Apache
  // without server-side rewrites.
  trailingSlash: true,
  // The Next.js image optimization server does not exist on static hosting.
  images: { unoptimized: true },
}

export default nextConfig
