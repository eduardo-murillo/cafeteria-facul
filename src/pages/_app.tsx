import { useState } from 'react'
import Bottomnav from '../components/Bottomnav'
import Navbar from '../components/Navbar'
import { LoginProvider } from '../context/LoginContext'
import '../styles/_globals.css'

function MyApp({ Component, pageProps }) {
  const [ active, setActive ] = useState(Component.name)
  // console.log('props', Component.name);
  

  return (
    <LoginProvider>
      <Navbar setActive={setActive}/>
          <Component {...pageProps} />
      <Bottomnav active={active} setActive={setActive} />
    </LoginProvider>
  )
}
export default MyApp