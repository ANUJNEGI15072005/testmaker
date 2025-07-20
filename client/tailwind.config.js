/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: [
					'Poppins',
					'sans-serif'
				],
				lilita: [
					'Lilita One',
					'sans-serif'
				]
			},
		},
		screens: {
			sm: '640px',
			lg: '1000px',
			xl: '1394px',
			s: '365px',
		},
	},
}

