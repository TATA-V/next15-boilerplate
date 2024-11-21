import type { NextConfig } from 'next';
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env.local' });
const { NEXT_PUBLIC_BASE_URL } = process.env;

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${NEXT_PUBLIC_BASE_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
