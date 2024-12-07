/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				onest: ['onest', ...defaultTheme.fontFamily.sans],
			},
			animation: {
				"loop-scroll" : "loop-scroll 25s linear infinite",
				"better-pulse" : "better-pulse .8s linear infinite"
			},
			keyframes: {
				"loop-scroll" : {
					from: {transform: "translateX(0%)"},
					to : {transform: "translateX(-100%)"},
				},

				"better-pulse" : {
					"0%" : {opacity: "0"},
					"50%" : {opacity : "1"},
					"100%" : {opacity : "0"},
				}
			}
		},
	},
	plugins: [],
}
