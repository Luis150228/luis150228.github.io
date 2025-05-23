/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,js,jsx,ts,tsx}', // asegúrate de cubrir todos los archivos relevantes
	],
	theme: {
		extend: {
			screens: {
				xs: { max: '598px' }, // <--- Tu breakpoint personalizado
			},
		},
	},
	plugins: [],
};
