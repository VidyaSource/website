const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['"Source Sans 3 Variable"', '"Source Sans Fallback"', 'sans-serif'],
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
				DEFAULT: '#914452'
			},
			green: {
				light: '#CFE1BB',
				DEFAULT: '#9DB290',
				dark: '#455930',
			},
			blue: {
				light: '#F4F9FE',
				DEFAULT: '#5381AC',
				// Header, panels, and pills carry small white or light text. White on this
				// value is 6.3:1, and green-light on it is 4.5:1. The old #436997 gave 4.09.
				dark: '#3C628F',
			},
			gray: {
				light: '#f6f6f6',
				DEFAULT: '#808284',
				// Dark-mode page surface and light-mode body text. The locked DEFAULT gray
				// (#808284) is too light to carry text in dark mode: 3.6:1 for blue-light.
				// On this value blue-light reaches 13:1 and green-light 9.9:1.
				dark: '#2B2D31',
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
