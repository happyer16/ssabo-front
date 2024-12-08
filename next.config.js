const {
  createVanillaExtractPlugin,
} = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {hostname: 'www.notion.so'},
      {hostname: 'd2znn0ry2r20ti.cloudfront.net'},
    ],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};
const withImages = require('next-images');

module.exports = withVanillaExtract(withImages(nextConfig));
