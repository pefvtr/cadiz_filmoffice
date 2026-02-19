// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      // {
      //   provider: fontProviders.fontsource(),
      //   name: "Urbanist",
      //   cssVariable: "--font-headings",
      //   weights: [500, 700, 800],
      // },
      {
        provider: fontProviders.fontsource(),
        name: "Lato",
        cssVariable: "--font-body",
        weights: [400],
      },
      {
        provider: fontProviders.local(),
        name: "Neue Graas",
        cssVariable: "--font-headings",
        options: {
          variants: [
            {
              src: ["./src/assets/fonts/neue-graas-grotesk.woff2"],
              weight: "200 700",
              style: "normal",
            },
          ],
        },
      },
    ],
  },
});
