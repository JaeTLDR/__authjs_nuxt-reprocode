import AzureAdProvider from "@auth/core/providers/azure-ad"
import type { AuthConfig } from "@auth/core/types"
import { NuxtAuthHandler } from "#auth"

const runtimeConfig = useRuntimeConfig()

export const authOptions: AuthConfig = {
  secret: runtimeConfig.auth.secret,
  providers: [
    AzureAdProvider({
      clientId: runtimeConfig.auth.azad.clientId,
      clientSecret: runtimeConfig.auth.azad.clientSecret,
      tenantId: runtimeConfig.auth.azad.tenantId,
      authorization: `https://login.microsoftonline.com/${runtimeConfig.auth.azad.tenantId}/oauth2/v2.0/authorize`,
			token: `https://login.microsoftonline.com/${runtimeConfig.auth.azad.tenantId}/oauth2/v2.0/token`,
    })
  ]
}

export default NuxtAuthHandler(authOptions, runtimeConfig)