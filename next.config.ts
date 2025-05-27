import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // this allows images from any domain
      },
      {
        protocol: "http",
        hostname: "**", // this also images from any domain over HTTP (optional)
      },
    ],
    domains: ["*"], // this  does not work as expected, remotePatterns is preferred 😉
  },
  /* config options here */
};

export default nextConfig;
