import React, { Dispatch, SetStateAction } from 'react';
import Link from 'next/link'

import { Container, Item, ActiveBar } from '../styles/Bottomnav';
import { BiShoppingBag, BiUserCircle, BiCookie } from 'react-icons/bi'
interface BottomNavInterface {
    active: string;
    setActive: Dispatch<SetStateAction<string>>;
}

const Bottomnav: React.FC<BottomNavInterface> = ({active, setActive}) => {

    return (
        <Container>
            <Link href="/login">
                <Item
                    className={active === 'User' && 'active'}
                    onClick={() => setActive('User')}>
                    <BiUserCircle/>
                </Item>
            </Link>
            <Link href="/">
                <Item
                    className={active === 'Home' && 'active'}
                    onClick={() => setActive('Home')}>
                    <BiCookie/>
                </Item>
            </Link> 
            <Link href="/basket">
                <Item
                    className={active === 'Basket' && 'active'}
                    onClick={() => setActive('Basket')}>
                    <BiShoppingBag/>
                </Item>
            </Link> 
            <ActiveBar className={
                active === "User"? "left": "" + 
                active === "Home"? "middle": "" + 
                active === "Basket"? "right": ""
            }/>
        </Container>
    );
}
export default Bottomnav;
