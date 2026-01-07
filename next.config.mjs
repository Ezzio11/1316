/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.wwe.com',
            },
            {
                protocol: 'https',
                hostname: 'i.redd.it',
            },
            {
                protocol: 'https',
                hostname: 'preview.redd.it',
            },
            {
                protocol: 'https',
                hostname: 'external-preview.redd.it',
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
            },
            {
                protocol: 'https',
                hostname: 'pbs.twimg.com',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

export default nextConfig;
