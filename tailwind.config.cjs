/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['"Fraunces"', 'serif'],
				sans: ['"Inter"', 'sans-serif'],
				mono: ['"IBM Plex Mono"', 'monospace'],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
			{
				signal: {
					"primary": "#E8A33D",
					"secondary": "#3FA7A1",
					"accent": "#E8A33D",
					"neutral": "#1B2130",
					"base-100": "#0B0E14",
					"base-200": "#12161F",
					"base-300": "#1B2130",
					"info": "#3FA7A1",
					"success": "#5FB88F",
					"warning": "#E8A33D",
					"error": "#E2685A",
					"--rounded-box": "0.5rem",
					"--rounded-btn": "0.375rem",
				},
			},
		],
		darkTheme: "signal",
		logs: false,
	  }
}
