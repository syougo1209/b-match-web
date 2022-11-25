import type { AppProps } from 'next/app'
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthController } from 'components/layouts/AuthController'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Auth0Provider
        domain="dev-0d46ipjd.us.auth0.com"
        audience='http://localhost:8080'
        clientId="JQOUg8KEcEAe1SQgEYCK30MiM70Mf4YN"
        redirectUri={'http://localhost:3000'}
      >
        <AuthController>
          <Component {...pageProps} />
        </AuthController>
      </Auth0Provider>
    </ChakraProvider>
  )
}

export default MyApp
