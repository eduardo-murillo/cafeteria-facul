import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import api from '../../config/api';
import Bottomnav from '../components/Bottomnav'
import Navbar from '../components/Navbar'
// import { LoginProvider } from '../context/LoginContext'
import {storeWrapper} from "../store/index";
import {productsUpdate } from '../store/products';
import { userLogin } from '../store/user';
// import cookieCutter from 'cookie-cutter'
import '../styles/_globals.css'

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(Component.name)
  const user = useSelector((state:any) => state.user)
  let userAuth;

  if (typeof window !== "undefined") {
    userAuth = JSON.parse(localStorage.getItem('user'))
  }

  async function getAllProducts() { 
    const data = await api.get('products/all')
    const productsList = data.data.products
    
    dispatch(productsUpdate(productsList))
  }

  useEffect(() => {
    if(userAuth) {
      dispatch(userLogin(userAuth))
    }
    getAllProducts()
  }, [])

  useEffect(() => {
    setActive(Component.name)
  }, [Component.name])

  return (
    // <LoginProvider>
      <>
      <Navbar />
          <Component {...pageProps} />
      <Bottomnav active={active} user={user} />
      </>
    // </LoginProvider>
  )
}
export default storeWrapper.withRedux(MyApp)