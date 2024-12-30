/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  fontFamily: {
		sans: ["Gotham SSm A, sans-serif"]
	  },
	  extend: {
		animation: {
		  'fade-in-up': 'fade-in-up 1s ease-in-out',
		  'fade-in': 'fade-in 0.5s ease-in-out'
		},
		keyframes: {
		  'fade-in-up': {
			'0%': {
			  opacity: '0',
			  transform: 'translateY(60px)',
			},
			'100%': {
			  opacity: '1',
			  transform: 'translateY(0)',
			},
		  },
		  'fade-in': {
			'0%': {
			  opacity: '0',
			},
			'100%': {
			  opacity: '1',
			},
		  },
		},
	  },
	},
	plugins: [],
  }
  