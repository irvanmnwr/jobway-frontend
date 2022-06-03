/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    CLAUDINARY: "",
    URL_BACKEND: "",
  },
  async rewrites() {
    return [
      {
        source: "/example",
        destination: "/auth/example",
      },
    ];
  },
};

module.exports = nextConfig;
