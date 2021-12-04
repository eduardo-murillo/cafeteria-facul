import Head from 'next/head'

import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext'

import Login from '../components/Login';
import Profile from '../components/Profile';
import { useSelector } from 'react-redux';
// import Profile from '../components/Profile';      

export default function User() {
  const user = useSelector((state:any) => state.user?.id)

  
  return (
    <>      
      <Head>
        <title>Coffee Mountain | Login</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="page">
        {user ? <Profile/> : <Login/>}
      </div> 
    </>
  )
}