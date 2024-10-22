/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: {
        loader: 'custom',
        loaderFile: './my-loader.ts',
    },
    images:{
        domains: ['images.unsplash.com']
    }
};

export default nextConfig;
