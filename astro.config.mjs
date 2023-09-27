import { defineConfig, passthroughImageService } from 'astro/config';
import vue from "@astrojs/vue";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  image: {
    service: passthroughImageService()
  },
  output: "server",
  adapter: vercel()
});