import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";
import solid from '@astrojs/solid-js';


// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [svelte(), solid()]
});
