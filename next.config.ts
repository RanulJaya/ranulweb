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
    loader: 'custom',
    loaderFile: './my-loader.ts',
  } 
};

export default nextConfig;
