import { resolve } from "node:path"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@hebilicious/authjs-nuxt"
  ],
  authJs: {
    baseUrl: "https://localhost:8080",
    guestRedirectTo: "/",
    authenticatedRedirectTo: "/",
    verifyClientOnEveryRequest: true
  },
  alias: {
    cookie: resolve(__dirname, "node_modules/cookie"),
    core: resolve(__dirname, "@auth/core")
  },
  runtimeConfig: {
    auth: {
      secret: "",
      azad: {
        clientId: "",
        clientSecret: "",
        tenantId: "",
      }
    },
    public: {
      authJs: {
        baseUrl: "https://localhost:8080",
        guestRedirectTo: "/",
        authenticatedRedirectTo: "/",
        verifyClientOnEveryRequest: true
      }
    }
  },
  devServer: {
    port: 8080,
    https: {
      key: './key.pem',
      cert: './cert.pem',
    }
  },
})
