/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				// Define your custom heading sizes here
				'h1': '3.5rem',
				'h2': '2.5rem',
			  },
			  colors: {
				// Define your custom text colors here
				'h1': '#7e22ce',
				'h2': '#7e22ce'
			  },
		},
	},
	plugins: []
	
}
