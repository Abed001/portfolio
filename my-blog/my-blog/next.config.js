/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    appDir: true,
  },
  /* images: {
       remotePatterns: [
         {
           protocol: 'https',
           //hostname: 'images.pexels.com' 
             // hostname:'cdn.sanity.io',
          
           port: '',
           
         },
       ],
     },*/
  images: {
    domains: ['images.pexels.com', 'cdn.sanity.io'],
  },


}

module.exports = nextConfig




