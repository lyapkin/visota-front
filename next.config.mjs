/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://visota13.ru/api",
    BACK_URL: "https://visota13.ru",
    BASE_URL: "http://localhost:3000",

    // API_URL: 'http://localhost:8000/api',
    // BACK_URL: 'http://localhost:8000',
  },
  trailingSlash: true,
};

export default nextConfig;
