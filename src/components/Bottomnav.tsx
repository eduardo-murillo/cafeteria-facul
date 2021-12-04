import React, { Dispatch, SetStateAction } from 'react';
import Link from 'next/link'

import { Container, Item, ActiveBar } from '../styles/Bottomnav';
import { BiShoppingBag, BiUserCircle, BiCoffee } from 'react-icons/bi'
interface BottomNavInterface {
    active: string;
    // setActive: Dispatch<SetStateAction<string>>;
}

// const Bottomnav: React.FC<BottomNavInterface> = ({active, setActive}) => {
const Bottomnav: React.FC<BottomNavInterface> = ({active}) => {

    return (
        <Container>
            <Link href="/login">
                <Item
                    className={active === 'User' && 'active'}
                    >
                    <BiUserCircle/>
                </Item>
            </Link>
            <Link href="/">
                <Item
                    className={active === 'Home' && 'active'}
                    >
                    <BiCoffee/>
                </Item>
            </Link> 
            <Link href="/basket">
                <Item
                    className={active === 'Basket' && 'active'}
                    >
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
