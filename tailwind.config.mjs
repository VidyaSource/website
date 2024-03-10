const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['myriad-pro', 'sans-serif'],
			serif: ['Inter var', 'serif'],
			code: ['Source Code Pro', 'font-mono', 'serif']
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: colors.white,
			yellow: colors.yellow,
			linkedin: "#0073b1",
			twitter: "#1DA1F2",
			github: "#24292e",
			youtube: "#FF0000",
			stackoverflow: "#F47F24",
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
				light: '#f6f6f6',
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
				twitter: "#1DA1F2",
				github: "#24292e",
				youtube: "#FF0000",
				stackoverflow: "#F47F24",
			}
		},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	],
}
