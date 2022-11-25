import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthController } from 'components/layouts/AuthController'

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  )
}

export default MyApp
