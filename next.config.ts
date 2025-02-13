// import type { NextConfig } from 'next'

// const nextConfig: NextConfig = {
//   images: {
//     loader: 'custom',
//     loaderFile: './src/components/loader.tsx',
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: `${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID}.supabase.co`,
//         port: '',
//         pathname: '/storage/v1/render/image/public/**',
//       },
//     ],
//   },
//   experimental: {
//     typedRoutes: true,
//   },
// }

// export default nextConfig

import type { NextConfig } from 'next'

const SUPABASE_PROJECT_ID = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID || 'your-project-id';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Ensures compatibility with static export (next export)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${SUPABASE_PROJECT_ID}.supabase.co`,
        pathname: '/storage/v1/render/image/public/**',
      },
    ],
  },
  experimental: {
    typedRoutes: true, // Remove if build breaks
  },
}

export default nextConfig;

