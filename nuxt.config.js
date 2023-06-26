export default {
  mode: "universal",

  ssr: true,
  target: "server",
  /*
   ** Headers of the page
   */
  head: {
    title: "Media market",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", href: "/favicon-16x16.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: "/fonts/icomoon/style.css" },
      { rel: "stylesheet", href: "/fonts/flaticon/font/flaticon.css" },
      { rel: "stylesheet", href: "/css/normalize.css" },
      { rel: "stylesheet", href: "/css/tiny-slider.css" },
      { rel: "stylesheet", href: "/css/style.css" },
    ],
    script: [
      // { hid: "stripe", src: "/js/bootstrap.bundle.min.js", defer: true },
      { hid: "stripe", src: "/js/tiny-slider.js", defer: true },
      { hid: "stripe", src: "/js/navbar.js", defer: true },
      { hid: "stripe", src: "/js/counter.js", defer: true },
      { hid: "stripe", src: "/js/custom.js", defer: true },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#f96f59" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/axios", "@/plugins/aos"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "cookie-universal-nuxt",

    ["cookie-universal-nuxt", { alias: "cookiz" }],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.ACC_API_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      // credentials: "include",
    },
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.ACC_API_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.ACC_API_URL,
    },
  },

  transition: {
    mode: "in-out",
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
