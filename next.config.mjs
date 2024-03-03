/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.S3_PUBLIC_URL.replace("https://", ""),
      }
    ]
  }

};

export default nextConfig;
