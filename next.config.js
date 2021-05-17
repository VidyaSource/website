module.exports = {
    distDir: 'out',
    future: {
        webpack5: true,
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.node = {
                fs: 'empty'
            }
        }
        return config;
    },
}