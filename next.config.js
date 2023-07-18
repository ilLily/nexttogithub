/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }


const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/next-temple',
  assetPrefix: '/next-temple',
}
module.exports = nextConfig;
