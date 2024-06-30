const nextConfig = {
  experimental: {
    serverActions: true,
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploadthing.com',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
      },
      {
        protocol: 'https',
        hostname: 'files.edgestore.dev',
      },
      {
        protocol: 'https',
        hostname: 'd86b0d95ae5a56451cebf362702df2ac.r2.cloudflarestorage.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
