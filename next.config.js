/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optional: point API calls to WP-BE in development
  async rewrites() {
    return [
      // Example: { source: '/api', destination: 'http://localhost:4000/api' },
    ];
  },
};

module.exports = nextConfig;
