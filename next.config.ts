import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   ppr: 'incremental',
  // },

  output: 'export',
  distDir: 'dist',

  images: { 
    unoptimized: true ,
    dangerouslyAllowSVG: true,
  } 
};

export default nextConfig;
