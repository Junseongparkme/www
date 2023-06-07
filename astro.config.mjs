import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  })],
  output: "server",
  adapter: vercel()
});