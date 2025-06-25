// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://luis150228.github.io/rangeldev.github.io/',
	base: '/rangeldev.github.io/',
	vite: {
		plugins: [tailwindcss()],
	},
});
