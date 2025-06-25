// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://luis150228.github.io/luis150228.github.io/',
	base: '/luis150228.github.io/',
	vite: {
		plugins: [tailwindcss()],
	},
});
