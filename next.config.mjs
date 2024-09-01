/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config) => {
    //       config.resolve.alias.canvas = false;
        
    //        return config;
    //      },
    //      future: { webpack5: true }
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false;
        }
        return config;
      },
};

export default nextConfig;

  