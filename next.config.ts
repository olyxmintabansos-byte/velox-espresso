import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/velox-espresso",
  images: { unoptimized: true },
};

export default nextConfig;
