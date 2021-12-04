import React, { Dispatch, SetStateAction } from 'react';
import Link from 'next/link'

import { Container, Item, ActiveBar } from '../styles/Bottomnav';
import { BiShoppingBag, BiUserCircle, BiCoffee } from 'react-icons/bi'
import { useSelector } from 'react-redux';
interface BottomNavInterface {
    active: string;
    user: any;
    // setActive: Dispatch<SetStateAction<string>>;
}

const Bottomnav: React.FC<BottomNavInterface> = ({active, user}) => {
    const {basketItems} = useSelector((state:any) => state.products)

    return (
        <Container>
            <Link href="/login">
                <Item
                    className={active === 'User' ? 'active' : undefined}
                    >
                    <BiUserCircle/>
                </Item>
            </Link>
            <Link href="/">
                <Item
                    className={active === 'Home' ? 'active' : undefined}
                    style={{display:  user.id === 0 ? 'none' : 'flex' }}
                    >
                    <BiCoffee/>
                </Item>
            </Link> 
            <Link href="/basket">
                <Item
                    className={active === 'Basket' ? 'active' : undefined}
                    style={{display:  user.id === 0 ? 'none' : 'flex' }}
                    >
                    <BiShoppingBag/>
                    <span>
                        {basketItems.length}
                    </span>
                </Item>
            </Link> 
            <ActiveBar className={
                user.id === 0 ? "middle" : "" +
                active === "User"? "left": "" + 
                active === "Home"? "middle": "" + 
                active === "Basket"? "right": ""
            }/>
        </Container>
    );
}
export default Bottomnav;
