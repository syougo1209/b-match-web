import { useAuth0 } from '@auth0/auth0-react'
import {FC, ReactNode} from 'react'

type TAuthControllerProps = {
  children: ReactNode
}
export const AuthController: FC<TAuthControllerProps> =(props)=> {
  const { isAuthenticated, isLoading, error, loginWithRedirect} = useAuth0()
  if(isLoading) return <p>isLoading</p>
  if(error) {
    return <p>error</p>
  }
  if(!isAuthenticated) {
    loginWithRedirect()
    return null
  }
  return (
    <>
      {props.children}
    </>
  )
}
