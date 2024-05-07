/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: 'http://81.177.140.109/api',
        BACK_URL: 'http://81.177.140.109',
        BASE_URL: 'http://localhost:3000'

        // API_URL: 'http://localhost:8000/api',
        // BACK_URL: 'http://localhost:8000',
    }
};

export default nextConfig;
