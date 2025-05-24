/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			screens: {
				xs: { max: '598px' },
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
