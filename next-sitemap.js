module.exports = {
    siteUrl: 'https://www.vidyasource.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: 'GPTBot',
                disallow: ['/'],
            },
        ],
    },
}