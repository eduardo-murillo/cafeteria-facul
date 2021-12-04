import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
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
  let userAuth;

  if (typeof window !== "undefined") {
    userAuth = localStorage.getItem('user')
  }

  async function getAllProducts() { 
    const data = await api.get('products/all')
    const productsList = data.data.products
    console.log('lista', productsList);
    
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
      <Bottomnav active={active} />
      </>
    // </LoginProvider>
  )
}
export default storeWrapper.withRedux(MyApp)