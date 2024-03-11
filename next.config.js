/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "thumbs.dreamstime.com",
      "images.oyoroomscdn.com",
      "media.istockphoto.com",
      "i.pinimg.com",
      "www.symbols.com",
      "cdn.pixabay.com",
      "images.pexels.com",
      "encrypted-tbn0.gstatic.com",
      "img.freepik.com",
    ],
  },
};

module.exports = nextConfig;
