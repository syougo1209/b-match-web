import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'

export const useAuth0Token = (): string | null=> {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  const [accessToken, setAccessToken] = useState<string | null>(null)

  console.log("hogefa")
  useEffect(()=> {
    const fetchToken = async () => {
      // JWTを取得して状態に保存する
      setAccessToken(await getAccessTokenSilently())
    }
    if(isAuthenticated) {
      fetchToken()
    }
  }, [isAuthenticated, setAccessToken, getAccessTokenSilently])

  return accessToken
}
