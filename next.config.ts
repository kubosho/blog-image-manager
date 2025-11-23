import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL(`https://${process.env.AWS_S3_BUCKET_NAME}.${process.env.AWS_S3_HOST_NAME}/**`)],
  },
};

export default nextConfig;
