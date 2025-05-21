/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Handle Node.js modules that MongoDB depends on
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        dns: false,
        child_process: false,
        'fs/promises': false,
        'timers/promises': false,
      };
    }
    return config;
  },
  // Moved from experimental to top-level as per Next.js 15 requirements
  serverExternalPackages: ['mongodb', 'mongoose'],
  experimental: {}
};

module.exports = nextConfig; 