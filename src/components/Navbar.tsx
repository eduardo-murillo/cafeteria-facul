import React, { Dispatch, SetStateAction } from 'react';

import { useRouter } from 'next/router'

import { Container, Topside, Bottomside } from '../styles/Navbar';
import { BiCookie } from 'react-icons/bi'
import { IoMdSearch } from 'react-icons/io'

interface NavbarInterface {
  setActive: Dispatch<SetStateAction<string>>;
}

const Navbar: React.FC<NavbarInterface> = ({setActive}) => {
  const router = useRouter()

  return (
    <Container>
        <Topside>
            <h1 onClick={() => {setActive('Home'); router.push('/')}}>Coffee Mountain</h1>
            <BiCookie/>
        </Topside>
        {
          router.asPath === '/' && (
            <Bottomside>
                <input placeholder="O que deseja comer?" type="text"/>
                <IoMdSearch/>
            </Bottomside>
          )
        }       
    </Container>
  );
}
export default Navbar;