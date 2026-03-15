import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
typescript: {
  ignoreBuildErrors: true, // Allows production builds to complete even if there are type errors
},
  cacheComponents: false,
  images :{
    remotePatterns : [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      }
    ]
  }
};

export default nextConfig;
