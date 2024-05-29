/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack (config) {
    config.externals.push('canvas')
    return config
  }
};

export default nextConfig;
