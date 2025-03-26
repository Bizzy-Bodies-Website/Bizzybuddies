/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "images.unsplash.com"], // Allow Sanity images
  },
};

export default nextConfig;
