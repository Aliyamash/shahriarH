/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['shahriarh.ir'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shahriarh.ir",
      },
    ],
  },
};

export default nextConfig;
