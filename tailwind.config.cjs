/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': "#F1005F",
				'secondary': "#04B5E7",
				'white': '#f9f9f9',
				'black': '#2a2a2a'
			},
			fontFamily: {
				'body': ['"Poppins"', 'sans-serif'],
			},
			fontSize: {
				'h1': '52px',
				'h2': '36px',
				'h3': '28px',
				'paragraph': '18px',
			},
			lineHeight: {
				'paragraph': '1.5',
			},
			fontWeight: {
				'normal': '400',
				'bold': '700',
			},			
			widths: {
				'xs': '100%',
				'sm': '100%',
				'md': '100%',
				'lg': '100%',
				'xl': '1140px',
				'2xl': '1440px',
				'widescreen': '1600px',
			},
		},
		// breakpoints
		screens: {
			'xs': {
				'min': '320px',
				'max': '640px',
			},
			'sm': {
				'min': '640px',
				'max': '768px',
			},
			'md': {
				'min': '768px',
				'max': '1024px',
			},
			'lg': {
				'min': '1024px',
				'max': '1280px',
			},
			'xl': {
				'min': '1280px',
				'max': '1536px',
			},
			'2xl': {
				'min': '1600px',
				'max': '1920px',
			},
			'widescreen': {
				'min': '1920px',
			},
		},
	},
	plugins: [],
}
