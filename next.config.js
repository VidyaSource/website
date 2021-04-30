const withMDX = require('@next/mdx')({
    extension: /\.(md|mdx|markdown)$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: []
    }
})

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx', 'markdown']
})
