import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   ppr: 'incremental',
  // },

  output: 'export',
  distDir: 'dist',
};

export default nextConfig;
