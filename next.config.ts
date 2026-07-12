import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "beta.circuitodelaexcelencia.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
