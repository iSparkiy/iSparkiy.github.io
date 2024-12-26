/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',

	theme: {
		extend: {
			colors: {
				text: {
					light:'#120d0d',
					dark:'#f2eded'
				},
		
				background: {
					light: '#f2f0ee',
					dark: '#0e0c0b'
				},
		
				primary: {
					light: '#533a37',
					dark: '#c8afac'
				},
		
				secondary: {
					light: '#5b8586',
					dark: '#79a3a4',
				},
		
				accent: {
					light: '#6a8a80',
					dark: '#75958b'
				},
			},	

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
