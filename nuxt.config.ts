// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    transpile: ['gsap'],
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@pinia/nuxt', 'nuxt-icon',],
    target: 'static',
    ssr: false,
    css: ['@/assets/css/style.css'],
    googleFonts: {
        download: true,
        families: {
          'Architects Daughter': true,
          'Poppins': true,
           Lato: [100, 300],
           Inter: [100, 500, 700],
           Mali: {
            wght: [400, 600, 700],
          },
        },
        subsets: ['latin'],
        display: 'swap',
        prefetch: false,
        preconnect: false,
        preload: false,
        base64: false,
        },
})
