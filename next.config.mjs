/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/v0/b/forimgsave.appspot.com/o/**',
          },
        ],
      },
};

export default nextConfig;


// https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/vikramrtask160524%2Fimg_airplane.png?alt=media&token=81e78e31-ea45-4550-ba31-8e3360aaecbf