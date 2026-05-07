// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://mechaffin.github.io',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-inter',
			fallbacks: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
			weights: [400, 500, 600, 700],
			styles: ['normal'],
			subsets: ['latin'],
		},
	],
});
