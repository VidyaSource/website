module.exports = {
    distDir: 'out',
    future: {
        webpack5: false,
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        return config;
    },
}