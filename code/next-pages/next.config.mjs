/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  rewrites: () => {
    return [
      {
        source: "/about-us",
        destination: "/about",
      },
    ];
  },
};

export default nextConfig;
