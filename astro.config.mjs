// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },

  // ✅ Astro 6: fonts en raíz (estable), no en experimental
  fonts: [
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
});
