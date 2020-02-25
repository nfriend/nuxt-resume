const config = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nathan Friend - Résumé',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Nathan Friend's résumé. Built with NuxtJS and Tailwind CSS.",
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: 'Nathan Friend - Résumé',
      },
      {
        property: 'og:description',
        content: "Nathan Friend's résumé. Built with NuxtJS and Tailwind CSS.",
      },
      {
        property: 'og:image',
        content: 'https://resume.nathanfriend.io/screenshot.png',
      },
      {
        property: 'og:image:type',
        content: 'image/png',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        name: 'msapplication-TileColor',
        content: '#2d89ef',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    link: [
      {
        rel: 'preconnect',
        crossorigin: true,
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Bitter:400,400i,700&display=swap',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/utilities.css', '@/assets/css/global.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/global-data'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/analytics-module
    ['@nuxtjs/google-analytics', { id: 'UA-36351579-3' }],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  env: {
    isProduction: Boolean(process.env.CI),
    gitlabCi: {
      timestamp: new Date().toISOString(),
      projectUrl: process.env.CI_PROJECT_URL,
      commitSha: process.env.CI_COMMIT_SHORT_SHA,
    },

    // comment above and uncomment below
    // to simulate production environment
    // isProduction: true,
    // gitlabCi: {
    //   timestamp: new Date().toISOString(),
    //   projectUrl: 'https://gitlab.com/nfriend/nuxt-resume',
    //   commitSha: 'c6d21f92',
    // },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
};

export default config;
