import React, { ReactNode, useState,  } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import {
    Container,
    SelectedOption,
    DropdownContainer,
    OptionContainer,
    LeftSide,
    RightSide,
} from '../styles/PaymentMethod'
import { BsCash  } from 'react-icons/bs';
import { RiQrCodeFill } from 'react-icons/ri';
import { GoCreditCard } from 'react-icons/go';

const PaymentMethod = () => {
    const options = [
        {type: 'Dinheiro', icon: <BsCash/>}, 
        {type: 'Cartão de Crédito', icon: <GoCreditCard/>},
        {type: 'Pix', icon: <RiQrCodeFill/>},
    ];

    const [ open, setOpen ] = useState(false)
    const [ active, setActive ] = useState({type: 'Dinheiro', icon: <BsCash/>})

    function SwitchMethod(active: any){
        setOpen(!open)
        setActive(active)
    }

    return (
        <Container>
            <h1>Forma de pagamento</h1>
            <SelectedOption onClick={() => SwitchMethod(active)}>
                <Option icon={active.icon}>
                    {active.type}
                </Option>
                <RiArrowDownSLine/>
            </SelectedOption>
            <DropdownContainer className={open ? 'opened' : undefined}>
                {options.map((item, i) =>
                    <Option key={i} icon={item.icon}>
                        {item.type}
                    </Option>
                )}
            </DropdownContainer>
        </Container>
    );
    
    interface OptionProps{
        children: string
        subtitle?: string
        icon: any
    }
    
    function Option(props: OptionProps) {
        return(
            <OptionContainer onClick={() => SwitchMethod({type: props.children, icon: props.icon})}>
                <LeftSide>
                    {props.icon}
                </LeftSide>
                <RightSide>
                    <h1 className={props.children === active.type ? 'active' : undefined}>{props.children}</h1>
                </RightSide>
            </OptionContainer>
        )
    }
}

export default PaymentMethod;
