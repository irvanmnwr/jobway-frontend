/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    CLAUDINARY: "",
    URL_BACKEND: "https://project-jobway.herokuapp.com",
  },
  async rewrites() {
    return [
      {
        source: "/example",
        destination: "/auth/example",
      },
      {
        source: "/pekerja-register",
        destination: "/auth/pekerja/register",
      },
      {
        source: "/pekerja-login",
        destination: "/auth/pekerja/login",
      },
      {
        source: "/perekrut-login",
        destination: "/auth/perekrut/login",
      },
      {
        source: "/perekrut-register",
        destination: "/auth/perekrut/register",
      },
      {
        source: "/reset",
        destination: "/auth/reset",
      },
      {
        source: "/konfirmasi-reset",
        destination: "/auth/reset/konfirmasi",
      },
      {
        source: "/konfirmasi-login",
        destination: "/auth/reset/login",
      },
      {
        source: "/home",
        destination: "/landing",
      },

      {
        source: "/option-register",
        destination: "/auth/option/register",
      },
      {
        source: "/option-login",
        destination: "/auth/option/login",
      },
    ];
  },
};

module.exports = nextConfig;
