// @ts-check
import { defineConfig } from 'astro/config';
import editableRegions from '@cloudcannon/editable-regions/astro-integration';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [editableRegions()],
  vite: {
    plugins: [tailwindcss()]
  }
});