/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
    loader: "default",
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
