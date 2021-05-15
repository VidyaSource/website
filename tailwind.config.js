const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
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
            indigo: colors.indigo
        },
        extend: {
            spacing: {
                youtube: "56.25%"
            },
            height: {
                bigClientLink: '144px',
                smallClientLink: '33px'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
