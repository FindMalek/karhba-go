/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        pathname: "/**",
        hostname: "avatars.jakerunzer.com",
      },
      {
        protocol: "https",
        port: "",
        pathname: "/**",
        hostname: "github.com",
      },
      {
        protocol: "https",
        port: "",
        pathname: "/**",
        hostname: "karhba-go.findmalek.com",
      },
    ],
    domains: ["localhost"],
  },
}

export default nextConfig
