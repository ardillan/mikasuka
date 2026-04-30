// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Fredoka",
      cssVariable: "--font-fredoka",
      options: {
        variants: [
          {
            style: "normal",
            src: ["./src/assets/fonts/fredoka/fredoka-variable.ttf"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Fivo Sans",
      cssVariable: "--font-fivoSans",
      options: {
        variants: [
          {
            weight: "700",
            style: "italic",
            src: [
              "./src/assets/fonts/fivo-sans/FivoSansModern-ExtBlkObliq.woff2",
            ],
          },
          {
            weight: "500",
            style: "italic",
            src: [
              "./src/assets/fonts/fivo-sans/FivoSansModern-MediumOblique.woff2",
            ],
          },
        ],
      },
    },
  ],
});
