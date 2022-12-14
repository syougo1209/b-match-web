import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useAuth0Token } from 'hooks/useAuth0Token'
import { useAuth0 } from '@auth0/auth0-react'

const Home: NextPage = () => {
  const token = useAuth0Token()
  const useClickHandle = async () => {
    try {
      const res = await fetch('http://localhost:8080/me/conversations', {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      console.log(res.json())
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginButton /><LogoutButton />
      <button onClick={useClickHandle} />
    </div>
  )
}

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: 'http://localhost:3000' })}>
      Log Out
    </button>
  );
};

export default Home
