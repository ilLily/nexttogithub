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
  basePath: '/nexttogithub',
  assetPrefix: '/nexttogithub',
}
module.exports = nextConfig;
