import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    largePageDataBytes: 256 * 1000, // 256KB (double default)
    scrollRestoration: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
