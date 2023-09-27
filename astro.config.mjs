import { defineConfig, passthroughImageService} from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  image: {
    service: passthroughImageService()
  }
});