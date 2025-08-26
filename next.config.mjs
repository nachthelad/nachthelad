/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "standalone",
  trailingSlash: false,
  poweredByHeader: false,
};

export default nextConfig;
