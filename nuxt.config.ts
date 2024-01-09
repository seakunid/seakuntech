// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // ssr: false,
  // target: 'static',
  app: {
    baseURL: '/seakuntech/',
    buildAssetsDir: 'assets'
  },
  // router: {
  //   base: "/seakuntech/"
  // },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
