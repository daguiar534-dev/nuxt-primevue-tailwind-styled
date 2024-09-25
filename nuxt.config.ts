// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  tailwindcss: {
    config: {
      plugins: [require("tailwindcss-primeui")],
    },
  },
  primevue: {
    usePrimeVue: true,
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
