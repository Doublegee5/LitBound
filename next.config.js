/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ipfs.io", "lens.infura-ipfs.io", "pbs.twimg.com"], // For Lens profile pics
  },
};

module.exports = nextConfig;
