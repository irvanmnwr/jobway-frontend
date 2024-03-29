/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    CLAUDINARY:
      "https://res.cloudinary.com/dgfrrs5iz/image/upload/v1654519968/",
    URL_BACKEND: "https://project-jobway.herokuapp.com/",
    URL_BACKEND2: "http://localhost:3004",
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
        source: "/login",
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
        source: "/auth/resetPassword/:id",
        destination: "/auth/reset/konfirmasi/:id",
      },
      {
        source: "/konfirmasi-login",
        destination: "/auth/reset/login",
      },
      {
        source: "/homepage",
        destination: "/landing",
      },
      {
        source: "/View-Employee",
        destination: "/home",
      },

      {
        source: "/option-register",
        destination: "/auth/option/register",
      },
      {
        source: "/option-login",
        destination: "/auth/option/login",
      },
      {
        source: "/profile-recruiter",
        destination: "/profile/recruiter",
      },
    ];
  },
};

module.exports = nextConfig;
