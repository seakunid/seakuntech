// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // app: {
  //   baseURL: '/seakuntech/',
  //   buildAssetsDir: 'assets'
  // },
  app: {
    head: {
      meta: [
        {
          name: 'facebook-domain-verification',
          content: 'sbd6xwm28854ys5qwzawz6h6cgcctl'
        }
      ],
    }
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
