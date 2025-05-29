import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Only apply basePath for GitHub Pages deployment (not local testing)
  basePath: process.env.GITHUB_ACTIONS ? '/SymposiumWebSite' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/SymposiumWebSite/' : '',
};

export default nextConfig;
