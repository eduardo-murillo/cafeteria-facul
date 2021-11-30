import Head from 'next/head'

import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext'

import Login from '../components/Login';
// import Profile from '../components/Profile';      

export default function User() {
  const { userID } = useContext(LoginContext)
  
  return (
    <>      
      <Head>
        <title>Coffee Mountain | Login</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="page">
          <Login/>
      </div> 
    </>
  )
}