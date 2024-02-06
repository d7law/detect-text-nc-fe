/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  basePath: "",
  env: {
    basePath: "",
  },
  async redirects() {
    return [];
  },
  async rewrites() {
    return {
      //   beforeFiles: [
      //     {
      //       source: "/api/:path*",
      //       destination: `${process.env.NEXT_PUBLIC_DETECT_TEXT_API}/api/:path*`,
      //     },
      //   ],
    };
  },
};

module.exports = nextConfig;
