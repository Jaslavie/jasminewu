const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
      {
        source: "/(.*)\\.(mov|mp4|webm|avi|mkv|m4v)",
        headers: [
          {
            key: "Content-Type",
            value: "video/quicktime",
          },
          {
            key: "Accept-Ranges",
            value: "bytes",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
