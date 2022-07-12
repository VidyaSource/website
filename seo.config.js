export default {
    title: "Vidya | Build faster. Build better.",
    description: "Welcome to Vidya. Consulting and custom application development to strengthen your business. Courses and content to help you harness technology for yourself. We are a federally certified 8(a) small business by the US Small Business Administration.",
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: process.env.basePath,
        title: "Vidya | Build faster. Build better.",
        site_name: 'Vidya',
        description: "Welcome to Vidya. Build faster. Build better. Consulting and custom application development to strengthen your business. Courses and content to help you harness technology for yourself. We are a federally certified 8(a) small business by the US Small Business Administration.",
        tags: ["Vidya", "technology", "courses", "tutorials", "software", "consulting", "engineering", "automation"],
        images: [
            {
                url: `${process.env.basePath}/img/vidya-social.jpg`,
                width: 600,
                height: 387,
                alt: 'Vidya | Build faster. Build better.',
            }
        ]
    },
    twitter: {
        handle: '@RealNeilC',
        site: '@VidyaSource',
        cardType: 'summary',
    },
    facebook: {
        appId: '312450288897871'
    },
    additionalMetaTags: [
        {
            property: 'theme-color',
            content: '#5a82b4'
        }
    ]
};