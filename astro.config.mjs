// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
            fonts: [{
            provider: fontProviders.fontsource(),
            name: "Poppins",
            cssVariable: "--font-headings",
            weights:[500, 700]
        },{
            provider: fontProviders.fontsource(),
            name: "Lato",
            cssVariable: "--font-body",
            weights:[400]
        }]
  }
});