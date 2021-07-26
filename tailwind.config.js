const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        content: [
            './src/pages/**/*.{js,ts,jsx,tsx}',
            './src/components/**/*.{js,ts,jsx,tsx}',
        ],
        safelist: [
            'text-linkedin',
            'text-facebook',
            'text-twitter',
            'text-github',
            'text-youtube',
            'text-stackoverflow',
        ]
    },
    darkMode: "class", // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['PT Sans', 'sans-serif'],
            serif: ['Inter var', 'serif'],
            code: ['Source Code Pro', 'font-mono', 'serif']
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: colors.white,
            yellow: colors.yellow,
            red: {
                light: '#F8ECEF',
                DEFAULT: '#9c4d61'
            },
            green: {
                light: '#CFE1BB',
                DEFAULT: '#9bae87',
                dark: '#455930',
            },
            blue: {
                light: '#F4F9FE',
                DEFAULT: '#5a82b4',
                dark: '#436997',
            },
            gray: {
                light: '#E0E0E0',
                DEFAULT: '#808285',
                dark: '#494B4F',
            },
        },
        extend: {
            spacing: {
                youtube: "56.25%"
            },
            colors: {
                linkedin: "#0073b1",
                facebook: "#4267B2",
                twitter: "#1DA1F2",
                github: "#24292e",
                youtube: "#FF0000",
                stackoverflow: "#F47F24"
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
